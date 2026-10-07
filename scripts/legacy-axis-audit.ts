/** Immutable baseline audit: `bun scripts/legacy-axis-audit.ts`. No catalog mutations. */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ReferenceEntry, AxisKey } from '../src/data/references';

const baselineCommit = '9db08071e7145b768c6a28005999c39c507860c5';
const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const extractionRoot = mkdtempSync(join(tmpdir(), '12eixos-legacy-axis-'));
try {
  const archive = execFileSync('git', ['archive', baselineCommit], { cwd: repoRoot, maxBuffer: 128 * 1024 * 1024 });
  execFileSync('tar', ['-xf', '-', '-C', extractionRoot], { input: archive });
  const { referenceEntries, referenceExpansionEntries, AXIS_KEYS } = await import(pathToFileURL(join(extractionRoot, 'src/data/references.ts')).href) as {
    referenceEntries: ReferenceEntry[]; referenceExpansionEntries: ReferenceEntry[]; AXIS_KEYS: readonly AxisKey[];
  };
  const { documentedEvidenceAxes, MIN_EVIDENCE_AXES_FOR_RANKED_MATCH } = await import(pathToFileURL(join(extractionRoot, 'src/lib/matching.ts')).href);
  const expansionIds = new Set(referenceExpansionEntries.map(entry => entry.id));
  const unsupportedAxes = referenceEntries.flatMap(entry => {
    const supported = new Set<AxisKey>(documentedEvidenceAxes(entry));
    return AXIS_KEYS.filter(axis => entry.vec[axis] !== 50 && !supported.has(axis)).map(axis => {
      const grade = entry.evidence[axis];
      const mapping = entry.axisEvidence?.[axis];
      const titles = mapping?.sourceTitles ?? [];
      const unmatchedTitles = titles.filter(title => !entry.sources.some(source => source.title === title));
      const failureCauses: string[] = [];
      if (!grade) failureCauses.push('absent-grade');
      else if (grade !== 'medium' && grade !== 'high') failureCauses.push('grade-below-threshold');
      if (!mapping) failureCauses.push('missing-mapping');
      else {
        if (!mapping.rationale.trim()) failureCauses.push('empty-axis-rationale');
        if (!titles.length) failureCauses.push('no-mapped-source-titles');
        if (unmatchedTitles.length) failureCauses.push('source-title-not-in-entry');
      }
      return {
        id: entry.id, name: entry.name, category: entry.category, period: entry.period,
        origin: expansionIds.has(entry.id) ? 'expansion' : 'legacy-base-with-corrections',
        axis, value: entry.vec[axis], evidenceGrade: grade ?? null,
        axisSourceMapping: mapping ?? null, unmatchedSourceTitles: unmatchedTitles,
        failureCauses,
        sourceValidationStatus: 'not-reviewed',
        substantiveSupportVerdict: 'undetermined',
        genericClaimStatus: mapping?.rationale ? 'not-semantically-reviewed' : 'no-axis-claim-to-review',
        entryRationale: entry.rationale, entryCaveats: entry.caveats,
        availableSources: entry.sources,
        nextAction: !mapping
          ? 'Read bounded sources and write an axis-specific claim with locator; retain unknown status if no support.'
          : 'Resolve structural failure and review actual source entailment before changing evidence or value.',
      };
    });
  });
  const affectedIds = new Set(unsupportedAxes.map(item => item.id));
  const genericClaimSignals = referenceEntries.flatMap(entry => AXIS_KEYS.flatMap(axis => {
    const rationale = entry.axisEvidence?.[axis]?.rationale;
    if (!rationale) return [];
    const patterns = [
      { name: 'people-axis-label-template', pattern: /A direção editorial deste eixo é/ },
      { name: 'ideology-common-note-template', pattern: /A codificação de .+ é uma estimativa editorial deste recorte/ },
    ].filter(signal => signal.pattern.test(rationale)).map(signal => signal.name);
    return patterns.length ? [{ id: entry.id, axis, value: entry.vec[axis],
      structurallyQualifies: documentedEvidenceAxes(entry).includes(axis),
      signals: patterns, claim: rationale, status: 'template-signal-unreviewed',
      substantiveSupportVerdict: 'undetermined' }] : [];
  }));
  const failureCauseCounts = Object.fromEntries([...new Set(unsupportedAxes.flatMap(item => item.failureCauses))]
    .sort().map(cause => [cause, unsupportedAxes.filter(item => item.failureCauses.includes(cause)).length]));
  const affectedProfiles = referenceEntries.filter(entry => affectedIds.has(entry.id)).map(entry => {
    const items = unsupportedAxes.filter(item => item.id === entry.id);
    const supported = documentedEvidenceAxes(entry) as AxisKey[];
    return {
      id: entry.id, name: entry.name, category: entry.category, period: entry.period,
      structurallyEligible: supported.length >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH,
      documentedAxes: supported, unsupportedAxisCount: items.length,
      unsupportedAxes: items.map(item => item.axis),
      sourceValidationStatus: 'not-reviewed', substantiveSupportVerdict: 'undetermined',
    };
  });
  const sourceValidationLedger = referenceEntries.map(entry => ({
    id: entry.id, category: entry.category,
    structurallyEligible: documentedEvidenceAxes(entry).length >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH,
    sourceValidationStatus: 'not-reviewed',
    axes: Object.fromEntries(AXIS_KEYS.map(axis => [axis, {
      value: entry.vec[axis], evidenceGrade: entry.evidence[axis] ?? null,
      structuralMappingQualifies: documentedEvidenceAxes(entry).includes(axis),
      sourceValidationStatus: 'not-reviewed', substantiveSupportVerdict: 'undetermined',
      numericalCalibrationStatus: 'not-reviewed',
      genericClaimStatus: genericClaimSignals.some(signal => signal.id === entry.id && signal.axis === axis)
        ? 'template-signal-unreviewed' : 'not-semantically-reviewed',
    }])),
  }));
  const artifact = {
    schemaVersion: 1, baselineCommit,
    scope: 'Immutable integrated catalog at baseline, after preparation and legacy corrections; current working-tree changes are excluded.',
    integratedCatalogSha256: createHash('sha256').update(JSON.stringify(referenceEntries)).digest('hex'),
    totalRecords: referenceEntries.length,
    structurallyEligible: sourceValidationLedger.filter(item => item.structurallyEligible).length,
    externallyValidatedProfileCount: null,
    externallyValidatedProfileCountMeaning: 'Not established; never inferred from the structural gate.',
    unsupportedAxisCount: unsupportedAxes.length, affectedProfileCount: affectedProfiles.length,
    failureCauseCounts,
    reviewStatusPolicy: {
      default: 'not-reviewed',
      structuralFailure: 'Field-level gate failure; does not establish that the documentary claim is false.',
      genericClaim: 'Requires claim-level review; missing mapping is not classified as a generic claim.',
      substantiveUnsupported: 'Only assign after actually inspecting the cited source for the specific axis, period and construct, with recorded locators and reason.',
      priorBoundedReviews: 'docs/source-repair.md records selected earlier source reviews; it does not establish complete per-axis validation and is not promoted automatically into this new ledger.',
    },
    exactBaselineExpectation: { unsupportedAxes: 209, affectedProfiles: 35 },
    genericClaimSignalCount: genericClaimSignals.length,
    genericClaimSignals, affectedProfiles, unsupportedAxes, sourceValidationLedger,
  };
  writeFileSync(new URL('../docs/legacy-axis-audit.json', import.meta.url), `${JSON.stringify(artifact, null, 2)}\n`);
  console.log(JSON.stringify({ baselineCommit, totalRecords: artifact.totalRecords,
    structurallyEligible: artifact.structurallyEligible, unsupportedAxisCount: unsupportedAxes.length,
    affectedProfileCount: affectedProfiles.length, failureCauseCounts,
    artifact: 'docs/legacy-axis-audit.json' }, null, 2));
  if (unsupportedAxes.length !== 209 || affectedProfiles.length !== 35 || unsupportedAxes.some(item => item.origin !== 'legacy-base-with-corrections')) {
    throw new Error('Immutable baseline differs from expected 209 unsupported legacy axes / 35 profiles; inspect before claiming reconciliation.');
  }
} finally {
  rmSync(extractionRoot, { recursive: true, force: true });
}
