import { codeReferenceAxis } from '../src/lib/reference-coding';
import { describe, expect, test } from 'bun:test';
import { questions, questionIds36, questionIds60 } from '../src/data/questions';
import { AXES, parseResultSearch, resultSearch, scoreAnswers, type AnswerValue } from '../src/lib/scoring';
import { calculateSimilarity12full, countDocumentedEvidenceAxes, documentedEvidenceAxes, preferredDocumentarySourceTitle, hasEnoughEvidenceForRankedMatch, matchReferences, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH, partitionMatchReferences, type MatchableReference } from '../src/lib/matching';
import { referenceEntries } from '../src/data/references';

describe('question sets', () => {
  for (const [size, ids] of [[36, questionIds36], [60, questionIds60], [240, questions.map(question => question.id)]] as const) {
    test(`${size} questions cover all axes`, () => {
      expect(ids).toHaveLength(size);
      expect(new Set(ids).size).toBe(size);
      const chosen = ids.map(id => questions.find(question => question.id === id));
      expect(chosen.every(Boolean)).toBe(true);
      for (const axis of AXES) expect(chosen.filter(question => question?.axisId === axis.id)).toHaveLength(size / 12);
    });
  }

  test('pool metadata preserves the original one-point weight and balanced pole directions', () => {
    expect(new Set(questions.map(question => question.id)).size).toBe(240);
    for (const question of questions) {
      expect(AXES.some(axis => axis.id === question.axisId)).toBe(true);
      expect(question.weight).toBe(1);
      expect(['LEFT', 'RIGHT']).toContain(question.agreePole);
    }
    for (const axis of AXES) {
      const onAxis = questions.filter(question => question.axisId === axis.id);
      expect(onAxis.filter(question => question.agreePole === 'LEFT')).toHaveLength(10);
      expect(onAxis.filter(question => question.agreePole === 'RIGHT')).toHaveLength(10);
    }
    for (const ids of [questionIds36, questionIds60]) {
      const selected = ids.map(id => questions.find(question => question.id === id)!);
      for (const axis of AXES) {
        const onAxis = selected.filter(question => question.axisId === axis.id);
        expect(onAxis.some(question => question.agreePole === 'LEFT')).toBe(true);
        expect(onAxis.some(question => question.agreePole === 'RIGHT')).toBe(true);
      }
    }
  });
});

describe('original scoring parity', () => {
  test('agreement, inversion, weighting and neutral midpoint', () => {
    const sample = [
      { id: 'left', axisId: 'estrutura', agreePole: 'LEFT' as const, weight: 1 },
      { id: 'right', axisId: 'estrutura', agreePole: 'RIGHT' as const, weight: 3 },
    ];
    const scores = scoreAnswers(sample, { left: 'STRONGLY_AGREE', right: 'AGREE' });
    expect(scores.est).toBe(43.8); // (1*1 + 0.25*3) / 4, one decimal
    expect(scores.rep).toBe(50);
  });

  test('each answer level follows the original Java AnswerValue', () => {
    const answers: AnswerValue[] = ['STRONGLY_AGREE', 'AGREE', 'NEUTRAL', 'DISAGREE', 'STRONGLY_DISAGREE'];
    const leftQuestion = [{ id: 'q', axisId: 'poder', agreePole: 'LEFT' as const, weight: 1 }];
    const rightQuestion = [{ id: 'q', axisId: 'poder', agreePole: 'RIGHT' as const, weight: 1 }];
    expect(answers.map(answer => scoreAnswers(leftQuestion, { q: answer }).pod)).toEqual([100, 75, 50, 25, 0]);
    expect(answers.map(answer => scoreAnswers(rightQuestion, { q: answer }).pod)).toEqual([0, 25, 50, 75, 100]);
  });

  test('rejects inherited object properties as answers instead of producing NaN', () => {
    const question = [{ id: 'q', axisId: 'estrutura', agreePole: 'LEFT' as const, weight: 1 }];
    expect(() => scoreAnswers(question, { q: 'toString' as AnswerValue })).toThrow('Resposta inválida: toString');
  });
});

test('results URL round-trips without local storage', () => {
  const scores = scoreAnswers(questions, Object.fromEntries(questions.map(question => [question.id, 'NEUTRAL'])));
  expect(parseResultSearch(resultSearch(scores))).toEqual(scores);
  const quoted = new URLSearchParams(resultSearch(scores).slice(1));
  for (const axis of AXES) quoted.set(axis.key, JSON.stringify(scores[axis.key]));
  expect(parseResultSearch(quoted.toString())).toEqual(scores);
  expect(parseResultSearch('?est=101')).toBeNull();
});

test('results URL rejects malformed or out-of-range quoted scores', () => {
  const params = new URLSearchParams(AXES.map(axis => `${axis.key}=50`).join('&'));
  params.set('est', '"101"');
  expect(parseResultSearch(params.toString())).toBeNull();
  params.set('est', '50');
  params.set('rep', '"66.7');
  expect(parseResultSearch(params.toString())).toBeNull();
});

test('matches are deterministic and expose explanatory differences', () => {
  const scores = referenceEntries[0].vec;
  const ranked = matchReferences(scores, referenceEntries);
  expect(matchReferences(scores, referenceEntries).map(match => match.reference.id)).toEqual(ranked.map(match => match.reference.id));
  expect(ranked.length).toBeGreaterThan(0);
  for (const match of ranked) {
    expect(match.similarity).toBeGreaterThanOrEqual(0);
    expect(match.similarity).toBeLessThanOrEqual(100);
    expect(match.coverage.count).toBeGreaterThanOrEqual(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH);
    expect(match.coverage.count).toBe(match.coverage.axes.length);
    expect(match.differences.map(item => item.key)).toEqual(match.coverage.axes);
  }
  expect(ranked[0].differences.length).toBe(ranked[0].coverage.count);
  expect(ranked[0].divergentAxes).toHaveLength(3);
});

test('catalog entries keep typed 12-axis provenance and category metadata', () => {
  expect(new Set(referenceEntries.map(reference => reference.id)).size).toBe(referenceEntries.length);
  for (const reference of referenceEntries) {
    expect(Object.keys(reference.vec).sort()).toEqual([...AXES.map(axis => axis.key)].sort());
    expect(reference.period.trim().length).toBeGreaterThan(0);
    expect(reference.rationale.trim().length).toBeGreaterThan(0);
    expect(reference.caveats.trim().length).toBeGreaterThan(0);
    expect(reference.sources.length).toBeGreaterThan(0);
    expect(Object.keys(reference.evidence).every(key => AXES.some(axis => axis.key === key))).toBe(true);
    expect(
      (reference.kind === 'ideology' && reference.category === 'ideology')
      || (reference.kind === 'person' && (reference.category === 'public-figure' || reference.category === 'historical-figure'))
      || (reference.kind === 'country' && (reference.category === 'country' || reference.category === 'historical-country')),
    ).toBe(true);
    for (const source of reference.sources) {
      expect(source.title.trim().length).toBeGreaterThan(0);
      expect(source.note.trim().length).toBeGreaterThan(0);
      expect(new URL(source.url).protocol).toBe('https:');
    }
  }
});

describe('evidence eligibility for match rankings', () => {
  test('keeps low-evidence profiles available but out of the ranked political matches', () => {
    const partition = partitionMatchReferences(referenceEntries);
    const turing = referenceEntries.find(reference => reference.id === 'alan-turing')!;
    expect(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH).toBe(6);
    expect(countDocumentedEvidenceAxes(turing)).toBe(0);
    expect(hasEnoughEvidenceForRankedMatch(turing)).toBe(false);
    expect(partition.insufficientEvidence.map(reference => reference.id)).toContain('alan-turing');
    expect(partition.ranked.map(reference => reference.id)).not.toContain('alan-turing');
    const neutralScores = Object.fromEntries(AXES.map(axis => [axis.key, 50])) as Record<(typeof AXES)[number]['key'], number>;
    expect(matchReferences(neutralScores, referenceEntries).map(match => match.reference.id)).not.toContain('alan-turing');
    expect(partition.ranked.length + partition.insufficientEvidence.length).toBe(referenceEntries.length);
    expect(partition.ranked.map(reference => reference.id)).toEqual(
      referenceEntries.filter(hasEnoughEvidenceForRankedMatch).map(reference => reference.id),
    );
  });

  // Synthetic passages exercise validation plumbing, not real political evidence.
  const mappedReference = (overrides: Partial<MatchableReference> = {}, count = 6): MatchableReference => {
    const source = { title: 'Cited source', url: 'https://example.org/fixture', note: 'Synthetic test fixture' };
    const vec = Object.fromEntries(AXES.map(axis => [axis.key, 60])) as MatchableReference['vec'];
    const reference: MatchableReference = { id: 'mapped-profile', name: 'Perfil mapeado', kind: 'ideology',
      vec, evidence: {}, sources: [source], axisEvidence: {}, coding: {}, ...overrides };
    for (const { key } of AXES.slice(0, count)) {
      const coded = codeReferenceAxis({ axis: key, position: reference.vec[key] === 40 ? 'moderate-second' : 'moderate-first',
        confidence: 'high', claims: [{ sourceTitle: source.title, locator: `Synthetic section ${key}`,
          statement: `Synthetic direction for ${key}`, basis: 'norm', publishedDate: '2025-01-01', accessedDate: '2026-10-07' }],
        rationale: `Synthetic construct ${key}`, uncertainty: 'Validation fixture only', reviewedOn: '2026-10-07' }, [source]);
      reference.evidence[key] = coded.evidence;
      reference.axisEvidence![key] = coded.axisEvidence;
      reference.coding![key] = coded.coding;
    }
    return reference;
  };

  test('caption source ignores archive-first bibliography and counts distinct valid axes', () => {
    const reference = mappedReference();
    const source = { title: 'Cited source', url: 'https://example.org/fixture' };
    const secondary = { title: 'Second coded source', url: 'https://example.org/secondary' };
    reference.sources = [{ title: 'Unused archived source' }, secondary, source];
    const axis = AXES[0].key;
    const coded = codeReferenceAxis({ ...reference.coding![axis]!, claims: Array.from({ length: 8 }, (_, index) => ({
      ...reference.coding![axis]!.claims[0], sourceTitle: secondary.title, locator: `Repeated passage ${index}, same axis`,
    })) }, [source, secondary]);
    reference.coding![axis] = coded.coding;
    reference.axisEvidence![axis] = coded.axisEvidence;
    expect(preferredDocumentarySourceTitle(reference)).toBe(source.title);
    for (const key of AXES.slice(1, 6).map(axis => axis.key)) reference.coding![key]!.reviewedOn = 'invalid';
    expect(preferredDocumentarySourceTitle(reference)).toBe(secondary.title);
    reference.coding![axis]!.reviewedOn = 'invalid';
    expect(preferredDocumentarySourceTitle(reference)).toBeUndefined();
    expect(reference.sources[0].title).toBe('Unused archived source');
  });

  test('does not change the raw similarity score for an eligible exact vector match', () => {
    const reference = mappedReference({}, 12);
    expect(hasEnoughEvidenceForRankedMatch(reference)).toBe(true);
    expect(matchReferences(reference.vec, [reference])[0].similarity).toBe(calculateSimilarity12full(reference.vec, reference));
    expect(matchReferences(reference.vec, [reference])[0].similarity).toBe(100);
  });

  test('unknown-axis values do not affect conditional ranking similarity', () => {
    const supported = AXES.slice(0, 6).map(axis => axis.key);
    const reference = mappedReference();
    const scores = Object.fromEntries(AXES.map(axis => [axis.key, supported.includes(axis.key) ? 62 : 10])) as typeof reference.vec;
    const before = matchReferences(scores, [reference])[0];
    const changedUnknowns = {
      ...reference,
      vec: { ...reference.vec, ...Object.fromEntries(AXES.slice(6).map(axis => [axis.key, 100])) },
    };
    const after = matchReferences(scores, [changedUnknowns])[0];
    expect(before.similarity).toBe(after.similarity);
    expect(before.coverage).toEqual({ axes: supported, count: 6, total: 12 });
    expect(before.differences.map(item => item.key)).toEqual(supported);
    expect(calculateSimilarity12full(scores, reference)).not.toBe(calculateSimilarity12full(scores, changedUnknowns));
  });

  test('only exact source-mapped, reasoned medium/high evidence makes an axis eligible', () => {
    const reference = mappedReference();
    reference.axisEvidence![AXES[5].key] = { sourceTitles: ['Uncited source'], rationale: 'Some rationale' };
    expect(documentedEvidenceAxes(reference)).toHaveLength(5);
    expect(hasEnoughEvidenceForRankedMatch(reference)).toBe(false);
    expect(matchReferences(reference.vec, [reference])).toHaveLength(0);
  });

  test('rejects legacy boilerplate without deleting archived values or source mapping', () => {
    const reference = mappedReference();
    const archived = JSON.stringify(reference.vec);
    delete reference.coding;
    expect(documentedEvidenceAxes(reference)).toEqual([]);
    expect(matchReferences(reference.vec, [reference])).toEqual([]);
    expect(JSON.stringify(reference.vec)).toBe(archived);
    expect(reference.axisEvidence).toBeDefined();
  });

  test('requires located claims, real dates, exact titles and vector/coding consistency per axis', () => {
    for (const corrupt of [
      (r: MatchableReference) => { r.coding!.est!.claims = []; },
      (r: MatchableReference) => { r.coding!.est!.claims[0].locator = ' '; },
      (r: MatchableReference) => { r.coding!.est!.claims[0].sourceTitle = 'Uncited source'; },
      (r: MatchableReference) => { r.coding!.est!.claims[0].accessedDate = '2026-02-30'; },
      (r: MatchableReference) => { r.coding!.est!.claims[0].basis = 'invented' as 'norm'; },
      (r: MatchableReference) => { r.vec.est = 80; },
      (r: MatchableReference) => { r.evidence.est = 'medium'; },
      (r: MatchableReference) => { r.axisEvidence!.est!.rationale = 'Generic copied rationale'; },
    ]) {
      const reference = mappedReference();
      corrupt(reference);
      expect(documentedEvidenceAxes(reference)).toHaveLength(5);
      expect(hasEnoughEvidenceForRankedMatch(reference)).toBe(false);
    }
    expect(documentedEvidenceAxes(mappedReference())).toHaveLength(6);
  });

  test('conditional similarity handles opposite supported poles and prefers stronger coverage on ties', () => {
    const supported = AXES.slice(0, 6).map(axis => axis.key);
    const scores = Object.fromEntries(AXES.map(axis => [axis.key, 60])) as Record<(typeof AXES)[number]['key'], number>;
    const exact = mappedReference();
    const opposite = mappedReference({ id: 'opposite-profile', vec: Object.fromEntries(AXES.map(axis => [axis.key, supported.includes(axis.key) ? 40 : 60])) as MatchableReference['vec'] });
    expect(matchReferences(scores, [opposite, exact]).map(match => match.reference.id)).toEqual(['mapped-profile', 'opposite-profile']);
    expect(matchReferences(scores, [exact])[0].similarity).toBe(100);
    expect(matchReferences(scores, [opposite])[0].similarity).toBeLessThan(100);

    const broaderTie = mappedReference({ id: 'a-broader' }, 7);
    const narrowerTie = mappedReference({ id: 'z-narrower' });
    const neutralScores = Object.fromEntries(AXES.map(axis => [axis.key, 50])) as typeof scores;
    expect(matchReferences(neutralScores, [narrowerTie, broaderTie]).map(match => match.reference.id)).toEqual(['a-broader', 'z-narrower']);
  });

  test('rejects invalid current or future scores and reference vector values', () => {
    const validReference = referenceEntries.find(entry => entry.id === 'social-democracy')!;
    expect(() => matchReferences({ ...validReference.vec, est: 101 }, [validReference])).toThrow();
    const invalidReference = { ...validReference, vec: { ...validReference.vec, tec: -1 } };
    expect(() => matchReferences(validReference.vec, [invalidReference])).toThrow();
    const insufficientButInvalid = { ...referenceEntries.find(entry => entry.id === 'alan-turing')!, vec: { ...referenceEntries.find(entry => entry.id === 'alan-turing')!.vec, tec: 101 } };
    expect(() => partitionMatchReferences([insufficientButInvalid])).toThrow();
  });
});
