import type { AxisKey, ReferenceEntry, ReferenceSource } from '../data/references';
import { questions } from '../data/questions';
import { AXES } from './scoring';

/** Versioned editorial encoding; these are not observed entity percentages. */
export const REFERENCE_CODING_VERSION = 'editorial-ordinal-v1' as const;
export const EDITORIAL_ANCHORS = {
  'strong-second': { value: 20, range: [10, 25] },
  'moderate-second': { value: 40, range: [30, 45] },
  mixed: { value: 50, range: [45, 55] },
  'moderate-first': { value: 60, range: [55, 70] },
  'strong-first': { value: 80, range: [75, 90] },
} as const;
export type EditorialPosition = keyof typeof EDITORIAL_ANCHORS;
export interface ReferenceCodingClaim {
  sourceTitle: string;
  locator: string;
  /** A bounded paraphrase of what the cited passage actually establishes. */
  statement: string;
  basis: 'norm' | 'practice' | 'declaration';
  /** Document date/version or explicit statement that publication is undated. */
  publishedDate: string;
  accessedDate: string;
}
export interface ReferenceAxisCoding {
  axis: AxisKey;
  position: EditorialPosition;
  /** Strength of support for the inference, independent of position strength. */
  confidence: 'medium' | 'high';
  claims: ReferenceCodingClaim[];
  rationale: string;
  /** Construct crosswalk only: these do not become imputed questionnaire answers. */
  relatedQuestionIds?: string[];
  /** Construct coverage, conflicting evidence, scope and temporal limitations. */
  uncertainty: string;
  reviewedOn: string;
}
export type AuditableAxisCoding = ReferenceAxisCoding & {
  version: typeof REFERENCE_CODING_VERSION;
  value: number;
  /** Editorial range, never a statistical confidence interval. */
  range: readonly [number, number];
};
export interface CodedReferenceAxis {
  value: number;
  evidence: 'medium' | 'high';
  axisEvidence: NonNullable<ReferenceEntry['axisEvidence']>[AxisKey];
  coding: AuditableAxisCoding;
}

/** Validates citation plumbing; documentary truth still needs human/editorial review.
 * Unknown axes are deliberately absent from this API and remain 50 without evidence.
 * This helper neither changes matching eligibility nor rewrites legacy vectors.
 */
export function codeReferenceAxis(input: ReferenceAxisCoding, sources: readonly ReferenceSource[]): CodedReferenceAxis {
  if (!input || typeof input !== 'object') throw new Error('Invalid reference coding input');
  const axis = AXES.find(axis => axis.key === input.axis);
  if (!axis) throw new Error(`Invalid reference coding axis: ${String(input.axis)}`);
  if (!Object.hasOwn(EDITORIAL_ANCHORS, input.position)) throw new Error(`Invalid reference coding position: ${String(input.position)}`);
  if (input.confidence !== 'medium' && input.confidence !== 'high') throw new Error(`Invalid reference coding confidence: ${String(input.confidence)}`);
  if (input.relatedQuestionIds !== undefined) {
    if (!Array.isArray(input.relatedQuestionIds)) throw new Error('Invalid reference coding relatedQuestionIds');
    for (const id of input.relatedQuestionIds) {
      const question = questions.find(question => question.id === id);
      if (!question || question.axisId !== axis.id) throw new Error(`Invalid reference coding question for ${input.axis}: ${String(id)}`);
    }
  }
  const requireText = (value: string, field: string) => {
    if (typeof value !== 'string' || !value.trim()) throw new Error(`Empty reference coding field: ${field}`);
  };
  const requireDate = (value: string, field: string) => {
    const parsed = Date.parse(value);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(parsed)
      || new Date(parsed).toISOString().slice(0, 10) !== value) {
      throw new Error(`Invalid reference coding date: ${field}`);
    }
  };
  requireText(input.rationale, 'rationale');
  requireText(input.uncertainty, 'uncertainty');
  requireDate(input.reviewedOn, 'reviewedOn');
  if (!Array.isArray(input.claims) || !input.claims.length) throw new Error('Reference coding needs a located documentary claim');
  for (const claim of input.claims) {
    if (!claim || typeof claim !== 'object') throw new Error('Invalid reference coding claim');
    if (!['norm', 'practice', 'declaration'].includes(claim.basis)) throw new Error(`Invalid reference coding basis: ${String(claim.basis)}`);
    for (const field of ['sourceTitle', 'locator', 'statement', 'publishedDate'] as const) requireText(claim[field], field);
    requireDate(claim.accessedDate, 'accessedDate');
    if (!sources.some(source => source.title === claim.sourceTitle)) {
      throw new Error(`Unlisted reference coding source: ${claim.sourceTitle}`);
    }
  }
  const anchor = EDITORIAL_ANCHORS[input.position];
  const sourceTitles = [...new Set(input.claims.map(claim => claim.sourceTitle))];
  return {
    value: anchor.value,
    evidence: input.confidence,
    axisEvidence: {
      sourceTitles,
      rationale: `${input.rationale} Codificação editorial ${input.position}: âncora ${anchor.value}, faixa ${anchor.range[0]}–${anchor.range[1]}; a fonte não mede esse número. Limites: ${input.uncertainty}`,
    },
    coding: { ...input, version: REFERENCE_CODING_VERSION, value: anchor.value, range: anchor.range },
  };
}
