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
  reviewedOn: '2026-10-09',
  baseCommit: '54f7feef62aa62632ee517721512fc23e69dd3d3',
  originalCatalog: {
    records: referenceEntries.length,
    sha256: hash(JSON.stringify(referenceEntries)),
    beforeApprovedResearchSha256: 'e094a0d207d138e683ae29c122ba1bda236ab2fde319e19a55782747408beca0',
    changedRawRecordIds: ['atiku-abubakar', 'ilhan-omar', 'fiji-current-2025'],
    unchanged: false,
    matchesExactApprovedPost: hash(JSON.stringify(referenceEntries)) === '1ba985e6ad16ffb2fa3922eebf5bd5c7ebc4eb57318f014d76f745210bc0b41a',
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
  newMeasuredScores: 0,
  newEditorialAxisCodings: 6,
  selectedOnlyReconciliation: { id: "ideology-program-anarcho-syndicalism-iwa-2022", newAxis: "pod", beforeAxes: 5, afterAxes: 6, fullLookupExceptionOnlyThisId: true, rawArchiveUnchanged: true },
  gateMinimumAxes: 6,
  categories: ['country', 'historical-country', 'public-figure', 'historical-figure', 'ideology'].map(category => {
    const selected = selectedReferenceEntries.filter(entry => entry.category === category);
    const eligible = selected.filter(entry => documentedEvidenceAxes(entry).length >= 6).length;
    return { category, selected: selected.length, documentaryEligible: eligible, pending: selected.length - eligible };
  }),
  limitations: [
    'Selection research is not source-truth certification or whole-axis coding.',
    'No new numeric vectors were inferred from research prospects; new profiles remain unknown on all axes.',
    'Inherited coding retains the exact prior period, numbers, grades, claims and source objects; the independently reviewed IWA2022 adds POD40medium only in the selected object and its full-catalog lookup.',
    'Only the three explicitly reviewed raw-record posts change; all815 other raw records and all193 archives remain intact. IWA changes only its selected object and full-catalog lookup; selection and eligibility remain separate.',
    'The researched selection75 had86eligible. The independently reviewed IWA2022,Atiku,Omar,Fiji additions raise current selected675 to90eligible and585pending; no selected identity or six-axis gate changes.',
  ],
};
writeFileSync('docs/selected-catalog-audit.json', `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify(audit, null, 2));
if (!audit.originalCatalog.matchesExactApprovedPost || audit.selectedRecords !== 675 || audit.researchInputSha256 !== 'ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883') process.exitCode = 1;
