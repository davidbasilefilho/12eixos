import { useState, type CSSProperties } from 'react'
import { flagAssets } from '../data/flag-assets'
import { portraitAssets } from '../data/portrait-assets'
import type { ReferenceEntry } from '../data/references'

const portraitById = new Map(portraitAssets.flatMap(asset => [[asset.id, asset] as const, [asset.id.replace(/^(?:na|eu|as|af)-/, ''), asset] as const]))
const packagedFlags = new Set(flagAssets)
// 1940 Constitution art5 retains the national flag; 1906 decree artII specifies
// the existing asset geometry. Primary transcription provenance is documented externally.
const historicalFlagAliases: Record<string, string> = {
  'cuba-constitutional-republic-1940': 'cuba-batista-1952',
  // Compact national identifiers: Portugal original1976 art11(1), Argentina original1944 decree art2–3.
  // Reusing packaged assets does not certify exact historical dimensions or color specifications.
  'portugal-revolution-council-1976': 'portugal-first-republic',
  'argentina-first-peron-administration-1946': 'argentina-current-2025',
}
const countryFlagAspectRatios: Record<string, number> = {
  // Native unchanged licensed historical civil flags; docs/assets-historical-flags-batch01.md.
  'france-july-monarchy-1830': 900 / 600,
  'irish-free-state-1922': 1200 / 600,
  'north-german-confederation-1867': 900 / 600,
  'czechoslovakia-socialist-unitary-1960': 900 / 600,
  // Native geometry of the packaged current-country assets.
  'grenada-current-2025': 500 / 300,
  'st-kitts-and-nevis-current-2025': 750 / 500,
  'st-lucia-current-2025': 600 / 300,
  'st-vincent-and-the-grenadines-current-2025': 72 / 48,
  'trinidad-and-tobago-current-2025': 30 / 18,
  'andorra-current-2025': 1000 / 700,
  'liechtenstein-current-2025': 1000 / 600,
  'monaco-current-2025': 750 / 600,
  'san-marino-current-2025': 800 / 600,
  'cyprus-current-2025': 900 / 600,
  'bosnia-and-herzegovina-current-2025': 16 / 8,
  'fiji-current-2025': 1200 / 600,
  'samoa-current-2025': 2880 / 1440,
  'tonga-current-2025': 96 / 48,
  'cabo-verde-current-2025': 510 / 300,
  'seychelles-current-2025': 900 / 450,
  'comoros-current-2025': 500 / 300,
  'djibouti-current-2025': 15 / 10,
  'eswatini-current-2025': 900 / 600,

  'belize-current-2025': 5 / 3, 'bahamas-current-2025': 2, 'barbados-current-2025': 3 / 2,
  'antigua-and-barbuda-current-2025': 3 / 2, 'dominica-current-2025': 2,
  'portugal-revolution-council-1976': 3 / 2, 'argentina-first-peron-administration-1946': 8 / 5,
  uruguay: 3 / 2, denmark: 37 / 28, 'united-states': 1235 / 650, singapore: 3 / 2, germany: 5 / 3,
  'new-zealand': 2, brazil: 10 / 7, japan: 3 / 2, india: 3 / 2, 'south-africa': 3 / 2, indonesia: 3 / 2,
  mexico: 7 / 4, turkey: 3 / 2, 'saudi-arabia': 3 / 2, france: 3 / 2, 'paris-commune-1871': 3 / 2,
  'us-new-deal-1933': 361 / 190, 'brazil-estado-novo-1937': 10 / 7, 'imperial-japan-1931': 3 / 2,
  'prc-mao-1949': 3 / 2, 'cuba-revolutionary-1959': 2, 'cuba-constitutional-republic-1940': 2, 'portugal-estado-novo-1933': 3 / 2,
  'chile-pinochet-1973': 3 / 2, 'roc-taiwan-1949': 3 / 2, 'france-de-gaulle-1958': 3 / 2,
  'chile-up-1970': 3 / 2, 'uk-attlee-1945': 5 / 3, 'weimar-republic': 3 / 2, 'yugoslavia-1974': 2, 'ussr-1977': 2,
}

export function referenceImage(reference: Pick<ReferenceEntry, 'id' | 'kind'>): { src: string; alt: string; width: number; height: number } | null {
  if (reference.kind === 'person') {
    const asset = portraitById.get(reference.id) ?? portraitById.get(reference.id.replace(/^(?:na|eu|as|af)-/, ''))
    return asset ? { src: asset.src, alt: '', width: 40, height: 48 } : null
  }
  if (reference.kind === 'country') {
    const src = `/assets/flags/${historicalFlagAliases[reference.id] ?? reference.id}.svg`
    if (!packagedFlags.has(src)) return null
    const width = 36
    return { src, alt: '', width, height: width / (countryFlagAspectRatios[reference.id] ?? 3 / 2) }
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
  const [failedSource, setFailedSource] = useState<string | null>(null)
  if (!image || image.src === failedSource) return null
  return <img
    className={className ?? `reference-thumbnail reference-thumbnail-${reference.kind}`}
    src={image.src}
    onError={() => setFailedSource(image.src)}
    alt={image.alt}
    aria-hidden="true"
    loading={loading}
    decoding="async"
    width={image.width}
    height={image.height}
    style={{ width: image.width, height: image.height, objectFit: 'contain', border: '1px solid var(--border)', flex: '0 0 auto', ...style }}
  />
}
