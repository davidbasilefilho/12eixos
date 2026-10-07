import { describe, expect, test } from 'bun:test'
import { AXES, parseResultSearch, resultSearch, type AxisScores } from '../src/lib/scoring'
import { displayAxisNames, displayAxisScore } from '../src/ui/axis-display'

describe('named-pole visualization and reproducible URL semantics', () => {
  test('preserves first-pole URL values while displaying the canonical named pole', () => {
    const rightNamed = new Set(['est', 'pod', 'imi', 'dip', 'com'])
    for (const value of [0, 20, 50, 80, 100]) {
      const scores = Object.fromEntries(AXES.map(axis => [axis.key, value])) as AxisScores
      const restored = parseResultSearch(resultSearch(scores))!
      for (const [index, axis] of AXES.entries()) {
        expect(restored[axis.key]).toBe(value)
        expect(displayAxisNames[index]).toBe(rightNamed.has(axis.key) ? axis.right : axis.left)
        expect(displayAxisScore(restored, index)).toBe(rightNamed.has(axis.key) ? 100 - value : value)
      }
    }
    expect(displayAxisScore({ ...Object.fromEntries(AXES.map(axis => [axis.key, 50])), pod: 37 } as AxisScores, 2)).toBe(63)
  })
})
