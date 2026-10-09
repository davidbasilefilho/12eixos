/** Run with `bun scripts/catalog-audit.ts`; checks catalog structure, not source truth. */
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { AXIS_KEYS, referenceEntries, type ReferenceCategory } from '../src/data/references';
import { mappedEvidenceAxes, documentedEvidenceAxes, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } from '../src/lib/matching';

const targets: Record<ReferenceCategory, number> = {
  country: 150, 'historical-country': 150, 'public-figure': 150,
  'historical-figure': 150, ideology: 75,
};
const normalize = (value: string) => value.normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR')
  .replace(/[^a-z0-9]+/g, ' ').trim();
const problems: { id: string; issue: string }[] = [];
const ids = new Set<string>();
const identityOwners = new Map<string, string>();
const inventory = referenceEntries.map(entry => {
  if (ids.has(entry.id)) problems.push({ id: entry.id, issue: 'duplicate-id' });
  ids.add(entry.id);
  for (const name of [entry.name, ...(entry.aliases ?? [])]) {
    // Historical countries identify regimes/periods, unlike a living state's identity.
    const key = `${entry.kind}:${normalize(name)}${entry.category === 'historical-country' ? `:${normalize(entry.period)}` : ''}`;
    const prior = identityOwners.get(key);
    if (prior && prior !== entry.id) problems.push({ id: entry.id, issue: `identity-collision:${prior}:${key}` });
    identityOwners.set(key, entry.id);
  }
  const compatibleCategory = entry.kind === 'ideology' ? entry.category === 'ideology'
    : entry.kind === 'person' ? ['public-figure', 'historical-figure'].includes(entry.category)
    : ['country', 'historical-country'].includes(entry.category);
  if (!compatibleCategory) problems.push({ id: entry.id, issue: 'kind-category-mismatch' });
  for (const field of ['name', 'period', 'rationale', 'caveats'] as const) {
    if (!entry[field].trim()) problems.push({ id: entry.id, issue: `missing-${field}` });
  }
  if (!entry.sources.length) problems.push({ id: entry.id, issue: 'missing-sources' });
  for (const item of entry.sources) {
    try {
      if (new URL(item.url).protocol !== 'https:') throw new Error('non-https');
    } catch { problems.push({ id: entry.id, issue: `invalid-source-url:${item.url}` }); }
    if (!item.title.trim() || !item.note.trim()) problems.push({ id: entry.id, issue: 'incomplete-source-metadata' });
  }
  const mappedAxes = mappedEvidenceAxes(entry);
  const documentedAxes = documentedEvidenceAxes(entry);
  const directionalAxes = AXIS_KEYS.filter(axis => entry.vec[axis] !== 50);
  for (const axis of AXIS_KEYS) {
    if (!Number.isFinite(entry.vec[axis]) || entry.vec[axis] < 0 || entry.vec[axis] > 100) {
      problems.push({ id: entry.id, issue: `invalid-vector:${axis}` });
    }
    if (entry.vec[axis] !== 50 && !mappedAxes.includes(axis)) {
      problems.push({ id: entry.id, issue: `unmapped-direction:${axis}` });
    }
  }
  return {
    id: entry.id, name: entry.name, aliases: entry.aliases ?? [], kind: entry.kind,
    category: entry.category, period: entry.period,
    structurallyEligible: mappedAxes.length >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH,
    documentaryEligible: documentedAxes.length >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH,
    reviewStatus: documentedAxes.length >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH
      ? 'located-coding-present-not-truth-certified' : 'insufficient-located-coding',
    unreviewedDirectionalAxes: directionalAxes.filter(axis => !documentedAxes.includes(axis)),
    mappedAxes, documentedAxes, directionalAxes, sourceCount: entry.sources.length,
    sourceUrls: entry.sources.map(source => source.url),
  };
});
const categories = Object.entries(targets).map(([category, target]) => {
  const entries = inventory.filter(entry => entry.category === category);
  const eligible = entries.filter(entry => entry.structurallyEligible).length;
  const documentaryEligible = entries.filter(entry => entry.documentaryEligible).length;
  return { category, target, records: entries.length, structurallyEligible: eligible, documentaryEligible,
    insufficientEvidence: entries.length - documentaryEligible,
    missingIdentitiesBeforeSemanticReview: Math.max(0, target - entries.length),
    preservedExcess: Math.max(0, entries.length - target),
    missingEligibleToTarget: Math.max(0, target - documentaryEligible) };
});
const audit = {
  schemaVersion: 2,
  baselineCommit: 'eae7f1f3a53af6a70ee5168ce20b576a49355e5c',
  baselineObserved: {
    totalRecords: 494, structurallyEligible: 59,
    integratedCatalogSha256: '49afa091aa6aa124d0c0eb955b86f029ac1ff1a3df3a375ee37e13a1354fee26',
    categories: [
      { category: 'country', records: 124, structurallyEligible: 0 },
      { category: 'historical-country', records: 79, structurallyEligible: 0 },
      { category: 'public-figure', records: 38, structurallyEligible: 18 },
      { category: 'historical-figure', records: 47, structurallyEligible: 16 },
      { category: 'ideology', records: 206, structurallyEligible: 25 },
    ],
    provenance: 'Executed before local data corrections in this recovery checkpoint; not recomputed from unavailable prior Library checkpoint.',
  },
  headCommitAtAudit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  integratedCatalogSha256: createHash('sha256').update(JSON.stringify(referenceEntries)).digest('hex'),
  scope: 'Integrated working-tree catalog after preparation; fixed remote baseline and current HEAD are provenance, not immutable copies of modified files.',
  evidenceGate: { minimumAxes: MIN_EVIDENCE_AXES_FOR_RANKED_MATCH,
    requirements: ['medium/high grade', 'located editorial-ordinal-v1 coding validated by codeReferenceAxis', 'nonempty claim statement, locator, document date/version and valid access/review dates', 'claim titles exactly match listed sources and axis mapping', 'coding axis/value/range/confidence and generated rationale agree with stored vector/evidence/mapping'],
    automaticScope: 'Metadata consistency only; no claim of source authenticity, entailment, complete construct coverage or implementation verification' },
  limitations: [
    'structurallyEligible reports legacy source-title/rationale plumbing only. documentaryEligible controls ranking and reports validated located-coding metadata, not independently verified source truth.',
    'Name/alias normalization detects literal collisions; semantic ideology distinctness and regime-period overlap require human source review.',
    'Current category indicates a contemporary snapshot, not that every policy or constitution remains current on execution date.',
    'Unreviewed directional axes are preserved archival estimates, excluded from ranking; absent located coding does not establish that their direction is false. Prior snapshots preserve available original estimates.',
  ],
  totalTarget: Object.values(targets).reduce((sum, count) => sum + count, 0),
  totalRecords: inventory.length,
  structurallyEligible: inventory.filter(entry => entry.structurallyEligible).length,
  documentaryEligible: inventory.filter(entry => entry.documentaryEligible).length,
  insufficientEvidence: inventory.filter(entry => !entry.documentaryEligible).length,
  unreviewedDirectionCount: inventory.reduce((sum, entry) => sum + entry.unreviewedDirectionalAxes.length, 0),
  summedCategoryIdentityGap: categories.reduce((sum, item) => sum + item.missingIdentitiesBeforeSemanticReview, 0),
  categories, structuralProblems: problems, inventory,
};
writeFileSync(new URL('../docs/catalog-audit.json', import.meta.url), `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify({
  baselineCommit: audit.baselineCommit, integratedCatalogSha256: audit.integratedCatalogSha256,
  totalTarget: audit.totalTarget, totalRecords: audit.totalRecords,
  structurallyEligible: audit.structurallyEligible, documentaryEligible: audit.documentaryEligible, insufficientEvidence: audit.insufficientEvidence,
  summedCategoryIdentityGap: audit.summedCategoryIdentityGap,
  categories, structuralProblemCount: problems.length,
  affectedProfileCount: new Set(problems.map(problem => problem.id)).size,
  artifact: 'docs/catalog-audit.json',
}, null, 2));
if (problems.length) process.exitCode = 1;
