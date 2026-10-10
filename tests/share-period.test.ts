import { expect, test } from 'bun:test'
import { selectedReferenceEntries } from '../src/data/reference-selected-catalog'
import { sharePeriodDates } from '../src/lib/share-period'

test('compacts the long Omar caption without silently changing its documentary dates', () => {
  const omar = selectedReferenceEntries.find(entry => entry.id === 'ilhan-omar')!
  const caption = sharePeriodDates(omar.period)
  expect(omar.period.length).toBeGreaterThan(300)
  expect(caption.length).toBeLessThan(100)
  expect(caption).toContain('21/01/2021')
  expect(caption).toContain('10/05/2019')
  expect(caption).toContain('06/02/2025')
  expect(omar.period).toContain('sem renovação integral em 2026')
})

test('normalizes ISO dates, preserves date order and removes only exact duplicates', () => {
  expect(sharePeriodDates('2026-10-10; 10/10/2026; texto 1947–1950, 1947.')).toBe('Datas citadas: 10/10/2026 · 1947 · 1950')
})

test('keeps undated and ancient descriptions rather than manufacturing a year', () => {
  expect(sharePeriodDates('Século IV a.C.; data exata desconhecida.')).toBe('Século IV a.C.; data exata desconhecida.')
  expect(sharePeriodDates('Programa sem data.')).toBe('Programa sem data.')
})
