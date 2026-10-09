import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ComponentProps, type ComponentPropsWithoutRef, type HTMLAttributes, type ReactNode, useEffect, useId, useRef } from 'react'
import { Menu } from '@base-ui/react/menu'
import { Link, type LinkComponentProps, type RegisteredRouter } from '@tanstack/react-router'
import type { AnyRouter } from '@tanstack/react-router'
import { cn } from 'cn'
import { colorScheme, controlColorClasses, controlSizes, controlVariants, type ColorScheme, type ControlSize, type ControlVariant } from './tokens'

export { colorScheme }
export type { ColorScheme, ControlSize, ControlVariant }

const controlTextColors: Record<ColorScheme, string> = {
  background: 'text-background', surface: 'text-surface', surface2: 'text-surface-2', border: 'text-border',
  accent: 'text-accent', accentAlt: 'text-accent-2', mapBlue: 'text-map-blue', mapBlueDeep: 'text-map-blue-deep',
  resultRed: 'text-result-red', ink: 'text-ink', secondary: 'text-ink-secondary', muted: 'text-ink-muted',
  unitary: 'text-axis-unitary', democracy: 'text-axis-democracy', liberty: 'text-axis-liberty',
  multicultural: 'text-axis-multicultural', pacifist: 'text-axis-pacifist', noninterventionist: 'text-axis-noninterventionist',
  public: 'text-axis-public', planning: 'text-axis-planning', globalism: 'text-axis-globalism',
  irreligious: 'text-axis-irreligious', progressive: 'text-axis-progressive', technology: 'text-axis-technology',
}

type NativeStyleOptions<T extends HTMLElement> = Pick<ComponentPropsWithoutRef<T extends HTMLButtonElement ? 'button' : 'a'>, 'className'>
export type ControlOptions<T extends HTMLElement = HTMLButtonElement> = NativeStyleOptions<T> & { variant?: ControlVariant; color?: ColorScheme; size?: ControlSize }
type CommandProps = { command?: string; commandFor?: string }

const baseControl = 'inline-flex min-h-12 items-center justify-center gap-2 border px-4 text-center text-base font-bold no-underline transition-[color,background-color,border-color,filter] duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-50'

export function controlClassName({ variant = 'outline', color = 'accent', size = 'md', className }: { variant?: ControlVariant; color?: ColorScheme; size?: ControlSize; className?: string } = {}) {
const variantClass = variant === 'solid'
    ? cn(controlVariants.solid, controlColorClasses[color].solid)
    : cn(controlVariants[variant], controlColorClasses[color].text)
  return cn(baseControl, variantClass, controlSizes[size], (variant === 'ghost' || variant === 'quiet') && size !== 'icon' && 'border-0 px-0 justify-start text-left', className)
}

export function Button({ variant = 'outline', color = 'accent', size = 'md', className, type = 'button', command, commandFor, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & ControlOptions & CommandProps) {
  const semanticCommand = command ? { command, commandfor: commandFor } : {}
  return <button type={type} data-control-variant={variant} className={controlClassName({ variant, color, size, className })} {...props} {...semanticCommand as ButtonHTMLAttributes<HTMLButtonElement>}/>
}

export type ActionLinkProps<TRouter extends AnyRouter = RegisteredRouter, TFrom extends string = string, TTo extends string | undefined = undefined, TMaskFrom extends string = TFrom, TMaskTo extends string = ''> = Omit<LinkComponentProps<'a', TRouter, TFrom, TTo, TMaskFrom, TMaskTo>, 'className' | 'color'> & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { variant?: ControlVariant; color?: ColorScheme; size?: ControlSize }

export function ActionLink<TRouter extends AnyRouter = RegisteredRouter, const TFrom extends string = string, const TTo extends string | undefined = undefined, const TMaskFrom extends string = TFrom, const TMaskTo extends string = ''>({ variant = 'outline', color = 'accent', size = 'md', className, ...props }: ActionLinkProps<TRouter, TFrom, TTo, TMaskFrom, TMaskTo>) {
  const linkProps = props as ComponentProps<typeof Link>
  return <Link data-control-variant={variant} className={controlClassName({ variant, color, size, className })} {...linkProps}/>
}

export function TextLink({ className, ...props }: ActionLinkProps) {
  return <ActionLink variant="quiet" size="sm" className={cn('min-h-10 font-bold underline-offset-4 hover:underline', className)} {...props}/>
}

export function Callout({ className, children, ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return <section className={cn('border border-border bg-surface text-ink', className)} {...props}>{children}</section>
}

export const MenuRoot = Menu.Root
export const MenuPortal = Menu.Portal
export function MenuTrigger({ className, ...props }: ComponentPropsWithoutRef<typeof Menu.Trigger>) {
  return <Menu.Trigger className={cn('inline-flex min-h-10 items-center justify-center gap-2 border border-transparent px-3 text-sm font-bold text-ink-secondary transition-colors hover:border-border hover:bg-surface-2 hover:text-accent focus-visible:outline-3 focus-visible:outline-offset-3', className)} {...props}/>
}
export function MenuPositioner({ className, ...props }: ComponentPropsWithoutRef<typeof Menu.Positioner>) {
  return <Menu.Positioner className={cn('z-[var(--layer-popup)]', className)} {...props}/>
}
export function MenuPopup({ className, ...props }: ComponentPropsWithoutRef<typeof Menu.Popup>) {
  return <Menu.Popup className={cn('min-w-48 border border-border bg-surface p-1 text-ink shadow-xl', className)} {...props}/>
}
export function MenuItem({ className, ...props }: ComponentPropsWithoutRef<typeof Menu.Item>) {
  return <Menu.Item className={cn('flex min-h-10 cursor-pointer items-center gap-2 px-3 text-sm text-ink-secondary outline-none data-[highlighted]:bg-surface-2 data-[highlighted]:text-accent data-[selected]:text-accent focus-visible:outline-3 focus-visible:outline-offset-[-3px]', className)} {...props}/>
}

export function Accordion({ summary, children, className, open, onToggle, ...props }: Omit<ComponentPropsWithoutRef<'details'>, 'children'> & { summary: ReactNode; children: ReactNode }) {
  const panelId = useId()
  return <details className={cn('group border-y border-border', className)} open={open} onToggle={onToggle} {...props}>
    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
      <span>{summary}</span><span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none">⌄</span>
    </summary>
    <div id={panelId} className="accordion-panel grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 group-open:grid-rows-[1fr] group-open:opacity-100 motion-reduce:transition-none">
      <div className="min-h-0 overflow-hidden"><div className="pb-4">{children}</div></div>
    </div>
  </details>
}

export function AxisSpectrum({ color = 'mapBlue', className, ...props }: HTMLAttributes<HTMLDivElement> & { color?: ColorScheme }) {
  return <div className={cn('border border-border border-t-2 bg-surface', colorScheme[color], className)} {...props}/>
}

/** Bind semantic InterestEvent behavior when available; use pointer and focus events only in browsers without it. */
export function bindInterest(invoker: HTMLElement, onInterest: (active: boolean) => void) {
  const targetId = invoker.getAttribute('interestfor')
  const target = targetId ? document.getElementById(targetId) : null
  if (!target) return () => {}
  const native = 'oninterest' in target && 'onloseinterest' in target
  const enter = () => onInterest(true)
  const leave = () => onInterest(false)
  if (native) {
    target.addEventListener('interest', enter)
    target.addEventListener('loseinterest', leave)
  } else {
    invoker.addEventListener('pointerenter', enter)
    invoker.addEventListener('pointerleave', leave)
  }
  invoker.addEventListener('focusin', enter)
  invoker.addEventListener('focusout', leave)
  return () => {
    target.removeEventListener('interest', enter)
    target.removeEventListener('loseinterest', leave)
    invoker.removeEventListener('pointerenter', enter)
    invoker.removeEventListener('pointerleave', leave)
    invoker.removeEventListener('focusin', enter)
    invoker.removeEventListener('focusout', leave)
  }
}

export function InterestTarget({ interestFor, className, ...props }: HTMLAttributes<HTMLElement> & { interestFor: string }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.setAttribute('interestfor', interestFor)
    return () => element.removeAttribute('interestfor')
  }, [interestFor])
  return <span ref={ref} className={className} {...props}/>
}
