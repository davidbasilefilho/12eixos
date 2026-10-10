import { describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { AXIS_KEYS, referenceEntries } from '../src/data/references';
import { selectedReferenceEntries, selectedIdeologyEntries, fullReferenceCatalog, archivedReferenceEntries } from '../src/data/reference-selected-catalog';
import { fifthIdeologies20261010Definitions as definitions, fifthIdeologies20261010ExpectedPosts as posts, reconcileFifthIdeologies20261010 as reconcile } from '../src/data/reference-fifth-ideologies-20261010';
import { codeReferenceAxis } from '../src/lib/reference-coding';
import { documentedEvidenceAxes, partitionMatchReferences, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } from '../src/lib/matching';

const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const expectedAxes = [
  ['est', 'rep', 'pod', 'eco', 'con', 'rel', 'mor'],
  ['est', 'rep', 'imi', 'dip', 'mor'],
  ['est', 'rep', 'eco', 'con', 'tec'],
];

describe('three independently researched fifth-batch selected ideology reconciliations', () => {
  test('preserves all raw818, taxonomy and same-ID selected/full lookup agreement', () => {
    expect(referenceEntries).toHaveLength(818);
    expect(hash(referenceEntries)).toBe('1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a');
    expect(selectedReferenceEntries).toHaveLength(675);
    expect(selectedIdeologyEntries).toHaveLength(75);
    expect(new Set(selectedIdeologyEntries.map(entry => entry.id)).size).toBe(75);
    expect(fullReferenceCatalog).toHaveLength(868);
    expect(archivedReferenceEntries).toHaveLength(193);
    for (const [index, definition] of definitions.entries()) {
      const selected = selectedReferenceEntries.find(entry => entry.id === definition.before.id)!;
      expect(selected).toEqual(posts[index]);
      expect(fullReferenceCatalog.find(entry => entry.id === selected.id)).toBe(selected);
      for (const field of ['id', 'kind', 'category', 'name', 'period', 'rationale'] as const) {
        expect(selected[field]).toBe(definition.before[field]);
      }
      expect(selected.sources.slice(0, definition.before.sources.length)).toEqual(definition.before.sources);
    }
  });

  test('adds only declared codes and retains explicit unknowns in all four axis fields', () => {
    expect(definitions.reduce((count, definition) => count + definition.codings.length, 0)).toBe(17);
    for (const [index, definition] of definitions.entries()) {
      const post = posts[index]!;
      expect(documentedEvidenceAxes(definition.before)).toEqual([]);
      expect(documentedEvidenceAxes(post)).toEqual(expectedAxes[index]);
      const codedAxes = new Set(definition.codings.map(coding => coding.axis));
      expect(codedAxes.size).toBe(definition.codings.length);
      for (const axis of AXIS_KEYS) {
        if (!codedAxes.has(axis)) {
          expect(definition.unknownAxisReasons[axis]).toBeTruthy();
          expect(post.vec[axis]).toBe(definition.before.vec[axis]);
          expect(post.evidence[axis]).toBe(definition.before.evidence[axis]);
          expect(post.axisEvidence?.[axis]).toEqual(definition.before.axisEvidence?.[axis]);
          expect(post.coding?.[axis]).toEqual(definition.before.coding?.[axis]);
        } else {
          expect(definition.unknownAxisReasons[axis]).toBeUndefined();
        }
      }
      for (const input of definition.codings) {
        expect(input.reviewedOn).toBe('2026-10-10');
        expect(input.claims.every(claim => claim.accessedDate === '2026-10-10')).toBe(true);
        expect(input.claims.every(claim => claim.basis === 'declaration')).toBe(true);
        expect(codeReferenceAxis(input, post.sources).coding).toEqual(post.coding![input.axis]);
      }
      expect(post.caveats).not.toContain('não atribui novos scores');
      expect(post.caveats).not.toContain('IMI é somente perspectiva');
    }
  });

  test('leaves Mao and Rothbard unchanged rather than filling the closest gap or changing editions', () => {
    const mao = selectedReferenceEntries.find(entry => entry.id === 'ideology-maoism')!;
    expect(documentedEvidenceAxes(mao)).toHaveLength(5);
    expect(mao.coding?.con).toBeUndefined();
    const rothbard = selectedReferenceEntries.find(entry => entry.id === 'ideology-right-austrian-libertarianism')!;
    expect(rothbard.period).toBe('For a New Liberty, Murray Rothbard, 1973');
    expect(documentedEvidenceAxes(rothbard)).toEqual([]);
    expect(reconcile(mao)).toBe(mao);
    expect(reconcile(rothbard)).toBe(rothbard);
    for (const entry of selectedReferenceEntries) {
      if (!definitions.some(definition => definition.before.id === entry.id)) expect(reconcile(entry)).toBe(entry);
    }
  });

  test('does not overwrite later source, coding, rationale or unknown-reason revisions', () => {
    for (const [index, definition] of definitions.entries()) {
      const before = structuredClone(definition.before), saved = hash(before);
      const post = reconcile(before);
      expect(hash(before)).toBe(saved);
      expect(post.sources.slice(0, before.sources.length).every((source, i) => source === before.sources[i])).toBe(true);
      expect(reconcile(post)).toBe(post);
      expect(reconcile(posts[index]!)).toBe(posts[index]!);
      expect(() => reconcile({ ...before, rationale: `${before.rationale} Revisão posterior.` })).toThrow('baseline diverged');
      expect(() => reconcile({ ...before, sources: before.sources.map((source, i) => i ? source : { ...source, note: `${source.note} Revisão posterior.` }) })).toThrow('baseline diverged');
      expect(() => reconcile({ ...post, caveats: `${post.caveats} Revisão posterior.` })).toThrow('baseline diverged');
      const edited = structuredClone(post) as typeof post & { unknownAxisReasons: Record<string, string> };
      edited.unknownAxisReasons.tec = 'Revisão posterior.';
      expect(() => reconcile(edited)).toThrow('baseline diverged');
    }
  });

  test('retains the six-axis gate; only Ambedkar crosses it, with sixteen minimum slots closed', () => {
    expect(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH).toBe(6);
    const before = partitionMatchReferences(definitions.map(definition => definition.before));
    const after = partitionMatchReferences(posts);
    expect(before.ranked).toEqual([]);
    expect(after.ranked.map(entry => entry.id)).toEqual(['ideology-ambedkarite-constitutional-socialism']);
    expect(after.insufficientEvidence.map(entry => entry.id)).toEqual([
      'ideology-democratic-confederalism-ocalan-2011', 'ideology-communalism',
    ]);
    const missing = (entries: typeof posts) => entries.reduce((count, entry) => count + Math.max(0, 6 - documentedEvidenceAxes(entry).length), 0);
    expect(missing(definitions.map(definition => definition.before)) - missing(posts)).toBe(16);
    // Current integrated catalog; the local fifth-batch delta remains exactly sixteen slots.
    expect(partitionMatchReferences(selectedReferenceEntries).ranked).toHaveLength(93);
    expect(missing(selectedReferenceEntries)).toBe(2881);
  });

  test('preserves substantive counterevidence instead of rewarding a political label', () => {
    const [ambedkar, ocalan, bookchin] = posts;
    expect(ambedkar!.vec.con).toBe(60);
    expect(ambedkar!.vec.rel).toBe(60); // Nonconfessional institutions are not personal atheism.
    expect(ambedkar!.coding!.rep!.uncertainty).toContain('Eleitorados separados');
    expect(ocalan!.vec.dip).toBe(40);
    expect(ocalan!.coding!.dip!.claims[0]!.statement).toContain('autodefesa');
    expect(ocalan!.coding!.pod).toBeUndefined();
    expect(ocalan!.coding!.int).toBeUndefined();
    expect(bookchin!.vec.est).toBe(60); // Confederation constrains unilateral withdrawal.
    expect(bookchin!.coding!.est!.claims[0]!.statement).toContain('autorização confederal');
    expect(bookchin!.vec.tec).toBe(60);
    expect(bookchin!.coding!.imi).toBeUndefined();
    expect(bookchin!.coding!.mor).toBeUndefined();
  });
});
