import { expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { ReferenceEvidenceStatus } from '../src/ui/reference-evidence-status'
import { referenceEntries } from '../src/data/references'
import { documentedEvidenceAxes } from '../src/lib/matching'

test('preserved legacy bibliography and numerical vector are not labeled as coded evidence', () => {
  const entry = referenceEntries.find(entry => documentedEvidenceAxes(entry).length === 0 && entry.sources.length && Object.values(entry.vec).some(value => value !== 50))!
  expect(entry).toBeDefined()
  const html = renderToStaticMarkup(<ReferenceEvidenceStatus reference={entry}/>)
  expect(html).toContain('Texto e fontes preservados')
  expect(html).toContain('ainda não tem codificação documental validada')
  expect(html).not.toContain('%')
  expect(html).not.toContain('Perfil parcial')
})

test('one located axis remains visible as a partial profile without a ranked index', () => {
  const entry = referenceEntries.find(entry => entry.id === 'ideology-program-anarcho-primitivism-zerzan-1994-2016')!
  expect(documentedEvidenceAxes(entry)).toHaveLength(1)
  const html = renderToStaticMarkup(<ReferenceEvidenceStatus reference={entry}/>)
  expect(html).toContain('Perfil parcial: 1 eixo com codificação documental localizada')
  expect(html).toContain('sem índice ordenado')
  expect(html).not.toContain('%')
})
