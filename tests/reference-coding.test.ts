import { describe, expect, test } from 'bun:test';
import { codeReferenceAxis, EDITORIAL_ANCHORS, REFERENCE_CODING_VERSION, type ReferenceAxisCoding } from '../src/lib/reference-coding';
import { AXIS_KEYS, referenceEntries } from '../src/data/references';
import { documentedEvidenceAxes, partitionMatchReferences } from '../src/lib/matching';

const fixture: ReferenceAxisCoding = {
  axis: 'est', position: 'strong-first', confidence: 'high',
  claims: [{ sourceTitle: 'Located test document', locator: 'Article 1', statement: 'Explicit division of legislative competence.', basis: 'norm', publishedDate: '2025 edition', accessedDate: '2026-10-07' }],
  rationale: 'The located article defines residual regional legislative powers.',
  uncertainty: 'This tests formal institutional coding rather than effective implementation.',
  reviewedOn: '2026-10-07',
};
const sources = [{ title: 'Located test document', url: 'https://example.org/document', note: 'Synthetic plumbing fixture, never imported as a profile.' }];

describe('auditable reference coding', () => {
  test('rejects unlocated claims, unmatched exact titles and invalid calendar dates', () => {
    expect(() => codeReferenceAxis({ ...fixture, claims: [] }, sources)).toThrow('located');
    expect(() => codeReferenceAxis({ ...fixture, claims: [{ ...fixture.claims[0], locator: '' }] }, sources)).toThrow('locator');
    expect(() => codeReferenceAxis({ ...fixture, claims: [{ ...fixture.claims[0], sourceTitle: 'located test document' }] }, sources)).toThrow('Unlisted');
    expect(() => codeReferenceAxis({ ...fixture, reviewedOn: '2026-02-30' }, sources)).toThrow('date');
    expect(() => codeReferenceAxis({ ...fixture, claims: [{ ...fixture.claims[0], accessedDate: '2026-13-07' }] }, sources)).toThrow('date');
    expect(() => codeReferenceAxis({ ...fixture, uncertainty: '' }, sources)).toThrow('uncertainty');
  });

  test('rejects malformed imported codes and crosswalks outside the coded axis', () => {
    for (const patch of [{ axis: 'invalid' }, { position: 'constructor' }, { confidence: 'low' }, { relatedQuestionIds: ['missing-id'] }, { relatedQuestionIds: ['estrutura_01'], axis: 'rep' }]) {
      expect(() => codeReferenceAxis({ ...fixture, ...patch } as ReferenceAxisCoding, sources)).toThrow('Invalid');
    }
    expect(() => codeReferenceAxis({ ...fixture, claims: [{ ...fixture.claims[0], basis: 'unknown' }] } as unknown as ReferenceAxisCoding, sources)).toThrow('basis');
    const encoded = codeReferenceAxis({ ...fixture, relatedQuestionIds: ['estrutura_01'] }, sources);
    expect(encoded.coding.relatedQuestionIds).toEqual(['estrutura_01']);
    expect(encoded.value).toBe(80);
  });

  test('retains a reproducible anchor and range without changing source confidence', () => {
    const encoded = codeReferenceAxis(fixture, sources);
    expect(encoded.value).toBe(80);
    expect(encoded.evidence).toBe('high');
    expect(encoded.coding.range).toEqual([75, 90]);
    expect(encoded.coding.version).toBe(REFERENCE_CODING_VERSION);
    expect(encoded.axisEvidence?.sourceTitles).toEqual(['Located test document']);
    expect(encoded.coding.claims[0].locator).toBe('Article 1');
  });

  test('retains an amended constitutional claim as unknown instead of requalifying it from a source alone', () => {
    const djibouti = referenceEntries.find(entry => entry.id === 'djibouti-current-2025');
    expect(djibouti).toBeDefined();
    expect(djibouti!.sources.some(source => source.title.includes('constitucional'))).toBe(true);
    expect(djibouti!.vec.rel).toBe(50);
    expect(djibouti!.evidence.rel).toBeUndefined();
    expect(djibouti!.axisEvidence?.rel).toBeUndefined();
    expect(djibouti!.coding?.rel).toBeUndefined();
    expect(documentedEvidenceAxes(djibouti!)).not.toContain('rel');
  });

  test('keeps integrated coding aligned with vectors, citations and documented-axis gate', () => {
    expect(referenceEntries.some(entry => entry.coding)).toBe(true);
    for (const entry of referenceEntries) {
      const coding = entry.coding;
      if (!coding) continue;
      for (const axis of AXIS_KEYS) {
        const record = coding[axis];
        if (!record) {
          expect(entry.vec[axis]).toBe(50);
          expect(entry.evidence[axis]).toBeUndefined();
          expect(entry.axisEvidence?.[axis]).toBeUndefined();
          continue;
        }
        const anchor = EDITORIAL_ANCHORS[record.position];
        expect(record.axis).toBe(axis);
        expect(record.version).toBe(REFERENCE_CODING_VERSION);
        expect(record.value).toBe(anchor.value);
        expect(record.range).toEqual(anchor.range);
        expect(entry.vec[axis]).toBe(record.value);
        expect(entry.evidence[axis]).toBe(record.confidence);
        expect(documentedEvidenceAxes(entry)).toContain(axis);
        expect(entry.axisEvidence?.[axis]?.sourceTitles).toEqual([...new Set(record.claims.map(claim => claim.sourceTitle))]);
        for (const claim of record.claims) expect(entry.sources.some(source => source.title === claim.sourceTitle)).toBe(true);
      }
    }
    // The encoding API never lowers the established six-axis matching threshold.
    const { ranked } = partitionMatchReferences(referenceEntries);
    expect(ranked.every(entry => documentedEvidenceAxes(entry).length >= 6)).toBe(true);
  });
});
