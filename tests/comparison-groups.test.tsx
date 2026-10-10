import { expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { AXIS_KEYS, type ReferenceEntry } from '../src/data/references'
import { matchSelectedReferences, selectedReferenceEntries } from '../src/data/reference-selected-catalog'
import { referenceFlagPeriodNote } from '../src/data/flag-assets'
import type { AxisScores } from '../src/lib/scoring'
import { MiniMatches, ResultComparisonGroups, ShareCountryGroups, SharePeopleGroups } from '../src/ui/comparison-groups'

const scores = Object.fromEntries(AXIS_KEYS.map(key => [key, 0])) as AxisScores
const matches = matchSelectedReferences(scores)

test('keeps ideological, current and historical comparisons visible in the result overview', () => {
  const html = renderToStaticMarkup(<ResultComparisonGroups matches={matches}/>)
  for (const label of ['IDEOLOGIAS PRÓXIMAS', 'FIGURAS HISTÓRICAS', 'FIGURAS ATUAIS', 'PAÍSES', 'ATUAIS', 'HISTÓRICOS']) expect(html).toContain(label)
  for (const category of ['ideology', 'historical-figure', 'public-figure', 'country', 'historical-country']) {
    const expected = matches.filter(match => match.reference.category === category).slice(0, 3)
    for (const match of expected) expect(html).toContain(`data-reference-id="${match.reference.id}" data-category="${category}"`)
  }
})

test('designates exactly one globally closest figure while preserving both documentary categories', () => {
  const html = renderToStaticMarkup(<SharePeopleGroups matches={matches}/>)
  const top = matches.find(match => match.reference.kind === 'person')!
  const primaryArticle = html.match(new RegExp(`<article[^>]*data-reference-id="${top.reference.id}"[\\s\\S]*?</article>`))?.[0]
  expect(primaryArticle).toContain('FIGURA MAIS PRÓXIMA')
  expect(html.match(/FIGURA MAIS PRÓXIMA/g)).toHaveLength(1)
  expect(html.match(/data-category="historical-figure"/g)).toHaveLength(3)
  expect(html.match(/data-category="public-figure"/g)).toHaveLength(3)
})

test('uses compact documentary captions in the export and retains full context in the live comparison', () => {
  const omar = selectedReferenceEntries.find(entry => entry.id === 'ilhan-omar')!
  const match = matches.find(item => item.reference.id === omar.id)!
  const shared = renderToStaticMarkup(<SharePeopleGroups matches={[match]}/>)
  const caption = shared.match(/<small[^>]*>([\s\S]*?)<\/small>/)?.[1]
  expect(caption).toContain('Datas citadas:')
  expect(caption).toContain('21/01/2021')
  expect(caption!.length).toBeLessThan(100)
  expect(renderToStaticMarkup(<MiniMatches title="FIGURAS ATUAIS" matches={[match]} detailed/>)).toContain('sem renovação integral em 2026')
})

test('keeps the missing-portrait slot fixed and the profile in its correct category', () => {
  const missing = { ...selectedReferenceEntries.find(entry => entry.kind === 'person')!, id: 'unpackaged-test-portrait', category: 'public-figure' } as ReferenceEntry
  const html = renderToStaticMarkup(<MiniMatches title="FIGURAS ATUAIS" matches={[{ ...matches[0]!, reference: missing }]} detailed/> )
  expect(html).toContain('data-category="public-figure"')
  expect(html).toContain('Retrato indisponível')
  expect(html).toContain('flex-none!')
  expect(html).toContain('w-[48px]!')
  expect(html).toContain('h-[58px]!')
})

test('renders explicit empty states without inventing figures or country matches', () => {
  const people = renderToStaticMarkup(<SharePeopleGroups matches={[]}/>)
  const countries = renderToStaticMarkup(<ShareCountryGroups matches={[]}/>)
  expect(people.match(/Sem cobertura suficiente para ordenar\./g)).toHaveLength(2)
  expect(countries.match(/Sem cobertura suficiente para ordenar\./g)).toHaveLength(2)
  expect(people).not.toContain('FIGURA MAIS PRÓXIMA')
  expect(countries).not.toContain('data-reference-id')
})

test('keeps historically scoped Brazil flags qualified in live and exported comparisons', () => {
  for (const id of ['brazil-first-republic-1889', 'brazil-fourth-republic-1946']) {
    const reference = selectedReferenceEntries.find(entry => entry.id === id)!
    const match = { ...matches[0]!, reference }
    const note = referenceFlagPeriodNote(reference)!
    expect(note).toBeTruthy()
    expect(renderToStaticMarkup(<MiniMatches title="HISTÓRICOS" matches={[match]} detailed/>)).toContain(note)
    expect(renderToStaticMarkup(<ShareCountryGroups matches={[match]}/>)).toContain(note)
  }
})
