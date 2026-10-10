import { describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { AXIS_KEYS, referenceEntries, type ReferenceEntry } from '../src/data/references';
import { selectedReferenceEntries, selectedIdeologyEntries, fullReferenceCatalog, archivedReferenceEntries } from '../src/data/reference-selected-catalog';
import { seventhIdeologies20261010Definitions as definitions, seventhIdeologies20261010ExpectedPosts as posts, reconcileSeventhIdeologies20261010 as reconcile } from '../src/data/reference-seventh-ideologies-20261010';
import { codeReferenceAxis } from '../src/lib/reference-coding';
import { documentedEvidenceAxes, partitionMatchReferences, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } from '../src/lib/matching';

const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const expectedAxes = [['eco'], ['pod', 'dip', 'rel'], ['est', 'rep', 'dip', 'com', 'rel', 'tec'], ['rep', 'eco', 'con']];
const byId = new Map(definitions.map(definition => [definition.before.id, definition]));
const projectedSelection = selectedReferenceEntries.map(reconcile);
const beforeSelection = selectedReferenceEntries.map(entry => byId.get(entry.id)?.before ?? entry);
const missing = (entries: ReferenceEntry[]) => entries.reduce((sum, entry) => sum + Math.max(0, 6 - documentedEvidenceAxes(entry).length), 0);

function freezeDeep<T>(value: T): T {
  if (value && typeof value === 'object') {
    Object.freeze(value);
    for (const child of Object.values(value)) freezeDeep(child);
  }
  return value;
}

describe('four independently reviewed seventh-batch selected ideology reconciliations', () => {
  test('preserves raw818, inventory, exact selected identities and prior source order', () => {
    expect(referenceEntries).toHaveLength(818);
    expect(hash(referenceEntries)).toBe('1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a');
    expect(selectedReferenceEntries).toHaveLength(675);
    expect(selectedIdeologyEntries).toHaveLength(75);
    expect(fullReferenceCatalog).toHaveLength(868);
    expect(archivedReferenceEntries).toHaveLength(193);
    expect(projectedSelection.map(entry => entry.id)).toEqual(selectedReferenceEntries.map(entry => entry.id));
    for (const [index, definition] of definitions.entries()) {
      const current = selectedReferenceEntries.find(entry => entry.id === definition.before.id)!;
      const post = projectedSelection.find(entry => entry.id === definition.before.id)!;
      expect(reconcile(current)).toEqual(posts[index]);
      expect(post).toEqual(posts[index]);
      expect(current).toEqual(posts[index]);
      expect(fullReferenceCatalog.find(entry => entry.id === current.id)).toBe(current);
      for (const field of ['id', 'kind', 'category', 'name', 'period', 'rationale'] as const) {
        expect(post[field]).toBe(definition.before[field]);
      }
      expect(post.sources.slice(0, definition.before.sources.length)).toEqual(definition.before.sources);
    }
  });

  test('adds thirteen medium-confidence declarations and preserves all thirty-five unknowns', () => {
    expect(definitions.reduce((sum, definition) => sum + definition.codings.length, 0)).toBe(13);
    expect(definitions.reduce((sum, definition) => sum + Object.keys(definition.unknownAxisReasons).length, 0)).toBe(35);
    for (const [index, definition] of definitions.entries()) {
      const post = posts[index]!;
      expect(documentedEvidenceAxes(definition.before)).toEqual([]);
      expect(documentedEvidenceAxes(post)).toEqual(expectedAxes[index]);
      const axes = new Set(definition.codings.map(coding => coding.axis));
      expect(axes.size).toBe(definition.codings.length);
      for (const axis of AXIS_KEYS) {
        if (axes.has(axis)) {
          expect(definition.unknownAxisReasons[axis]).toBeUndefined();
        } else {
          expect(definition.unknownAxisReasons[axis]).toBeTruthy();
          expect(post.vec[axis]).toBe(50);
          expect(post.evidence[axis]).toBeUndefined();
          expect(post.axisEvidence?.[axis]).toBeUndefined();
          expect(post.coding?.[axis]).toBeUndefined();
          expect(post.vec[axis]).toBe(definition.before.vec[axis]);
        }
      }
      for (const input of definition.codings) {
        expect(input.confidence).toBe('medium');
        expect(input.reviewedOn).toBe('2026-10-10');
        expect(input.claims.every(claim => claim.basis === 'declaration' && claim.accessedDate === '2026-10-10')).toBe(true);
        expect(input.claims.every(claim => definition.addedSources.some(source => source.title === claim.sourceTitle))).toBe(true);
        expect(codeReferenceAxis(input, post.sources).coding).toEqual(post.coding![input.axis]);
      }
      expect(post.caveats).not.toContain('não atribui novos scores');
    }
  });

  test('does not mutate recursively frozen input and accepts only the exact idempotent post', () => {
    for (const [index, definition] of definitions.entries()) {
      const before = freezeDeep(structuredClone(definition.before));
      const saved = hash(before), result = reconcile(before);
      expect(hash(before)).toBe(saved);
      expect(result).not.toBe(before);
      expect(result).toEqual(posts[index]);
      expect(result.sources.slice(0, before.sources.length).every((source, i) => source === before.sources[i])).toBe(true);
      for (const field of ['sources', 'vec', 'evidence', 'axisEvidence', 'coding'] as const) {
        expect(result[field]).not.toBe(before[field]);
      }
      expect(reconcile(result)).toBe(result);
      expect(reconcile(posts[index]!)).toBe(posts[index]!);
    }
  });

  test('rejects later edits to metadata, source, vector, evidence, code or unknown reasons', () => {
    for (const [index, definition] of definitions.entries()) {
      const before = structuredClone(definition.before), post = posts[index]!;
      for (const field of ['name', 'period', 'rationale', 'caveats'] as const) {
        expect(() => reconcile({ ...before, [field]: `${before[field]} Revisão posterior.` })).toThrow('baseline diverged');
      }
      expect(() => reconcile({ ...before, sources: before.sources.map((source, i) => i ? source : { ...source, note: `${source.note} Revisão posterior.` }) })).toThrow('baseline diverged');
      expect(() => reconcile({ ...before, vec: { ...before.vec, pod: 40 } })).toThrow('baseline diverged');
      expect(() => reconcile({ ...post, evidence: { ...post.evidence, eco: 'high' } })).toThrow('baseline diverged');
      expect(() => reconcile({ ...post, caveats: `${post.caveats} Revisão posterior.` })).toThrow('baseline diverged');
      const changedCode = structuredClone(post);
      const axis = definition.codings[0]!.axis;
      changedCode.coding![axis]!.uncertainty += ' Revisão posterior.';
      expect(() => reconcile(changedCode)).toThrow('baseline diverged');
      const changedUnknown = structuredClone(post) as typeof post & { unknownAxisReasons: Record<string, string> };
      const unknownAxis = Object.keys(definition.unknownAxisReasons)[0]!;
      changedUnknown.unknownAxisReasons[unknownAxis] = 'Revisão posterior.';
      expect(() => reconcile(changedUnknown)).toThrow('baseline diverged');
    }
  });

  test('only Gandhi crosses the unchanged gate and exactly thirteen minimum slots close', () => {
    expect(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH).toBe(6);
    expect(partitionMatchReferences(definitions.map(definition => definition.before)).ranked).toEqual([]);
    expect(partitionMatchReferences(posts).ranked.map(entry => entry.id)).toEqual(['ideology-gandhian-swaraj']);
    expect(partitionMatchReferences(posts).insufficientEvidence.map(entry => entry.id)).toEqual([
      'ideology-anarcho-communism', 'ideology-pacifist-anarchism', 'ideology-national-liberation-socialism',
    ]);
    expect(missing(beforeSelection) - missing(projectedSelection)).toBe(13);
    expect(missing(projectedSelection)).toBe(2868);
    expect(partitionMatchReferences(projectedSelection).ranked).toHaveLength(94);
    expect(partitionMatchReferences(projectedSelection).insufficientEvidence).toHaveLength(581);
    expect(projectedSelection.filter(entry => entry.category === 'ideology' && documentedEvidenceAxes(entry).length === 0)).toHaveLength(40);
  });

  test('leaves every other profile untouched, including already-coded Bakunin and Baath', () => {
    for (const entry of selectedReferenceEntries) {
      if (!byId.has(entry.id)) expect(reconcile(entry)).toBe(entry);
    }
    for (const id of ['ideology-left-anarcho-collectivism', 'ideology-left-baathism']) {
      const entry = selectedReferenceEntries.find(entry => entry.id === id)!;
      expect(documentedEvidenceAxes(entry)).toHaveLength(8);
      expect(reconcile(entry)).toBe(entry);
    }
  });

  test('does not conflate criticized systems, pacifism, religion or commerce with other axes', () => {
    const [kropotkin, tolstoy, gandhi, arusha] = posts;
    expect(kropotkin!.vec.eco).toBe(80);
    expect(kropotkin!.coding!.eco!.uncertainty).toContain('não empregador estatal');
    expect(kropotkin!.coding!.con).toBeUndefined();
    expect(kropotkin!.coding!.rep).toBeUndefined();
    expect(tolstoy!.vec.pod).toBe(40);
    expect(tolstoy!.vec.dip).toBe(20);
    expect(tolstoy!.vec.rel).toBe(40);
    expect(tolstoy!.coding!.rel!.uncertainty).toContain('igreja oficial');
    expect(tolstoy!.coding!.int).toBeUndefined();
    expect(gandhi!.vec.com).toBe(60);
    expect(gandhi!.coding!.com!.uncertainty).toContain('tecido importado');
    expect(gandhi!.coding!.eco).toBeUndefined();
    expect(gandhi!.coding!.pod).toBeUndefined();
    expect(arusha!.vec.rep).toBe(60);
    expect(arusha!.vec.eco).toBe(80);
    expect(arusha!.vec.con).toBe(60);
    expect(arusha!.coding!.rep!.uncertainty).toContain('filtrada ideologicamente');
    expect(arusha!.coding!.eco!.claims[0]!.locator).not.toBe(arusha!.coding!.con!.claims[0]!.locator);
    expect(arusha!.coding!.com).toBeUndefined();
    expect(definitions[3]!.unknownAxisReasons.com).toContain('repatriação de lucros');
  });

  test('keeps Gandhi within period and traces later technology counterevidence separately', () => {
    const gandhi = posts[2]!;
    expect(gandhi.vec.est).toBe(80);
    expect(gandhi.vec.rep).toBe(60);
    expect(gandhi.vec.tec).toBe(40);
    expect(gandhi.coding!.est!.claims[0]!.locator).toContain('28/7/1946');
    expect(gandhi.coding!.rep!.uncertainty).toContain('Qualificações não especificadas');
    expect(gandhi.coding!.rep!.uncertainty).toContain('legislativo, executivo e judiciário');
    expect(gandhi.coding!.tec!.claims).toHaveLength(2);
    expect(gandhi.coding!.tec!.claims[1]!.publishedDate).toContain('28/7/1946');
    expect(gandhi.coding!.tec!.claims[1]!.sourceTitle).not.toBe(gandhi.coding!.tec!.claims[0]!.sourceTitle);
    expect(gandhi.coding!.tec!.relatedQuestionIds).toEqual(['tecnologia_02', 'tecnologia_03']);
    expect(gandhi.coding!.tec!.uncertainty).toContain('não é rejeição categórica');
    expect(definitions[2]!.addedSources.find(source => source.title.startsWith('Panchayat Raj'))!.note).toContain('1922 e 1948 excluídos');
    expect(gandhi.period).toBe(definitions[2]!.before.period);
  });
});
