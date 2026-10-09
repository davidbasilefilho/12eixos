import { AXES, type AxisScores } from '../lib/scoring'

/** Canonical visualization headings can name either pole; URL scores always
 * remain contributions to the first pole. This conversion is display-only. */
export const displayAxisNames = ['Unitário', 'Democracia', 'Liberdade', 'Multicultura', 'Pacifista', 'Não intervencionista', 'Público', 'Planejamento', 'Globalismo', 'Irreligioso', 'Progressista', 'Tecnologia'] as const
export function displayAxisScore(scores: AxisScores, index: number): number {
  const axis = AXES[index]
  if (!axis) throw new Error('Eixo visual inválido')
  const score = scores[axis.key]
  return displayAxisNames[index] === axis.right ? 100 - score : score
}
