import { IconAtom, IconBook2, IconBuildingBank, IconCalendarStats, IconChartBar, IconHeart, IconLeaf, IconPeace, IconPlant, IconSettings, IconUsersGroup, IconWorld } from '@tabler/icons-react'
import { AXES, type AxisScores } from '../lib/scoring'
import { type ReferenceEntry, type ReferenceCategory } from '../data/references'
import { fullReferenceCatalog, selectedReferenceEntries } from '../data/reference-selected-catalog'
import type { QuizVariant } from '../state/quiz'

export const AXIS_COLORS = ['#FF5A1F', '#12B8B3', '#D9A20B', '#7C4DFF', '#25A7E8', '#33B875', '#FF4048', '#8A46E8', '#169FDE', '#F06A1A', '#E83E8C', '#5B79E8'] as const
export const AXIS_ICONS = [IconBuildingBank, IconUsersGroup, IconLeaf, IconWorld, IconPeace, IconPlant, IconBuildingBank, IconCalendarStats, IconWorld, IconSettings, IconHeart, IconAtom] as const

export const axisDetails: Record<(typeof AXES)[number]['key'], string> = {
  est: 'Distribuição do poder entre comunidades, governos locais e autoridade nacional.',
  rep: 'Preferência por instituições eleitorais e pluralismo ou concentração de decisões.',
  pod: 'Equilíbrio entre segurança pública, privacidade e liberdades individuais.',
  imi: 'Relação entre integração cultural, diversidade e políticas migratórias.',
  dip: 'Preferência por dissuasão militar ou resolução diplomática de conflitos.',
  int: 'Grau de envolvimento externo e afirmação de interesses nacionais.',
  eco: 'Papel da propriedade e dos serviços públicos frente à iniciativa privada.',
  con: 'Peso do planejamento e da regulação frente à coordenação pelo mercado.',
  com: 'Abertura comercial e integração econômica frente à proteção da produção interna.',
  rel: 'Papel das convicções religiosas nas instituições e decisões públicas.',
  mor: 'Posições sobre mudança social, costumes e continuidade de tradições.',
  tec: 'Entusiasmo com soluções técnicas frente à cautela biológica e ambiental.',
}

export function axisPoleName(axis: (typeof AXES)[number]) { return `${axis.left} ↔ ${axis.right}` }
export function axisColorFor(key: (typeof AXES)[number]['key']) { return AXIS_COLORS[AXES.findIndex(axis => axis.key === key)] }
export const formatPercent = (value: number) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(Math.round(value * 10) / 10)
export const plans: { count: QuizVariant; duration: string; caption: string }[] = [
  { count: 36, duration: '5–10 minutos', caption: 'Versão curta' },
  { count: 60, duration: '10–20 minutos', caption: 'Versão padrão' },
  { count: 240, duration: '30–60 minutos', caption: 'Versão completa' },
]

/** Legacy IDs still resolve to their original archived record; new research IDs also resolve. */
export const referenceById = new Map(fullReferenceCatalog.map(entry => [entry.id, entry]))
export const referenceCounts: Record<ReferenceCategory, number> = selectedReferenceEntries.reduce((counts, entry) => {
  counts[entry.category] += 1
  return counts
}, { ideology: 0, 'public-figure': 0, 'historical-figure': 0, country: 0, 'historical-country': 0 })

export function scoreForAxis(scores: AxisScores, key: (typeof AXES)[number]['key']) { return scores[key] }
export function referenceTypeLabel(entry: Pick<ReferenceEntry, 'category'>) {
  return ({ ideology: 'Ideologia', 'public-figure': 'Figura pública', 'historical-figure': 'Figura histórica', country: 'País atual', 'historical-country': 'País histórico' } as const)[entry.category]
}
