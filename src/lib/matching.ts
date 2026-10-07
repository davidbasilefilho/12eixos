import { codeReferenceAxis, REFERENCE_CODING_VERSION, type AuditableAxisCoding } from './reference-coding';
import type { ReferenceSource } from '../data/references';
import { AXES, type AxisKey, type AxisScores } from './scoring';

export type MatchableReference = {
  id: string;
  name: string;
  kind: 'ideology' | 'person' | 'country';
  vec: Record<AxisKey, number>;
  /** Axes with cited medium/high evidence; missing axes are unknown, not neutral. */
  evidence: Partial<Record<AxisKey, 'high' | 'medium' | 'low'>>;
  axisEvidence?: Partial<Record<AxisKey, { sourceTitles: readonly string[]; rationale: string }>>;
  sources?: readonly { title: string }[];
  coding?: Partial<Record<AxisKey, AuditableAxisCoding>>;
};

export type AxisDifference = { key: AxisKey; distance: number; user: number; reference: number };
export type ReferenceMatch<T extends MatchableReference = MatchableReference> = {
  reference: T;
  similarity: number;
  distance: number;
  closestAxes: AxisDifference[];
  divergentAxes: AxisDifference[];
  differences: AxisDifference[];
  /** Similarity is conditional on these source-mapped axes. */
  coverage: { axes: AxisKey[]; count: number; total: number };
};

const COMPONENT_WEIGHTS = { dimensions: 0.42, direction: 0.33, magnitude: 0.18, outlier: 0.07 } as const;
const round1 = (value: number) => Math.round(value * 10) / 10;

/** Editorial display threshold; this does not alter the published similarity formula. */
export const MIN_EVIDENCE_AXES_FOR_RANKED_MATCH = 6;

/** Legacy citation plumbing only; does not establish located documentary support. */
export function mappedEvidenceAxes(reference: MatchableReference): AxisKey[] {
  const sourceTitles = new Set(reference.sources?.flatMap(source =>
    typeof source.title === 'string' && source.title.trim() ? [source.title] : []) ?? []);
  return AXES.flatMap(({ key }) => {
    const strength = reference.evidence[key];
    const mapping = reference.axisEvidence?.[key];
    const titles = Array.isArray(mapping?.sourceTitles) ? mapping.sourceTitles : [];
    const hasCitation = titles.length > 0 && titles.every(title =>
      typeof title === 'string' && !!title.trim() && sourceTitles.has(title));
    const hasRationale = typeof mapping?.rationale === 'string' && !!mapping.rationale.trim();
    return (strength === 'high' || strength === 'medium')
      && hasRationale
      && hasCitation
      ? [key]
      : [];
  });
}

/** Located coding metadata is necessary, but does not certify source truth or entailment. */
export function documentedEvidenceAxes(reference: MatchableReference): AxisKey[] {
  return mappedEvidenceAxes(reference).filter(key => {
    const coding = reference.coding?.[key];
    if (!coding || coding.axis !== key || coding.version !== REFERENCE_CODING_VERSION) return false;
    try {
      // The encoder reads source titles only; matching does not invent URL metadata.
      const checked = codeReferenceAxis(coding, reference.sources as readonly ReferenceSource[]);
      const mapped = reference.axisEvidence![key]!;
      const claimTitles = new Set(checked.axisEvidence!.sourceTitles);
      return coding.value === checked.value && reference.vec[key] === checked.value
        && reference.evidence[key] === checked.evidence
        && Array.isArray(coding.range) && coding.range.length === 2
        && coding.range.every((value, index) => value === checked.coding.range[index])
        && mapped.sourceTitles.length === claimTitles.size
        && mapped.sourceTitles.every(title => claimTitles.has(title))
        && mapped.rationale === checked.axisEvidence!.rationale;
    } catch {
      return false;
    }
  });
}

export function countDocumentedEvidenceAxes(reference: MatchableReference): number {
  return documentedEvidenceAxes(reference).length;
}

export function hasEnoughEvidenceForRankedMatch(reference: MatchableReference): boolean {
  return countDocumentedEvidenceAxes(reference) >= MIN_EVIDENCE_AXES_FOR_RANKED_MATCH;
}

function validateReferenceVector(reference: MatchableReference): void {
  for (const axis of AXES) {
    const value = reference.vec[axis.key];
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new Error(`Vetor inválido: ${reference.id}/${axis.key}`);
    }
  }
}

/** Keep every profile available while excluding unknown-as-neutral vectors from rankings. */
export function partitionMatchReferences<T extends MatchableReference>(entries: readonly T[]) {
  return entries.reduce<{ ranked: T[]; insufficientEvidence: T[] }>((result, entry) => {
    validateReferenceVector(entry);
    (hasEnoughEvidenceForRankedMatch(entry) ? result.ranked : result.insufficientEvidence).push(entry);
    return result;
  }, { ranked: [], insufficientEvidence: [] });
}

function validateScores(scores: AxisScores): void {
  for (const axis of AXES) {
    if (!Number.isFinite(scores[axis.key]) || scores[axis.key] < 0 || scores[axis.key] > 100) {
      throw new Error(`Score fora do intervalo: ${axis.key}`);
    }
  }
}

function scoreSupportedAxes(scores: AxisScores, reference: MatchableReference, keys: readonly AxisKey[]) {
  const differences = keys.map(key => ({
    key,
    user: scores[key],
    reference: reference.vec[key],
    distance: Math.abs(scores[key] - reference.vec[key]),
  }));
  const count = differences.length;
  const dimensionScore = differences.reduce((total, difference) => {
    const { user, reference: target } = difference;
    const curve = Math.max(0, 1 - (difference.distance / 50) ** 2);
    const oppositeSides = (user - 50) * (target - 50) < 0;
    const penalty = oppositeSides
      ? 1 - 0.45 * Math.tanh(Math.abs(user - 50) / 25) * Math.tanh(Math.abs(target - 50) / 25)
      : 1;
    return total + curve * penalty;
  }, 0) / count * 100;

  const centeredUser = differences.map(({ user }) => user - 50);
  const centeredTarget = differences.map(({ reference: target }) => target - 50);
  const dot = centeredUser.reduce((total, value, index) => total + value * centeredTarget[index], 0);
  const userNormSquared = centeredUser.reduce((total, value) => total + value ** 2, 0);
  const targetNormSquared = centeredTarget.reduce((total, value) => total + value ** 2, 0);
  // Scale the original 12-axis prior with the observed subset so the formula
  // has the same prior strength per axis under conditional coverage.
  const directionPrior = count * 8 ** 2;
  const directionScore = 50 + 50 * (dot + directionPrior)
    / Math.sqrt((userNormSquared + directionPrior) * (targetNormSquared + directionPrior));

  const userIntensity = centeredUser.reduce((total, value) => total + Math.abs(value), 0) / count;
  const targetIntensity = centeredTarget.reduce((total, value) => total + Math.abs(value), 0) / count;
  const magnitudeScore = 100 - 2 * Math.abs(userIntensity - targetIntensity);
  const maxDifference = Math.max(...differences.map(difference => difference.distance));
  const outlierScore = 100 * Math.max(0, 1 - (maxDifference / 100) ** 2.5);

  const similarity = round1(Math.min(100, Math.max(0, COMPONENT_WEIGHTS.dimensions * dimensionScore
    + COMPONENT_WEIGHTS.direction * directionScore
    + COMPONENT_WEIGHTS.magnitude * magnitudeScore
    + COMPONENT_WEIGHTS.outlier * outlierScore)));
  const sorted = [...differences].sort((a, b) => a.distance - b.distance || a.key.localeCompare(b.key));
  return {
    similarity,
    closestAxes: sorted.slice(0, 3),
    divergentAxes: sorted.slice(-3).reverse(),
    differences,
  };
}

/**
 * Preserves the original four-part, all-twelve-axis similarity score for
 * callers that explicitly need the legacy metric. Ranked reference matches
 * use documentedEvidenceAxes and are conditional on their cited coverage.
 */
export function calculateSimilarity12full(scores: AxisScores, reference: MatchableReference): number {
  validateScores(scores);
  validateReferenceVector(reference);
  return scoreSupportedAxes(scores, reference, AXES.map(axis => axis.key)).similarity;
}

/** Rank references only on axes with consistent, located editorial coding and medium/high support. */
export function matchReferences<T extends MatchableReference>(scores: AxisScores, entries: readonly T[]): ReferenceMatch<T>[] {
  validateScores(scores);
  return partitionMatchReferences(entries).ranked.map(reference => {
    const axes = documentedEvidenceAxes(reference);
    const scored = scoreSupportedAxes(scores, reference, axes);
    return {
      reference,
      similarity: scored.similarity,
      distance: round1(100 - scored.similarity),
      closestAxes: scored.closestAxes,
      divergentAxes: scored.divergentAxes,
      differences: scored.differences,
      coverage: { axes, count: axes.length, total: AXES.length },
    };
  }).sort((a, b) => b.similarity - a.similarity
    || b.coverage.count - a.coverage.count
    || (a.reference.id < b.reference.id ? -1 : a.reference.id > b.reference.id ? 1 : 0));
}
