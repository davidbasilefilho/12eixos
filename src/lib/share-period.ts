/** Compact documentary dates for the fixed-size export; the live record keeps its full period. */
export function sharePeriodDates(period: string): string {
  const dates = period.match(/\d{2}\/\d{2}\/\d{4}|\d{4}-\d{2}-\d{2}|\b(?:1[5-9]|20)\d{2}\b/g)
  if (!dates) return period
  const unique = [...new Set(dates.map(date => /^\d{4}-/.test(date) ? date.split('-').reverse().join('/') : date))]
  return `Datas citadas: ${unique.join(' · ')}`
}
