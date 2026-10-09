import { expect, test } from 'bun:test';
import { referenceEntries } from '../src/data/references';
import { currentCountryCoverage05Additions, currentCountryCoverage05OriginalBefore, extendCurrentCountryCoverage05 } from '../src/data/reference-current-country-coverage-05';

test('country coverage composition preserves audited records and is safe to repeat', () => {
  for (const id of Object.keys(currentCountryCoverage05Additions)) {
    const before = structuredClone(referenceEntries.find(entry => entry.id === id)!);
    const snapshot = structuredClone(before);
    const after = extendCurrentCountryCoverage05(before);
    expect(extendCurrentCountryCoverage05(after)).toEqual(after);
    expect(before).toEqual(snapshot);
    for (const source of before.sources) expect(after.sources).toContainEqual(source);
    for (const [axis, coding] of Object.entries(before.coding ?? {})) {
      expect(after.coding?.[axis as keyof typeof after.coding]).toEqual(coding);
    }
    for (const [axis, value] of Object.entries(after.vec)) {
      if (!after.evidence[axis as keyof typeof after.evidence]) expect(value).toBe(50);
    }
  }
});

test('country coverage refuses legacy scores without audited coding', () => {
  const legacy = structuredClone(currentCountryCoverage05OriginalBefore.find(entry => entry.id === 'united-states')!);
  expect(Object.keys(legacy.evidence).length).toBeGreaterThan(0);
  expect(extendCurrentCountryCoverage05(legacy)).toEqual(legacy);
});
