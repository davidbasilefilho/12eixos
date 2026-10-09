import { describe, expect, test } from 'bun:test';
import { AXIS_KEYS, referenceEntries, referenceExpansionEntries, type ReferenceCategory } from '../src/data/references';
import { referenceCategories } from '../src/data/reference-categories';
import { legacyUnknownAxes } from '../src/data/reference-legacy-corrections';
import { partitionMatchReferences, documentedEvidenceAxes } from '../src/lib/matching';

const validCategories = new Set<ReferenceCategory>(referenceCategories.map(category => category.id));
const normalizeIdentity = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]+/g, ' ').trim();

describe('reference catalog integrity', () => {
  test('contains unique, sourced profiles in all five editorial categories', () => {
    const ids = referenceEntries.map(entry => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(referenceEntries.map(entry => entry.category))).toEqual(validCategories);

    for (const entry of referenceEntries) {
      expect(validCategories.has(entry.category)).toBe(true);
      expect(entry.name.trim().length).toBeGreaterThan(0);
      expect(entry.period.trim().length).toBeGreaterThan(0);
      expect(entry.rationale.trim().length).toBeGreaterThan(0);
      expect(entry.caveats.trim().length).toBeGreaterThan(0);
      expect(entry.sources.length).toBeGreaterThan(0);
      expect(entry.sources.every(source => source.url.startsWith('https://'))).toBe(true);

      if (entry.kind === 'ideology') expect(entry.category).toBe('ideology');
      if (entry.kind === 'person') expect(['public-figure', 'historical-figure']).toContain(entry.category);
      if (entry.kind === 'country') expect(['country', 'historical-country']).toContain(entry.category);

      expect(Object.keys(entry.vec).sort()).toEqual([...AXIS_KEYS].sort());
      for (const axis of AXIS_KEYS) {
        expect(Number.isFinite(entry.vec[axis])).toBe(true);
        expect(entry.vec[axis]).toBeGreaterThanOrEqual(0);
        expect(entry.vec[axis]).toBeLessThanOrEqual(100);
        expect([undefined, 'low', 'medium', 'high']).toContain(entry.evidence[axis]);
      }
    }
  });

  test('does not represent the same person or ideology more than once under aliases', () => {
    const identities = new Map<string, string>();
    for (const entry of referenceEntries.filter(({ kind }) => kind === 'person' || kind === 'ideology')) {
      const names = [entry.name, ...(entry.aliases ?? [])];
      expect(names.every(name => name.trim().length > 0)).toBe(true);
      for (const name of names) {
        const key = `${entry.kind}:${normalizeIdentity(name)}`;
        const previous = identities.get(key);
        expect(previous === undefined || previous === entry.id).toBe(true);
        identities.set(key, entry.id);
      }
    }
  });

  test('keeps profiles with insufficient evidence out of ranked matches', () => {
    const { ranked, insufficientEvidence } = partitionMatchReferences(referenceEntries);
    expect(ranked.length).toBeGreaterThan(0);
    expect(insufficientEvidence.some(entry => entry.id === 'alan-turing')).toBe(true);
    expect(ranked.some(entry => entry.id === 'alan-turing')).toBe(false);
  });

  test('centers only documented unknown axes in legacy profiles', () => {
    const byId = new Map(referenceEntries.map(entry => [entry.id, entry]));
    for (const [id, axes] of Object.entries(legacyUnknownAxes)) {
      const entry = byId.get(id);
      expect(entry).toBeDefined();
      for (const axis of axes) {
        const recovery = entry!.coding?.[axis];
        if (recovery) {
          expect(entry!.vec[axis]).toBe(recovery.value);
          expect(documentedEvidenceAxes(entry!)).toContain(axis);
        } else {
          expect(entry!.vec[axis]).toBe(50);
        }
      }
    }
  });

  test('maps each expansion vector away from 50 to a cited source and axis rationale', () => {
    for (const entry of referenceExpansionEntries) {
      for (const axis of AXIS_KEYS) {
        const value = entry.vec[axis];
        const strength = entry.evidence[axis];
        if (strength === undefined || strength === 'low') expect(value).toBe(50);
        if (value !== 50) {
          expect(['medium', 'high']).toContain(strength);
          const mapping = entry.axisEvidence?.[axis];
          expect(mapping).toBeDefined();
          expect(mapping!.rationale.trim().length).toBeGreaterThan(0);
          expect(mapping!.sourceTitles.length).toBeGreaterThan(0);
          for (const title of mapping!.sourceTitles) {
            expect(entry.sources.some(source => source.title === title)).toBe(true);
          }
        }
      }
    }
  });
});
