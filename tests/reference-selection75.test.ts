import { describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { AXIS_KEYS, referenceEntries } from '../src/data/references';
import { ideology75Profiles } from '../src/data/reference-ideology75-profiles';
import {
  selectedReferenceEntries, selectedIdeologyEntries, archivedReferenceEntries,
  fullReferenceCatalog, matchSelectedReferences, partitionSelectedReferences,
} from '../src/data/reference-selected-catalog';
import { documentedEvidenceAxes, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } from '../src/lib/matching';
import type { AxisScores } from '../src/lib/scoring';
import { referenceById, referenceCounts } from '../src/ui/view-model';

const priorById = new Map(referenceEntries.map(entry => [entry.id, entry]));
const selectedIds = new Set(selectedReferenceEntries.map(entry => entry.id));

describe('researched 75-ideology selection and preserved archive', () => {
  test('retains the exact reviewed 818-record checkpoint, including all native14 evidence', () => {
    expect(referenceEntries).toHaveLength(818);
    expect(createHash('sha256').update(JSON.stringify(referenceEntries)).digest('hex'))
      .toBe('f989c8d317a758f6d65af689c2bca07d560d65be000b15f0dc794ecda9d1420e');
    expect(fullReferenceCatalog).toHaveLength(868);
    for (const entry of referenceEntries) expect(fullReferenceCatalog.find(item => item.id === entry.id)).toBe(entry);
    expect(new Set(fullReferenceCatalog.map(entry => entry.id)).size).toBe(fullReferenceCatalog.length);
  });

  test('selects exactly 150/150/150/150/75 independently of eligibility', () => {
    expect(selectedReferenceEntries).toHaveLength(675);
    expect(selectedIds.size).toBe(675);
    for (const category of ['country', 'historical-country', 'public-figure', 'historical-figure']) {
      const original = referenceEntries.filter(entry => entry.category === category);
      expect(selectedReferenceEntries.filter(entry => entry.category === category)).toEqual(original);
      expect(original).toHaveLength(150);
    }
    expect(selectedIdeologyEntries).toHaveLength(75);
    expect(archivedReferenceEntries).toHaveLength(193);
    for (const entry of archivedReferenceEntries) {
      expect(selectedIds.has(entry.id)).toBe(false);
      expect(entry).toBe(priorById.get(entry.id)!);
    }
  });

  test('keeps the shared view model consistent without losing legacy identity lookups', () => {
    expect(referenceCounts).toEqual({ country: 150, 'historical-country': 150, 'public-figure': 150, 'historical-figure': 150, ideology: 75 });
    expect(referenceById.size).toBe(868);
    for (const original of referenceEntries) expect(referenceById.get(original.id)).toBe(original);
    expect(referenceById.get('ideology-democratic-transhumanism-hughes')?.name).toContain('Hughes');
    expect(referenceById.get('ideology-classical-liberalism')?.name).toContain('Locke');
  });

  test('keeps documentary coding only for the 25 explicitly reconciled same referents', () => {
    expect(ideology75Profiles.filter(profile => profile.existing)).toHaveLength(25);
    for (const selected of selectedIdeologyEntries) {
      const prior = priorById.get(selected.id);
      if (prior) {
        expect(selected.period).toBe(prior.period);
        expect(selected.vec).toEqual(prior.vec);
        expect(selected.evidence).toEqual(prior.evidence);
        expect(selected.axisEvidence).toEqual(prior.axisEvidence ?? {});
        expect(selected.coding).toEqual(prior.coding ?? {});
        expect(documentedEvidenceAxes(selected)).toEqual(documentedEvidenceAxes(prior));
        for (const source of prior.sources) expect(selected.sources).toContainEqual(source);
      } else {
        expect(Object.keys(selected.vec).sort()).toEqual([...AXIS_KEYS].sort());
        expect(Object.values(selected.vec).every(value => value === 50)).toBe(true);
        expect(selected.evidence).toEqual({});
        expect(selected.axisEvidence).toEqual({});
        expect(selected.coding).toEqual({});
        expect(documentedEvidenceAxes(selected)).toEqual([]);
      }
    }
  });

  test('never transfers scores across superficially similar authors, texts or periods', () => {
    const resolution = new Map(ideology75Profiles.map(profile => [profile.researchId, profile.id]));
    expect(resolution.get('ideology-classical-liberalism')).toBe('ideology-program-constitutional-liberalism-constant-1819');
    expect(selectedIds.has('ideology-classical-liberalism')).toBe(false); // Locke remains archived.
    expect(resolution.get('ideology-anarcho-capitalism')).toBe('ideology-right-austrian-libertarianism');
    expect(selectedIds.has('ideology-right-anarcho-capitalism')).toBe(false); // Friedman remains archived.
    expect(selectedIds.has('ideology-democratic-transhumanism-hughes')).toBe(true);
    expect(selectedIds.has('civic-transhumanism')).toBe(false);
    expect(selectedIds.has('ideology-market-socialism-schweickart')).toBe(true);
    expect(selectedIds.has('ideology-market-socialism')).toBe(false); // Lange remains archived.
    expect(selectedIds.has('ideology-marxism-leninism-stalin-1926')).toBe(true);
    expect(selectedIds.has('ideology-marxism-leninism')).toBe(false); // 1924 remains archived.
  });

  test('retains exact research input and resolves every source and selected neighbor', () => {
    const bytes = readFileSync(new URL('../docs/research/ideology75/selected-75.json', import.meta.url));
    expect(createHash('sha256').update(bytes).digest('hex'))
      .toBe('ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883');
    const research = JSON.parse(bytes.toString());
    expect(research.entries).toHaveLength(75);
    expect(Object.keys(research.sourceRegistry)).toHaveLength(153);
    for (const profile of ideology75Profiles) {
      expect(profile.sources.length).toBeGreaterThan(0);
      expect(profile.neighbors.length).toBeGreaterThan(0);
      for (const neighbor of profile.neighbors) {
        expect(selectedIds.has(neighbor.id)).toBe(true);
        expect(neighbor.id).not.toBe(profile.id);
        expect(neighbor.difference.trim().length).toBeGreaterThan(0);
      }
      for (const source of profile.sources) {
        expect(new URL(source.url).protocol).toBe('https:');
        expect(source.title.trim().length).toBeGreaterThan(0);
        expect(source.note).toContain('Leitura efetiva declarada na pesquisa:');
      }
    }
  });

  test('keeps all 50 research-only additions outside ranking and reports actual coverage', () => {
    const { ranked, insufficientEvidence } = partitionSelectedReferences();
    expect(ranked).toHaveLength(86);
    expect(insufficientEvidence).toHaveLength(589);
    expect(ranked.filter(entry => entry.category === 'ideology')).toHaveLength(8);
    for (const entry of ranked) expect(documentedEvidenceAxes(entry).length).toBeGreaterThanOrEqual(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH);
    for (const profile of ideology75Profiles.filter(item => !item.existing)) {
      expect(insufficientEvidence.some(entry => entry.id === profile.id)).toBe(true);
      expect(ranked.some(entry => entry.id === profile.id)).toBe(false);
    }
  });

  test('excludes archived profiles from every tested score vector, even archived eligible profiles', () => {
    expect(archivedReferenceEntries.some(entry => documentedEvidenceAxes(entry).length >= 6)).toBe(true);
    const scores = [0, 25, 50, 75, 100].map(value => Object.fromEntries(AXIS_KEYS.map(key => [key, value])) as AxisScores);
    scores.push(...AXIS_KEYS.map(axis => Object.fromEntries(AXIS_KEYS.map(key => [key, key === axis ? 100 : 0])) as AxisScores));
    for (const vector of scores) {
      const matches = matchSelectedReferences(vector);
      expect(matches).toHaveLength(86);
      for (const match of matches) {
        expect(selectedIds.has(match.reference.id)).toBe(true);
        expect(archivedReferenceEntries.some(entry => entry.id === match.reference.id)).toBe(false);
      }
    }
    const app = readFileSync(new URL('../src/ui/App.tsx', import.meta.url), 'utf8');
    expect(app).not.toContain('matchReferences(scores,');
    expect(app).toContain('matchSelectedReferences(scores)');
    expect(app).toContain('<UnrankedReferences references={archivedReferenceEntries} archived/>');
  });
});
