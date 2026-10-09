/** Run with bun scripts/selected-catalog-audit.ts; metadata integrity, not source-truth certification. */
import { writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { referenceEntries } from '../src/data/references';
import { ideology75Profiles } from '../src/data/reference-ideology75-profiles';
import { intendedIdeologySelection } from '../src/data/reference-ideology-selection';
import { selectedReferenceEntries, selectedReferenceCoverage, archivedReferenceEntries, fullReferenceCatalog } from '../src/data/reference-selected-catalog';
import { documentedEvidenceAxes, partitionMatchReferences } from '../src/lib/matching';

const oldSelection = new Set<string>(intendedIdeologySelection.map(entry => entry.id));
const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const audit = {
  reviewedOn: '2026-10-08',
  baseCommit: 'df4d4317c04a4977c35e3e23d308e4b440c0505e',
  originalCatalog: {
    records: referenceEntries.length,
    sha256: hash(JSON.stringify(referenceEntries)),
    unchanged: hash(JSON.stringify(referenceEntries)) === 'f989c8d317a758f6d65af689c2bca07d560d65be000b15f0dc794ecda9d1420e',
    rawDocumentaryEligible: partitionMatchReferences(referenceEntries).ranked.length,
    priorSelectedEligible: partitionMatchReferences(referenceEntries.filter(entry => entry.category !== 'ideology' || oldSelection.has(entry.id))).ranked.length,
  },
  researchInputSha256: hash(readFileSync('docs/research/ideology75/selected-75.json')),
  selectedCatalogSha256: hash(JSON.stringify(selectedReferenceEntries)),
  fullArchiveRecords: fullReferenceCatalog.length,
  selectedRecords: selectedReferenceEntries.length,
  reusedIdeologyReferents: ideology75Profiles.filter(entry => entry.existing).length,
  newResearchOnlyReferents: ideology75Profiles.filter(entry => !entry.existing).length,
  archivedOutsideSelection: archivedReferenceEntries.length,
  documentaryEligible: selectedReferenceCoverage.ranked.length,
  insufficientEvidence: selectedReferenceCoverage.insufficientEvidence.length,
  newScores: 0,
  gateMinimumAxes: 6,
  categories: ['country', 'historical-country', 'public-figure', 'historical-figure', 'ideology'].map(category => {
    const selected = selectedReferenceEntries.filter(entry => entry.category === category);
    const eligible = selected.filter(entry => documentedEvidenceAxes(entry).length >= 6).length;
    return { category, selected: selected.length, documentaryEligible: eligible, pending: selected.length - eligible };
  }),
  limitations: [
    'Selection research is not source-truth certification or whole-axis coding.',
    'No new numeric vectors were inferred from research prospects; new profiles remain unknown on all axes.',
    'Same-referent inherited coding retains the exact prior period, numbers, grades, claims and source objects.',
    'All 818 former records remain intact; selection and eligibility are separate counts.',
    'The prior selected675 had 91 eligible; the prior unfiltered product catalog had 93. The current selected675 has 86 because its ideology membership changed.',
  ],
};
writeFileSync('docs/selected-catalog-audit.json', `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify(audit, null, 2));
if (!audit.originalCatalog.unchanged || audit.selectedRecords !== 675 || audit.researchInputSha256 !== 'ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883') process.exitCode = 1;
