import type { ComponentProps } from 'react'
import { cn } from 'cn'
import type { ReferenceEntry } from '../data/references'
import type { ReferenceMatch } from '../lib/matching'
import { sharePeriodDates } from '../lib/share-period'
import { ReferenceThumbnail, referenceFlagPeriodNote, referenceImage } from './reference-media'
import { formatPercent } from './view-model'

type Match = ReferenceMatch<ReferenceEntry>
type PortraitSize = 'compact' | 'detail'

export const ideologyPanelClassName = 'bg-[var(--ideology-panel-surface)]! text-ink! border-accent/40! [&_:is(h2,h3,p,span,b,strong)]:text-ink! [&_small]:text-ink-secondary!'

/** Portrait availability never determines a person's documentary category. */
export function PersonPortrait({ reference, size = 'compact' }: { reference: ReferenceEntry; size?: PortraitSize }) {
  const dimensions = size === 'detail' ? 'w-[48px]! h-[58px]! text-[9px]' : 'w-[30px]! h-[36px]! text-[6px]'
  return referenceImage(reference)
    ? <ReferenceThumbnail reference={reference} className={cn('reference-thumbnail reference-thumbnail-person max-w-none! max-h-none! object-contain', dimensions)}/>
    : <span className={cn('portrait-unavailable flex flex-none! items-center justify-center border border-border bg-surface-2 px-[3px] text-center font-sans leading-[1.25] text-ink-secondary', dimensions)}>Retrato indisponível</span>
}

export function MiniMatches({ title, matches, detailed = false, columns = false, className }: {
  title: string
  matches: Match[]
  detailed?: boolean
  columns?: boolean
  className?: ComponentProps<'section'>['className']
}) {
  return <section className={cn('mini-matches', detailed && 'categorized-matches', columns && 'grid grid-cols-3 gap-x-6 gap-y-3 max-[760px]:grid-cols-1', className)}>
    <h3 className={cn(detailed && 'mb-3! text-[11px]! tracking-[1px]', columns && 'col-span-3 m-0! max-[760px]:col-span-1')}>{title}</h3>
    {matches.length ? matches.map(match => <div key={match.reference.id} data-reference-id={match.reference.id} data-category={match.reference.category} className={cn(detailed && 'min-w-0 items-start! gap-[10px]! py-[7px] text-[14px]!')}>
      {match.reference.kind === 'person' ? <PersonPortrait reference={match.reference} size={detailed ? 'detail' : 'compact'}/> : <ReferenceThumbnail reference={match.reference}/>}
      <span className="min-w-0">{match.reference.name}{detailed && <small className="mt-[3px] block text-[11px] leading-[1.45] text-ink-secondary">{match.reference.period}</small>}{referenceFlagPeriodNote(match.reference) && <small className="mt-[3px] block text-[10px] leading-[1.4] text-ink-secondary">{referenceFlagPeriodNote(match.reference)}</small>}</span>
      <b className={cn('shrink-0', detailed && 'text-[15px]!')}>{Math.round(match.similarity)}%</b>
    </div>) : <p>Sem cobertura suficiente.</p>}
  </section>
}

export function ResultComparisonGroups({ matches }: { matches: Match[] }) {
  const categoryMatches = (category: ReferenceEntry['category']) => matches.filter(item => item.reference.category === category).slice(0, 3)
  return <>
    <div className="result-ideology-comparisons mt-[26px] border-t border-border pt-[22px] pb-6 text-left">
      <MiniMatches title="IDEOLOGIAS PRÓXIMAS" matches={categoryMatches('ideology')} detailed columns/>
    </div>
    <div className="categorized-result-groups mt-[26px] grid grid-cols-2 gap-[15px] border-t border-border pt-[22px] pb-6 text-left max-[640px]:grid-cols-1">
      <MiniMatches title="FIGURAS HISTÓRICAS" matches={categoryMatches('historical-figure')} detailed/>
      <MiniMatches title="FIGURAS ATUAIS" matches={categoryMatches('public-figure')} detailed className="border-l border-border pl-[15px] max-[640px]:border-t max-[640px]:border-l-0 max-[640px]:pt-[14px] max-[640px]:pl-0"/>
      <section className="result-country-category col-span-2 grid grid-cols-2 gap-x-6 border-t border-border pt-5 max-[640px]:col-span-1 max-[640px]:grid-cols-1">
        <h3 className="col-span-2 mb-3 text-[11px] tracking-[1px]! max-[640px]:col-span-1">PAÍSES</h3>
        <MiniMatches title="ATUAIS" matches={categoryMatches('country')} detailed/>
        <MiniMatches title="HISTÓRICOS" matches={categoryMatches('historical-country')} detailed className="max-[640px]:mt-4"/>
      </section>
    </div>
  </>
}

export function ShareCountryGroups({ matches }: { matches: Match[] }) {
  const groups = [
    { title: 'ATUAIS', items: matches.filter(item => item.reference.category === 'country').slice(0, 3) },
    { title: 'HISTÓRICOS', items: matches.filter(item => item.reference.category === 'historical-country').slice(0, 3) },
  ]
  return <section className="categorized-share-countries col-start-2 row-start-3 min-w-0 border border-border p-[9px] [--flag-height:14px]">
    <h3 className="m-0 mb-2 text-[10px] tracking-[1px]! text-ink-secondary">PAÍSES</h3>
    {groups.map(group => <div className="country-subgroup [&+.country-subgroup]:mt-[10px]" key={group.title}>
      <h4 className="mb-[5px] text-[8px] tracking-[1px] text-ink-secondary">{group.title}</h4>
      {group.items.length === 0 && <p>Sem cobertura suficiente para ordenar.</p>}
      {group.items.map(item => <article className="categorized-country mb-[7px] grid grid-cols-[max-content_minmax(0,1fr)_auto] items-start gap-[6px]" key={item.reference.id} data-reference-id={item.reference.id} data-category={item.reference.category}>
        <ReferenceThumbnail reference={item.reference}/>
        <div className="col-start-2"><b className="block font-display text-[11px] leading-[1.2]">{item.reference.name}</b><small className="mt-[2px] line-clamp-3 text-[7px] leading-[1.3] text-ink-secondary">{sharePeriodDates(item.reference.period)}</small>{referenceFlagPeriodNote(item.reference) && <small className="mt-[2px] block text-[7px] leading-[1.3] text-ink-secondary">{referenceFlagPeriodNote(item.reference)}</small>}</div>
        <strong className="col-start-3 text-[11px] leading-[1.2]">{formatPercent(item.similarity)}%</strong>
      </article>)}
    </div>)}
  </section>
}

export function SharePeopleGroups({ matches }: { matches: Match[] }) {
  const closestPerson = matches.find(item => item.reference.kind === 'person')
  const groups = [
    { title: 'FIGURAS HISTÓRICAS', items: matches.filter(item => item.reference.category === 'historical-figure').slice(0, 3) },
    { title: 'FIGURAS ATUAIS', items: matches.filter(item => item.reference.category === 'public-figure').slice(0, 3) },
  ]
  return <div className="categorized-share-people col-span-2 row-start-4 grid grid-cols-2 gap-2">
    {groups.map(group => <section className="categorized-people-group min-w-0 border border-border p-[9px]" key={group.title}>
      <h3 className="m-0 mb-2 text-[10px] tracking-[1px]! text-ink-secondary">{group.title}</h3>
      {group.items.length === 0 && <p>Sem cobertura suficiente para ordenar.</p>}
      {group.items.map(item => <article className="categorized-person grid min-h-[74px] grid-cols-[48px_minmax(0,1fr)] items-start gap-2 border-t border-border py-[7px]" key={item.reference.id} data-reference-id={item.reference.id} data-category={item.reference.category}>
        <PersonPortrait reference={item.reference} size="detail"/>
        <div className="min-w-0">
          <h4 className="m-0 line-clamp-2 font-display text-[13px] leading-[1.15]">{item.reference.name}</h4>
          <strong className="mt-[3px] flex flex-wrap items-center gap-x-[7px] gap-y-[2px] text-[13px] leading-[1.2] text-accent">{formatPercent(item.similarity)}%
            {item.reference.id === closestPerson?.reference.id && <span className="closest-person-label font-sans text-[7px] leading-[1.2] font-bold tracking-[.5px] text-ink-secondary">FIGURA MAIS PRÓXIMA</span>}
          </strong>
          <small className="mt-[3px] line-clamp-2 text-[8px] leading-[1.3] text-ink-secondary" title={item.reference.period}>{sharePeriodDates(item.reference.period)}</small>
        </div>
      </article>)}
    </section>)}
  </div>
}
