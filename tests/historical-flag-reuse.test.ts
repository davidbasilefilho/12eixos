import { describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { flagAssets, historicalFlagReuses, referenceFlagPeriodNote } from '../src/data/flag-assets'
import { referenceEntries } from '../src/data/references'

// Independently recorded local bytes, before copying or registering the new IDs.
const expected = [
  ['nepal-multiparty-monarchy-1990', 'nepal-current-2025', '98b33ea847a3f6e6f21c777423acc9d80512a85f858d967ceaf56d206c10be1e', 726, 885],
  ['dahomey-founding-civil-republic-1960', 'benin-current-2025', '03e7fd78282d719338630eaf2301fa9c9dbcbf57a9639a20e8fbb43353409569', 900, 600],
  ['madagascar-tsiranana-founding-government-1960', 'madagascar-current-2025', 'a302a82027fb4c1739350e49505791537ed26a3b6326558b09bdc87dcf2b6cb8', 900, 600],
  ['nigeria-second-republic-1979', 'nigeria-current-2025', '29a8a7fff1ca574873f953e086753bb2f90be55c3efac5c91f829b1a1c6c01be', 1200, 600],
  ['kenya-kenyatta-founding-government-1963', 'kenya-current-2025', '4e750d2b4aba128580e40052630883aee27419dcbd87ea44a4ede609e7c42a1b', 900, 600],
  ['senegal-senghor-founding-government-1960', 'senegal-current-2025', 'c9fb30d11cf7e230ee44d5cf663b7dce52a11c58798155b37fabec4158441497', 900, 600],
  ['brazil-first-republic-1889', 'brazil-estado-novo-1937', '4fe5746b128101524c3422d4bef92e0e21a0b4e155c8a92270f7047c7820808b', 1000, 700],
  ['brazil-fourth-republic-1946', 'brazil-estado-novo-1937', '4fe5746b128101524c3422d4bef92e0e21a0b4e155c8a92270f7047c7820808b', 1000, 700],
] as const

const readAsset = (src: string) => readFileSync(new URL(`../public${src}`, import.meta.url))

describe('documented historical flag reuse', () => {
  test('maps only the exact audited historical-country identities', () => {
    expect(historicalFlagReuses.map(asset => asset.id).sort()).toEqual(expected.map(([id]) => id).sort())
    expect(new Set(flagAssets).size).toBe(flagAssets.length)
    for (const [id] of expected) {
      const entries = referenceEntries.filter(entry => entry.id === id)
      expect(entries.length).toBe(1)
      expect(entries[0]?.kind).toBe('country')
      expect(entries[0]?.category).toBe('historical-country')
      expect(flagAssets.filter(src => src === `/assets/flags/${id}.svg`).length).toBe(1)
    }
  })

  for (const [id, sourceId, sha256, width, height] of expected) {
    test(`${id} preserves licensed bytes and native dimensions`, () => {
      const asset = historicalFlagReuses.find(entry => entry.id === id)!
      expect(asset.src).toBe(`/assets/flags/${id}.svg`)
      expect(asset.copiedFrom).toBe(`/assets/flags/${sourceId}.svg`)
      const bytes = readAsset(asset.src)
      expect(bytes.equals(readAsset(asset.copiedFrom))).toBe(true)
      expect(createHash('sha256').update(bytes).digest('hex')).toBe(sha256)
      expect(asset.sha256).toBe(sha256)
      const svg = bytes.toString('utf8')
      const root = svg.match(/<svg\b[^>]*>/)?.[0] ?? ''
      expect(root).toContain(`width="${width}"`)
      expect(root).toContain(`height="${height}"`)
      expect(asset.width).toBe(width)
      expect(asset.height).toBe(height)
      expect(svg).not.toMatch(/<(?:script|foreignObject)\b/i)
      expect(svg).not.toMatch(/(?:href|src)\s*=\s*["'](?:https?:|\/\/|data:)/i)
      expect(asset.historicalSource.startsWith('https://')).toBe(true)
      expect(asset.originalSource.startsWith('https://commons.wikimedia.org/wiki/File:')).toBe(true)
      expect(asset.documentedPeriod.length).toBeGreaterThan(30)
      expect(asset.license).toContain('Domínio público')
      expect(asset.author.length).toBeGreaterThan(3)
    })
  }

  test('does not invent a flag for unresolved periods or infer it from a country prefix', () => {
    for (const id of ['south-korea-rhee-government-1948', 'senegal-unverified-period']) {
      expect(flagAssets).not.toContain(`/assets/flags/${id}.svg`)
      expect(referenceFlagPeriodNote({ id, kind: 'country' })).toBeNull()
    }
    expect(referenceFlagPeriodNote({ id: 'nepal-multiparty-monarchy-1990', kind: 'person' })).toBeNull()
  })

  test('does not extend the First Republic thumbnail to its provisional opening days', () => {
    const id = 'brazil-first-republic-1889'
    const asset = historicalFlagReuses.find(entry => entry.id === id)!
    expect(asset.periods?.map(({ fromDate, toDate, src }) => [fromDate, toDate, src])).toEqual([
      ['1889-11-15', '1889-11-18', null],
      ['1889-11-19', '1930-10-24', `/assets/flags/${id}.svg`],
    ])
    expect(referenceFlagPeriodNote({ id, kind: 'country' })).toBe('Bandeira de 21 estrelas, 19/11/1889–24/10/1930; não representa 15–18/11/1889.')
    expect(referenceFlagPeriodNote({ id, kind: 'person' })).toBeNull()
    expect(readAsset(asset.src).toString('utf8').match(/xlink:href="#[abfhi]"/g)?.length).toBe(21)
  })

  test('documents the 1960 design change within the Fourth Republic', () => {
    const id = 'brazil-fourth-republic-1946'
    const asset = historicalFlagReuses.find(entry => entry.id === id)!
    const variant = '/assets/flags/period-variants/brazil-military-regime-1964-1968.svg'
    expect(asset.periods?.map(({ fromDate, toDate, src }) => [fromDate, toDate, src])).toEqual([
      ['1946-01-31', '1960-04-20', `/assets/flags/${id}.svg`],
      ['1960-04-21', '1964-03-31', variant],
    ])
    expect(flagAssets).toContain(variant)
    expect(createHash('sha256').update(readAsset(variant)).digest('hex')).toBe('a28dd6f400ab0ee4b4670775c503a89e8e21a19c2e6cfb47328f08a8c763363e')
    expect(readAsset(variant).toString('utf8').match(/xlink:href="#[abfhi]"/g)?.length).toBe(22)
    expect(referenceFlagPeriodNote({ id, kind: 'country' })).toBe('Bandeira de 21 estrelas, 1946–1960; a partir de 21/04/1960, eram 22 estrelas.')
    expect(referenceFlagPeriodNote({ id, kind: 'ideology' })).toBeNull()
  })
})
