export const colorScheme = {
  background: 'text-background',
  surface: 'text-surface',
  surface2: 'text-surface-2',
  border: 'text-border',
  accent: 'text-accent',
  accentAlt: 'text-accent-2',
  mapBlue: 'text-map-blue',
  mapBlueDeep: 'text-map-blue-deep',
  resultRed: 'text-result-red',
  ink: 'text-ink',
  secondary: 'text-ink-secondary',
  muted: 'text-ink-muted',
  unitary: 'text-axis-unitary',
  democracy: 'text-axis-democracy',
  liberty: 'text-axis-liberty',
  multicultural: 'text-axis-multicultural',
  pacifist: 'text-axis-pacifist',
  noninterventionist: 'text-axis-noninterventionist',
  public: 'text-axis-public',
  planning: 'text-axis-planning',
  globalism: 'text-axis-globalism',
  irreligious: 'text-axis-irreligious',
  progressive: 'text-axis-progressive',
  technology: 'text-axis-technology',
} as const

export type ColorScheme = keyof typeof colorScheme

export const controlVariants = {
  solid: 'border-accent bg-accent text-background hover:brightness-110',
  outline: 'border-border bg-surface text-ink hover:border-accent hover:text-accent',
  ghost: 'border-transparent bg-transparent text-ink-secondary hover:border-border hover:bg-surface-2 hover:text-accent',
  quiet: 'min-h-0 border-transparent bg-transparent px-0 text-ink-secondary hover:text-accent',
} as const

export const controlSizes = {
  sm: 'min-h-10 px-3 text-sm',
  md: 'min-h-12 px-4 text-base',
  lg: 'min-h-[54px] px-5 text-lg',
  icon: 'size-12 p-0',
} as const

export type ControlVariant = keyof typeof controlVariants
export type ControlSize = keyof typeof controlSizes

export const controlColorClasses: Record<ColorScheme, { solid: string; text: string }> = {
  background: { solid: 'bg-background border-background', text: 'text-background' },
  surface: { solid: 'bg-surface border-surface', text: 'text-surface' },
  surface2: { solid: 'bg-surface-2 border-surface-2', text: 'text-surface-2' },
  border: { solid: 'bg-border border-border', text: 'text-border' },
  accent: { solid: 'bg-accent border-accent', text: 'text-accent' },
  accentAlt: { solid: 'bg-accent-2 border-accent-2', text: 'text-accent-2' },
  mapBlue: { solid: 'bg-map-blue border-map-blue', text: 'text-map-blue' },
  mapBlueDeep: { solid: 'bg-map-blue-deep border-map-blue-deep', text: 'text-map-blue-deep' },
  resultRed: { solid: 'bg-result-red border-result-red', text: 'text-result-red' },
  ink: { solid: 'bg-ink border-ink', text: 'text-ink' },
  secondary: { solid: 'bg-ink-secondary border-ink-secondary', text: 'text-ink-secondary' },
  muted: { solid: 'bg-ink-muted border-ink-muted', text: 'text-ink-muted' },
  unitary: { solid: 'bg-axis-unitary border-axis-unitary', text: 'text-axis-unitary' },
  democracy: { solid: 'bg-axis-democracy border-axis-democracy', text: 'text-axis-democracy' },
  liberty: { solid: 'bg-axis-liberty border-axis-liberty', text: 'text-axis-liberty' },
  multicultural: { solid: 'bg-axis-multicultural border-axis-multicultural', text: 'text-axis-multicultural' },
  pacifist: { solid: 'bg-axis-pacifist border-axis-pacifist', text: 'text-axis-pacifist' },
  noninterventionist: { solid: 'bg-axis-noninterventionist border-axis-noninterventionist', text: 'text-axis-noninterventionist' },
  public: { solid: 'bg-axis-public border-axis-public', text: 'text-axis-public' },
  planning: { solid: 'bg-axis-planning border-axis-planning', text: 'text-axis-planning' },
  globalism: { solid: 'bg-axis-globalism border-axis-globalism', text: 'text-axis-globalism' },
  irreligious: { solid: 'bg-axis-irreligious border-axis-irreligious', text: 'text-axis-irreligious' },
  progressive: { solid: 'bg-axis-progressive border-axis-progressive', text: 'text-axis-progressive' },
  technology: { solid: 'bg-axis-technology border-axis-technology', text: 'text-axis-technology' },
}
