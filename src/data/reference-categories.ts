import type { ReferenceCategory } from './references';

export const referenceCategoryLabels = {
  ideology: 'Ideologias',
  'public-figure': 'Figuras públicas',
  'historical-figure': 'Figuras históricas',
  country: 'Países atuais',
  'historical-country': 'Países e governos históricos',
} satisfies Record<ReferenceCategory, string>;

export const referenceCategories: ReadonlyArray<{ id: ReferenceCategory; label: string }> = [
  { id: 'ideology', label: referenceCategoryLabels.ideology },
  { id: 'public-figure', label: referenceCategoryLabels['public-figure'] },
  { id: 'historical-figure', label: referenceCategoryLabels['historical-figure'] },
  { id: 'country', label: referenceCategoryLabels.country },
  { id: 'historical-country', label: referenceCategoryLabels['historical-country'] },
];
