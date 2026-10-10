import { seventhIdeologies20261010Definitions } from '../src/data/reference-seventh-ideologies-20261010';
import { sixthIdeologies20261010Definitions } from '../src/data/reference-sixth-ideologies-20261010';
import { fifthIdeologies20261010Definitions } from '../src/data/reference-fifth-ideologies-20261010';
import { currentCountryResearch02Definitions } from '../src/data/reference-research-current-country02-20261009';
import { historicalThree20261009Definitions } from '../src/data/reference-research-historical-three-20261009';
import { fourthIdeologies20261009Definitions } from '../src/data/reference-fourth-ideologies-20261009';
import { thirdIdeologies20261009Definitions } from '../src/data/reference-third-ideologies-20261009';
/** Run with bun scripts/selected-catalog-audit.ts; metadata integrity, not source-truth certification. */
import { writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parentIdeologies20261009Definitions } from '../src/data/reference-parent-ideologies-20261009';
import { referenceEntries } from '../src/data/references';
import { ideology75Profiles } from '../src/data/reference-ideology75-profiles';
import { intendedIdeologySelection } from '../src/data/reference-ideology-selection';
import { selectedReferenceEntries, selectedReferenceCoverage, archivedReferenceEntries, fullReferenceCatalog } from '../src/data/reference-selected-catalog';
import { documentedEvidenceAxes, partitionMatchReferences } from '../src/lib/matching';

const oldSelection = new Set<string>(intendedIdeologySelection.map(entry => entry.id));
const hash = (value: string | Buffer) => createHash('sha256').update(value).digest('hex');
const audit = {
  reviewedOn: '2026-10-10',
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
  newEditorialAxisCodings: 116,
  minimumMissingAxisSlots: selectedReferenceEntries.reduce((total, entry) => total + Math.max(0, 6 - documentedEvidenceAxes(entry).length), 0),
  seventhIdeologyCheckpoint: { newCodings: 13, ids: seventhIdeologies20261010Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: ['ideology-gandhian-swaraj'], sourceReview: 'docs/research/ideology-seventh-20261010.md' },
  sixthIdeologyCheckpoint: { newCodings: 9, ids: sixthIdeologies20261010Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: [], sourceReview: 'docs/research/ideology-sixth-20261010.md' },
  fifthIdeologyCheckpoint: { newCodings: 17, ids: fifthIdeologies20261010Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: ['ideology-ambedkarite-constitutional-socialism'], sourceReview: 'docs/research/ideology-fifth-20261010.md' },
  currentCountryResearch02: { newCodings: 10, ids: currentCountryResearch02Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: [], finlandEntireRecordNoop: true },
  historicalThreeCheckpoint: { newCodings: 6, ids: historicalThree20261009Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: [] },
  fourthIdeologyCheckpoint: { newCodings: 16, ids: fourthIdeologies20261009Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: ['ideology-distributism'] },
  thirdIdeologyCheckpoint: { newCodings: 12, ids: thirdIdeologies20261009Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: [] },
  parentIdeologyCheckpoint: { newCodings: 27, ids: parentIdeologies20261009Definitions.map(definition => definition.before.id), raw818Unchanged: true, newEligible: ['ideology-social-liberalism'] },
  selectedOnlyReconciliation: { id: "ideology-program-anarcho-syndicalism-iwa-2022", newAxis: "pod", beforeAxes: 5, afterAxes: 6, fullLookupExceptionOnlyThisId: false, otherApprovedSelectedLookupIds: [...parentIdeologies20261009Definitions, ...thirdIdeologies20261009Definitions, ...fourthIdeologies20261009Definitions, ...fifthIdeologies20261010Definitions, ...sixthIdeologies20261010Definitions, ...seventhIdeologies20261010Definitions, ...historicalThree20261009Definitions, ...currentCountryResearch02Definitions].map(definition => definition.before.id), rawArchiveUnchanged: true },
  gateMinimumAxes: 6,
  categories: ['country', 'historical-country', 'public-figure', 'historical-figure', 'ideology'].map(category => {
    const selected = selectedReferenceEntries.filter(entry => entry.category === category);
    const eligible = selected.filter(entry => documentedEvidenceAxes(entry).length >= 6).length;
    return { category, selected: selected.length, documentaryEligible: eligible, pending: selected.length - eligible };
  }),
  limitations: [
    'The 2026-10-10 seventh ideology checkpoint adds thirteen bounded declarations to Kropotkin, Tolstoy, Gandhi and Arusha. Gandhi alone gains eligibility. Current selection: 94 eligible, 581 partial, 2868 minimum missing slots; 40 ideologies still have no codes. Earlier dated counts remain historical checkpoints.',
    'The 2026-10-10 sixth ideology checkpoint adds nine bounded declarations to Combahee 1977, Malcolm X Cleveland 1964 and Newton Boston 1970. All remain partial. Its checkpoint: 93 eligible, 582 partial, 2881 minimum missing slots; 44 ideologies still have no codes. Earlier dated counts remain historical checkpoints.',
    'Selection research is not source-truth certification or whole-axis coding.',
    'The 2026-10-10 fifth ideology checkpoint adds 17 bounded documentary codes: Ambedkar 1947 gains eligibility; Ocalan 2011 and Bookchin 2002 remain at five. Its checkpoint: 93 eligible, 582 partial, 2890 minimum missing slots. Mao and Rothbard are unchanged. Counts in the following dated research checkpoints describe their earlier integration states.',
    'Current-country02 adds ten medium-confidence normative codes to Portugal/Poland only, not practice. Finland is entire-record NOOP. Its checkpoint had92eligible583pending2906minimum missing slots; unchanged six-axis gate.',
    'The historical-three checkpoint adds six bounded normative codes only in selected and same-ID full lookup posts; raw records remain exact. Its checkpoint had92eligible583pending,2916minimum missing slots, no eligibility gain.',
    'The fourth bounded checkpoint adds16approved documentary codes. Only Chesterton gains eligibility; that checkpoint675selected92eligible583pending and2922minimum missing slots. CatholicCON/JacobinIMI remain unknown, with full original records and sources retained.',
    'The third bounded checkpoint adds 12 approved documentary codes to Held, the responsive platform, Burke and Kristol. No new eligible profile: 91 eligible, 584 pending, 2938 minimum missing slots. All prior raw and selected posts remain intact.',
    'No numeric vectors are inferred from prospects. The exact seven reviewed ideology posts add27documentary ordinal codes; all unsupported axes remain unknown.',
    'Inherited raw coding remains exact. Seven additional selected ideology posts use approved source-specific inputs; IWA2022 retains its prior selected POD40medium. All old source objects and unmodified axis fields are preserved.',
    'Only the three explicitly reviewed raw-record posts change; all815 other raw records and all193 archives remain intact. IWA and the seven approved ideology posts change only selected objects and same-ID full-catalog lookups; selection and eligibility remain separate.',
    'The researched selection75 had86eligible. The independently reviewed IWA2022,Atiku,Omar,Fiji additions raised selected675 to90eligible and585pending. The27approved ideology codes add only Hobhouse eligibility, yielding91eligible/584pending and2950minimum missing slots; no selected identity or six-axis gate changes.',
  ],
};
writeFileSync('docs/selected-catalog-audit.json', `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify(audit, null, 2));
if (!audit.originalCatalog.matchesExactApprovedPost || audit.selectedRecords !== 675 || audit.researchInputSha256 !== 'ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883') process.exitCode = 1;
