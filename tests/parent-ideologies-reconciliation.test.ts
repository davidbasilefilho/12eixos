import { describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { referenceEntries, AXIS_KEYS } from '../src/data/references';
import { selectedReferenceEntries, fullReferenceCatalog, archivedReferenceEntries } from '../src/data/reference-selected-catalog';
import { parentIdeologies20261009Definitions as definitions, parentIdeologies20261009ExpectedPosts as posts, reconcileParentIdeologies20261009 as reconcile } from '../src/data/reference-parent-ideologies-20261009';
import { documentedEvidenceAxes, partitionMatchReferences } from '../src/lib/matching';
const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
describe('seven exact reviewed ideology reconciliations', () => {
  test('keeps raw archive intact and selected/full lookups on the reviewed posts', () => {
    expect(hash(referenceEntries)).toBe('1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a');
    for (const [index, definition] of definitions.entries()) {
      const post = selectedReferenceEntries.find(entry => entry.id === definition.before.id)!;
      expect(post).toEqual(posts[index]);
      expect(fullReferenceCatalog.find(entry => entry.id === post.id)).toBe(post);
      expect(post.sources.slice(0, definition.before.sources.length)).toEqual(definition.before.sources);
      expect(post.name).toBe(definition.before.name);
      expect(post.period).toBe(definition.before.period);
      expect(post.rationale).toBe(definition.before.rationale);
      for (const key of AXIS_KEYS) if (!definition.codings.some(coding => coding.axis === key)) {
        expect(post.vec[key]).toBe(definition.before.vec[key]);
        expect(post.coding?.[key]).toEqual(definition.before.coding?.[key]);
        expect(post.evidence[key]).toEqual(definition.before.evidence[key]);
        expect(post.axisEvidence?.[key]).toEqual(definition.before.axisEvidence?.[key]);
      }
    }
    expect(archivedReferenceEntries).toHaveLength(193);
  });
  test('preserves later changes instead of overwriting same-score metadata or source reviews', () => {
    for (const [index, definition] of definitions.entries()) {
      const baseline = structuredClone(definition.before), saved = hash(baseline);
      const result = reconcile(baseline);
      expect(hash(baseline)).toBe(saved);
      expect(result.sources.slice(0, baseline.sources.length).every((source, i) => source === baseline.sources[i])).toBe(true);
      expect(reconcile(result)).toBe(result);
      expect(reconcile(posts[index])).toBe(posts[index]);
      expect(() => reconcile({ ...baseline, rationale: baseline.rationale + ' revisão posterior' })).toThrow('baseline diverged');
      expect(() => reconcile({ ...baseline, sources: baseline.sources.map((source, i) => i ? source : { ...source, note: source.note + ' revisão posterior' }) })).toThrow('baseline diverged');
      expect(() => reconcile({ ...posts[index], caveats: posts[index].caveats + ' revisão posterior' })).toThrow('baseline diverged');
    }
    const untouched = selectedReferenceEntries.find(entry => !definitions.some(definition => definition.before.id === entry.id))!;
    expect(reconcile(untouched)).toBe(untouched);
  });
  test('holds unknown axes and unchanged six-axis gate; only Hobhouse gains eligibility', () => {
    const partition = partitionMatchReferences(selectedReferenceEntries);
    expect(partition.ranked).toHaveLength(92);
    expect(partition.insufficientEvidence).toHaveLength(583);
    expect(selectedReferenceEntries.reduce((total, entry) => total + Math.max(0, 6 - documentedEvidenceAxes(entry).length), 0)).toBe(2922);
    expect(documentedEvidenceAxes(posts.find(entry => entry.id === 'ideology-egalitarian-liberalism')!)).not.toContain('eco');
    expect(documentedEvidenceAxes(posts.find(entry => entry.id === 'ideology-social-liberalism')!)).toHaveLength(8);
  });
});
