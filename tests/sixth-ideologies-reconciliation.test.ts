import { describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { AXIS_KEYS, referenceEntries, type ReferenceEntry } from '../src/data/references';
import { selectedReferenceEntries, selectedIdeologyEntries, fullReferenceCatalog, archivedReferenceEntries } from '../src/data/reference-selected-catalog';
import { sixthIdeologies20261010Definitions as definitions, sixthIdeologies20261010ExpectedPosts as posts, reconcileSixthIdeologies20261010 as reconcile } from '../src/data/reference-sixth-ideologies-20261010';
import { codeReferenceAxis } from '../src/lib/reference-coding';
import { documentedEvidenceAxes, partitionMatchReferences, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } from '../src/lib/matching';

const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const expectedAxes = [['rep', 'eco', 'mor'], ['rep', 'eco'], ['est', 'eco', 'con', 'tec']];
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

describe('three bounded sixth-batch selected ideology reconciliations', () => {
  test('preserves raw818, inventory, metadata and all previous sources', () => {
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
      for (const field of ['id', 'kind', 'category', 'name', 'period', 'rationale'] as const) {
        expect(post[field]).toBe(definition.before[field]);
      }
      expect(post.sources.slice(0, definition.before.sources.length)).toEqual(definition.before.sources);
      expect(current).toEqual(posts[index]);
      expect(fullReferenceCatalog.find(entry => entry.id === current.id)).toBe(current);
    }
  });

  test('adds only nine medium-confidence declarations, with unknowns preserved in all fields', () => {
    expect(definitions.reduce((sum, definition) => sum + definition.codings.length, 0)).toBe(9);
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
      expect(post.caveats).toContain('permanece parcial');
    }
  });

  test('is immutable and idempotent, including a recursively frozen input', () => {
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

  test('rejects stale baselines and later source, code or unknown-reason changes', () => {
    for (const [index, definition] of definitions.entries()) {
      const before = structuredClone(definition.before), post = posts[index]!;
      for (const field of ['name', 'period', 'rationale', 'caveats'] as const) {
        expect(() => reconcile({ ...before, [field]: `${before[field]} Revisão posterior.` })).toThrow('baseline diverged');
      }
      expect(() => reconcile({ ...before, sources: [...before.sources, { title: 'Nova fonte', url: 'https://example.org/', note: 'Revisão posterior.' }] })).toThrow('baseline diverged');
      expect(() => reconcile({ ...before, vec: { ...before.vec, pod: 40 } })).toThrow('baseline diverged');
      expect(() => reconcile({ ...post, caveats: `${post.caveats} Revisão posterior.` })).toThrow('baseline diverged');
      const changedCode = structuredClone(post);
      const axis = definition.codings[0]!.axis;
      changedCode.coding![axis]!.uncertainty += ' Revisão posterior.';
      expect(() => reconcile(changedCode)).toThrow('baseline diverged');
      const changedUnknown = structuredClone(post) as typeof post & { unknownAxisReasons: Record<string, string> };
      changedUnknown.unknownAxisReasons.pod = 'Revisão posterior.';
      expect(() => reconcile(changedUnknown)).toThrow('baseline diverged');
    }
  });

  test('keeps all three partial under the unchanged six-axis gate, closing nine minimum slots', () => {
    expect(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH).toBe(6);
    expect(partitionMatchReferences(definitions.map(definition => definition.before)).ranked).toEqual([]);
    expect(partitionMatchReferences(posts).ranked).toEqual([]);
    expect(partitionMatchReferences(posts).insufficientEvidence.map(entry => entry.id)).toEqual(definitions.map(definition => definition.before.id));
    expect(missing(beforeSelection) - missing(projectedSelection)).toBe(9);
    expect(missing(selectedReferenceEntries)).toBe(2868);
    expect(partitionMatchReferences(projectedSelection).ranked.map(entry => entry.id))
      .toEqual(partitionMatchReferences(beforeSelection).ranked.map(entry => entry.id));
  });

  test('does not touch other profiles, including already-coded Greens and national conservatism', () => {
    for (const entry of selectedReferenceEntries) {
      if (!byId.has(entry.id)) expect(reconcile(entry)).toBe(entry);
    }
    for (const id of ['green-politics', 'ideology-national-conservatism', 'ideology-ambedkarite-constitutional-socialism', 'ideology-democratic-confederalism-ocalan-2011', 'ideology-communalism']) {
      const entry = selectedReferenceEntries.find(entry => entry.id === id)!;
      expect(entry).toBeTruthy();
      expect(reconcile(entry)).toBe(entry);
    }
  });

  test('keeps the source-specific limits and rejects tempting cross-axis substitutions', () => {
    const [combahee, malcolm, newton] = posts;
    expect(combahee!.vec.rep).toBe(60);
    expect(combahee!.vec.eco).toBe(60);
    expect(combahee!.vec.mor).toBe(80);
    expect(combahee!.coding!.eco!.uncertainty).toContain('titularidade jurídica');
    expect(combahee!.coding!.con).toBeUndefined();
    expect(combahee!.coding!.tec).toBeUndefined();
    expect(malcolm!.vec.rep).toBe(60);
    expect(malcolm!.vec.eco).toBe(40);
    expect(malcolm!.coding!.rep!.uncertainty).toContain('alternativa armada');
    expect(malcolm!.coding!.eco!.rationale).toContain('empresarial local');
    expect(malcolm!.coding!.rel).toBeUndefined();
    expect(malcolm!.coding!.pod).toBeUndefined();
    expect(malcolm!.coding!.com).toBeUndefined();
    expect(newton!.vec.est).toBe(60);
    expect(newton!.vec.eco).toBe(80);
    expect(newton!.vec.con).toBe(80);
    expect(newton!.vec.tec).toBe(60);
    expect(newton!.coding!.est!.uncertainty).toContain('coordenação econômica global');
    expect(newton!.coding!.eco!.claims[0]!.locator).not.toBe(newton!.coding!.con!.claims[0]!.locator);
    expect(newton!.coding!.tec!.uncertainty).toContain('não é incondicionalmente positiva');
    expect(newton!.coding!.rep).toBeUndefined();
    expect(newton!.coding!.rel).toBeUndefined();
  });
});
