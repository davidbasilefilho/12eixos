import { historicalThree20261009Definitions, historicalThree20261009ExpectedPosts } from '../src/data/reference-research-historical-three-20261009';
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
import { parentIdeologies20261009ExpectedPosts } from '../src/data/reference-parent-ideologies-20261009';
import { thirdIdeologies20261009ExpectedPosts } from '../src/data/reference-third-ideologies-20261009';
import { fourthIdeologies20261009ExpectedPosts } from '../src/data/reference-fourth-ideologies-20261009';
import type { AxisScores } from '../src/lib/scoring';
import { referenceById, referenceCounts } from '../src/ui/view-model';

const priorById = new Map(referenceEntries.map(entry => [entry.id, entry]));
const selectedIds = new Set(selectedReferenceEntries.map(entry => entry.id));

describe('researched 75-ideology selection and preserved archive', () => {
  test('retains 818 raw records with the exact approved Atiku, Omar and Fiji research delta', () => {
    expect(referenceEntries).toHaveLength(818);
    expect(createHash('sha256').update(JSON.stringify(referenceEntries)).digest('hex'))
      .toBe('1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a');
    expect(fullReferenceCatalog).toHaveLength(868);
    for (const entry of referenceEntries) {
      const expected = (entry.id === 'ideology-program-anarcho-syndicalism-iwa-2022' || [...parentIdeologies20261009ExpectedPosts, ...thirdIdeologies20261009ExpectedPosts, ...fourthIdeologies20261009ExpectedPosts, ...historicalThree20261009ExpectedPosts].some(post => post.id === entry.id)) ? selectedReferenceEntries.find(item => item.id === entry.id) : entry;
      expect(fullReferenceCatalog.find(item => item.id === entry.id)).toBe(expected);
    }
    expect(new Set(fullReferenceCatalog.map(entry => entry.id)).size).toBe(fullReferenceCatalog.length);
  });

  test('selects exactly 150/150/150/150/75 independently of eligibility', () => {
    expect(selectedReferenceEntries).toHaveLength(675);
    expect(selectedIds.size).toBe(675);
    for (const category of ['country', 'historical-country', 'public-figure', 'historical-figure']) {
      const original = referenceEntries.filter(entry => entry.category === category);
      expect(selectedReferenceEntries.filter(entry => entry.category === category)).toEqual(original.map(entry => historicalThree20261009ExpectedPosts.find(post => post.id === entry.id) ?? entry));
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
    for (const original of referenceEntries) {
      const expected = (original.id === 'ideology-program-anarcho-syndicalism-iwa-2022' || [...parentIdeologies20261009ExpectedPosts, ...thirdIdeologies20261009ExpectedPosts, ...fourthIdeologies20261009ExpectedPosts, ...historicalThree20261009ExpectedPosts].some(post => post.id === original.id)) ? selectedReferenceEntries.find(item => item.id === original.id) : original;
      expect(referenceById.get(original.id)).toBe(expected);
    }
    expect(referenceById.get('ideology-democratic-transhumanism-hughes')?.name).toContain('Hughes');
    expect(referenceById.get('ideology-classical-liberalism')?.name).toContain('Locke');
  });

  test('keeps exact documentary deltas and preserves all other selected referents', () => {
    expect(ideology75Profiles.filter(profile => profile.existing)).toHaveLength(25);
    for (const selected of selectedIdeologyEntries) {
      const prior = priorById.get(selected.id);
      const approvedPost = [...parentIdeologies20261009ExpectedPosts, ...thirdIdeologies20261009ExpectedPosts, ...fourthIdeologies20261009ExpectedPosts, ...historicalThree20261009ExpectedPosts].find(post => post.id === selected.id);
      if (approvedPost) {
        expect(selected).toEqual(approvedPost);
        if (prior) for (const source of prior.sources) expect(selected.sources).toContainEqual(source);
        continue;
      }
      if (selected.id === 'ideology-program-anarcho-syndicalism-iwa-2022') {
        // Exact independently reviewed selected post; raw archive remains five axes.
        expect(createHash('sha256').update(JSON.stringify(selected)).digest('hex'))
          .toBe('e73d3368ade104fb2fde68cfef5163248e289dd1c69bfd39cec618434dc099e9');
        expect(documentedEvidenceAxes(prior!)).toHaveLength(5);
        expect(documentedEvidenceAxes(selected)).toHaveLength(6);
        for (const source of prior!.sources) expect(selected.sources).toContainEqual(source);
        continue;
      }
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

  test('admits only documented research additions through the unchanged six-axis gate', () => {
    const { ranked, insufficientEvidence } = partitionSelectedReferences();
    expect(ranked).toHaveLength(92);
    expect(insufficientEvidence).toHaveLength(583);
    expect(ranked.filter(entry => entry.category === 'ideology')).toHaveLength(11);
    for (const entry of ranked) expect(documentedEvidenceAxes(entry).length).toBeGreaterThanOrEqual(MIN_EVIDENCE_AXES_FOR_RANKED_MATCH);
    for (const profile of ideology75Profiles.filter(item => !item.existing)) {
      if (profile.id === 'ideology-social-liberalism') {
        expect(ranked.some(entry => entry.id === profile.id)).toBe(true);
        continue;
      }
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
      expect(matches).toHaveLength(92);
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
