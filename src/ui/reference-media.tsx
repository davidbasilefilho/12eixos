import type { CSSProperties } from 'react'
import { portraitAssets } from '../data/portrait-assets'
import type { ReferenceEntry } from '../data/references'

const portraitById = new Map(portraitAssets.flatMap(asset => [[asset.id, asset] as const, [asset.id.replace(/^(?:na|eu|as|af)-/, ''), asset] as const]))
const countryFlagAspectRatios: Record<string, number> = {
  uruguay: 3 / 2, denmark: 37 / 28, 'united-states': 1235 / 650, singapore: 3 / 2, germany: 5 / 3,
  'new-zealand': 2, brazil: 10 / 7, japan: 3 / 2, india: 3 / 2, 'south-africa': 3 / 2, indonesia: 3 / 2,
  mexico: 7 / 4, turkey: 3 / 2, 'saudi-arabia': 3 / 2, france: 3 / 2, 'paris-commune-1871': 3 / 2,
  'us-new-deal-1933': 361 / 190, 'brazil-estado-novo-1937': 10 / 7, 'imperial-japan-1931': 3 / 2,
  'prc-mao-1949': 3 / 2, 'cuba-revolutionary-1959': 2, 'portugal-estado-novo-1933': 3 / 2,
  'chile-pinochet-1973': 3 / 2, 'roc-taiwan-1949': 3 / 2, 'france-de-gaulle-1958': 3 / 2,
  'chile-up-1970': 3 / 2, 'uk-attlee-1945': 5 / 3, 'weimar-republic': 3 / 2, 'yugoslavia-1974': 2, 'ussr-1977': 2,
}

export function referenceImage(reference: Pick<ReferenceEntry, 'id' | 'kind'>): { src: string; alt: string; width: number; height: number } | null {
  if (reference.kind === 'person') {
    const asset = portraitById.get(reference.id)
    return asset ? { src: asset.src, alt: '', width: asset.width, height: asset.height } : null
  }
  if (reference.kind === 'country') {
    const width = 36
    return { src: `/assets/flags/${reference.id}.svg`, alt: '', width, height: width / (countryFlagAspectRatios[reference.id] ?? 3 / 2) }
  }
  return null
}

export function countryFlagDisplaySize(id: string, width: string): Pick<CSSProperties, 'width' | 'height' | 'aspectRatio' | 'background'> {
  return { width, height: 'auto', aspectRatio: `${countryFlagAspectRatios[id] ?? 3 / 2}`, background: 'var(--surface-2)' }
}

export function ReferenceThumbnail({ reference, style = {}, className, loading = 'eager' }: {
  reference: Pick<ReferenceEntry, 'id' | 'kind'>
  style?: CSSProperties
  className?: string
  loading?: 'eager' | 'lazy'
}) {
  const image = referenceImage(reference)
  if (!image) return null
  return <img
    className={className ?? `reference-thumbnail reference-thumbnail-${reference.kind}`}
    src={image.src}
    alt={image.alt}
    aria-hidden="true"
    loading={loading}
    decoding="async"
    width={image.width}
    height={image.height}
    style={{ objectFit: 'contain', border: '1px solid var(--border)', flex: '0 0 auto', ...style }}
  />
}
