import { type ComponentPropsWithoutRef } from 'react'
import { cn } from 'cn'
import type { ColorScheme } from './tokens'

const colorClasses: Partial<Record<ColorScheme, string>> = { accent: 'text-accent', mapBlue: 'text-map-blue', ink: 'text-ink', secondary: 'text-ink-secondary' }
type EditorialSectionProps = ComponentPropsWithoutRef<'section'> & { number: string; title: string; color?: ColorScheme; size?: 'sm' | 'md' }
/** Numbered editorial sections share the same anatomy across the methodology. */
export function EditorialSection({ number, title, color = 'accent', size = 'md', className, children, ...props }: EditorialSectionProps) {
  return <section className={cn('min-w-0 border-t border-border py-5', size === 'sm' ? 'text-sm' : 'text-base', className)} {...props}>
    <h2 className="mb-3 flex items-start gap-3 font-display text-[25px] leading-[1.15]"><span className={cn('shrink-0', colorClasses[color] ?? colorClasses.accent)}>{number}</span>{title}</h2>
    <div className="font-display text-[15px] leading-[1.4]">{children}</div>
  </section>
}
