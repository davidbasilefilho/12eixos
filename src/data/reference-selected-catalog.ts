import { reconcileCurrentCountryResearch02, currentCountryResearch02Definitions } from './reference-research-current-country02-20261009';
import { reconcileHistoricalThree20261009, historicalThree20261009Definitions } from './reference-research-historical-three-20261009';
import { reconcileFourthIdeologies20261009, fourthIdeologies20261009Definitions } from './reference-fourth-ideologies-20261009';
import { reconcileThirdIdeologies20261009, thirdIdeologies20261009Definitions } from './reference-third-ideologies-20261009';
import { reconcileParentIdeologies20261009, parentIdeologies20261009Definitions } from './reference-parent-ideologies-20261009';
import { reconcileResearchIwa20261009 } from './reference-research-iwa-20261009';
import { AXIS_KEYS, referenceEntries, type ReferenceEntry } from './references';
import { ideology75Profiles } from './reference-ideology75-profiles';
import { matchReferences, partitionMatchReferences } from '../lib/matching';
import type { AxisScores } from '../lib/scoring';

/** The historical source catalog is immutable. Selection never rewrites its records. */
const priorById = new Map(referenceEntries.map(entry => [entry.id, entry]));

export const selectedIdeologyEntries: ReferenceEntry[] = ideology75Profiles.map((profile): ReferenceEntry => {
  const prior = priorById.get(profile.id);
  if (profile.existing !== Boolean(prior)) throw new Error(`Ideology identity resolution changed: ${profile.id}`);
  const bibliography = [...(prior?.sources ?? [])];
  for (const source of profile.sources) {
    if (!bibliography.some(item => item.url === source.url && item.title === source.title && item.note === source.note)) {
      bibliography.push(source);
    }
  }
  return {
    ...prior,
    id: profile.id,
    kind: 'ideology',
    category: 'ideology',
    name: profile.name,
    // Reused coding retains its exact existing documentary period.
    period: prior?.period ?? profile.period,
    rationale: profile.rationale,
    caveats: [prior?.caveats, profile.caveats].filter(Boolean).join(' '),
    sources: bibliography,
    // No conversion from research prospects to scores, evidence grades or coding.
    vec: prior?.vec ?? Object.fromEntries(AXIS_KEYS.map(key => [key, 50])) as ReferenceEntry['vec'],
    evidence: prior?.evidence ?? {},
    axisEvidence: prior?.axisEvidence ?? {},
    coding: prior?.coding ?? {},
  };
}).map(reconcileResearchIwa20261009).map(reconcileParentIdeologies20261009).map(reconcileThirdIdeologies20261009).map(reconcileFourthIdeologies20261009);

const selectedIdeologyIds = new Set(selectedIdeologyEntries.map(entry => entry.id));
if (selectedIdeologyEntries.length !== 75 || selectedIdeologyIds.size !== 75) {
  throw new Error('The editorial ideology selection must contain 75 distinct identities.');
}

/** Exactly 150 entries per non-ideology category plus 75 selected doctrines/programmes. */
export const selectedReferenceEntries: ReferenceEntry[] = [
  ...referenceEntries.filter(entry => entry.category !== 'ideology'),
  ...selectedIdeologyEntries,
].map(reconcileHistoricalThree20261009).map(reconcileCurrentCountryResearch02);

/** All former profiles remain consultable, with their original IDs and evidence. */
export const archivedReferenceEntries = referenceEntries.filter(entry =>
  entry.category === 'ideology' && !selectedIdeologyIds.has(entry.id));
export const fullReferenceCatalog = [
  ...referenceEntries,
  ...selectedIdeologyEntries.filter(entry => !priorById.has(entry.id)),
].map(entry => entry.id === 'ideology-program-anarcho-syndicalism-iwa-2022' || [...parentIdeologies20261009Definitions, ...thirdIdeologies20261009Definitions, ...fourthIdeologies20261009Definitions, ...historicalThree20261009Definitions, ...currentCountryResearch02Definitions].some(definition => definition.before.id === entry.id)
  ? selectedReferenceEntries.find(selected => selected.id === entry.id)!
  : entry);

/** Shared product boundary: archived profiles cannot enter any ranked surface. */
export function matchSelectedReferences(scores: AxisScores) {
  return matchReferences(scores, selectedReferenceEntries);
}
export function partitionSelectedReferences() {
  return partitionMatchReferences(selectedReferenceEntries);
}
export const selectedReferenceCoverage = partitionSelectedReferences();
