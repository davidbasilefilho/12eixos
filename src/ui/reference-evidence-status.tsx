import { countDocumentedEvidenceAxes, type MatchableReference } from '../lib/matching'

/** Describes located coding, without turning a preserved bibliography into axis evidence. */
export function ReferenceEvidenceStatus({ reference }: { reference: MatchableReference }) {
  const count = countDocumentedEvidenceAxes(reference)
  return <p className="evidence-note">{count === 0
    ? 'Texto e fontes preservados; a orientação por eixo ainda não tem codificação documental validada.'
    : `Perfil parcial: ${count} ${count === 1 ? 'eixo' : 'eixos'} com codificação documental localizada; sem índice ordenado.`}</p>
}
