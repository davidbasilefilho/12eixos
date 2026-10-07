import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { flushSync } from 'react-dom'
import { Link, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import { Menu } from '@base-ui/react/menu'
import { ActionLink, Button, Callout, controlClassName } from './primitives'
import { ReferenceThumbnail, referenceImage, countryFlagDisplaySize } from './reference-media'
import {
  IconArrowLeft,
  IconArrowRight,
  IconAtom,
  IconBook2,
  IconBuildingBank,
  IconCalendarStats,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCopy,
  IconDownload,
  IconDeviceDesktop,
  IconHeart,
  IconLeaf,
  IconExternalLink,
  IconMoon,
  IconPeace,
  IconPlant,
  IconSettings,
  IconSun,
  IconUsersGroup,
  IconWorld,
  IconX,
} from '@tabler/icons-react'
import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js'
import { AXES, ANSWER_OPTIONS, axisIntensity, parseResultSearch, scoreAnswers, type AnswerValue, type AxisScores } from '../lib/scoring'
import { countDocumentedEvidenceAxes, documentedEvidenceAxes, matchReferences, partitionMatchReferences, type ReferenceMatch } from '../lib/matching'
import { downloadShareImage } from '../lib/share-image'
import { questions, questionIds36, questionIds60 } from '../data/questions'
import { referenceEntries, type ReferenceCategory, type ReferenceEntry } from '../data/references'
import { referenceCategories, referenceCategoryLabels } from '../data/reference-categories'
import { completeQuizProgress, createQuizProgress, getQuizProgressForRoute, getQuizResumeQuestion, saveQuizProgress, type QuizVariant } from '../state/quiz'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

const axisColors = ['#FF5A1F', '#12B8B3', '#D9A20B', '#7C4DFF', '#25A7E8', '#33B875', '#FF4048', '#8A46E8', '#169FDE', '#F06A1A', '#E83E8C', '#5B79E8']
const axisIcons = [IconBuildingBank, IconUsersGroup, IconLeaf, IconWorld, IconPeace, IconPlant, IconBuildingBank, IconCalendarStats, IconWorld, IconSettings, IconHeart, IconAtom]
const axisPoleName = (axis: (typeof AXES)[number]) => `${axis.left} ↔ ${axis.right}`
const referenceById = new Map(referenceEntries.map(entry => [entry.id, entry]))
const referenceCounts: Record<ReferenceCategory, number> = referenceEntries.reduce((counts, entry) => {
  counts[entry.category] += 1
  return counts
}, { ideology: 0, 'public-figure': 0, 'historical-figure': 0, country: 0, 'historical-country': 0 })
const questionById = new Map(questions.map(question => [question.id, question]))
const formatPercent = (value: number) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(Math.round(value * 10) / 10)
type ThemePreference = 'system' | 'light' | 'dark'

const plans: { count: QuizVariant; duration: string; caption: string }[] = [
  { count: 36, duration: '5–10 minutos', caption: 'Versão curta' },
  { count: 60, duration: '10–20 minutos', caption: 'Versão padrão' },
  { count: 240, duration: '30–60 minutos', caption: 'Versão completa' },
]

function getThemePreference(): ThemePreference {
  try {
    const saved = localStorage.getItem('12eixos:theme')
    return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system'
  } catch {
    return 'system'
  }
}

function FilmGrain() {
  const textureRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 96
    canvas.height = 96
    const context = canvas.getContext('2d')
    if (!context) return
    const noise = context.createImageData(canvas.width, canvas.height)
    for (let index = 0; index < noise.data.length; index += 4) {
      const shade = Math.random() > 0.5 ? 255 : 0
      noise.data[index] = shade
      noise.data[index + 1] = shade
      noise.data[index + 2] = shade
      noise.data[index + 3] = 255
    }
    context.putImageData(noise, 0, 0)
    if (textureRef.current) textureRef.current.style.backgroundImage = `url("${canvas.toDataURL('image/png')}")`
  }, [])
  return <span className="film-grain" aria-hidden="true" ref={textureRef}/>
}

function resolveTheme(preference: ThemePreference): 'light' | 'dark' {
  if (preference !== 'system') return preference
  if (typeof window === 'undefined') return 'light'
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function AppShell() {
  const location = useLocation()
  const [themePreference, setThemePreference] = useState<ThemePreference>(getThemePreference)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => resolveTheme(getThemePreference()))
  const [compactNavigation, setCompactNavigation] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches)
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false)
  const mobileNavigationRef = useRef<HTMLDialogElement>(null)
  const skipLinkRef = useRef<HTMLAnchorElement>(null)
  const previousLocation = useRef(location.href)
  const allowKeyboardSkipFocus = useRef(false)
  const skipTabAvailable = useRef(true)
  const [skipLinkVisible, setSkipLinkVisible] = useState(false)
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#05131B' : '#F7F6F4')
  }, [theme])
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const update = () => { if (themePreference === 'system') setTheme(media.matches ? 'dark' : 'light') }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [themePreference])
  useEffect(() => {
    const media = matchMedia('(max-width: 760px)')
    const update = () => {
      setCompactNavigation(media.matches)
      if (!media.matches) setMobileNavigationOpen(false)
    }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  useLayoutEffect(() => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => {
      if (reducedMotion.matches) delete document.documentElement.dataset.scrollAnimations
      else document.documentElement.dataset.scrollAnimations = 'true'
    }
    updateMotion()
    reducedMotion.addEventListener('change', updateMotion)
    const elements = [...document.querySelectorAll<HTMLElement>('#main .scroll-reveal')]
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' })
      elements.forEach(element => {
        element.classList.remove('is-visible')
        observer.observe(element)
      })
      return () => {
        observer.disconnect()
        reducedMotion.removeEventListener('change', updateMotion)
      }
    }
    return () => reducedMotion.removeEventListener('change', updateMotion)
  }, [location.href])
  useEffect(() => {
    const sheet = mobileNavigationRef.current
    if (!sheet) return
    if (mobileNavigationOpen && !sheet.open) sheet.showModal()
    if (!mobileNavigationOpen && sheet.open) sheet.close()
  }, [mobileNavigationOpen])
  useLayoutEffect(() => {
    const markKeyboardNavigation = (event: KeyboardEvent) => {
      const activeElement = document.activeElement
      const shouldRevealSkipLink = event.key === 'Tab'
        && !event.shiftKey
        && skipTabAvailable.current
        && (activeElement === document.body || activeElement === document.documentElement)
      allowKeyboardSkipFocus.current = shouldRevealSkipLink
      if (!shouldRevealSkipLink) return
      skipTabAvailable.current = false
      event.preventDefault()
      flushSync(() => setSkipLinkVisible(true))
      skipLinkRef.current?.focus()
    }
    const clearPendingSkipFocus = (event: FocusEvent) => {
      if (event.target !== skipLinkRef.current) {
        allowKeyboardSkipFocus.current = false
        setSkipLinkVisible(false)
      }
    }
    const clearPendingPointerFocus = (event: PointerEvent) => {
      allowKeyboardSkipFocus.current = false
      if (event.target === skipLinkRef.current) return
      if (document.activeElement === skipLinkRef.current) skipLinkRef.current?.blur()
      setSkipLinkVisible(false)
    }
    document.addEventListener('keydown', markKeyboardNavigation, true)
    document.addEventListener('focusin', clearPendingSkipFocus, true)
    document.addEventListener('pointerdown', clearPendingPointerFocus, true)
    return () => {
      document.removeEventListener('keydown', markKeyboardNavigation, true)
      document.removeEventListener('focusin', clearPendingSkipFocus, true)
      document.removeEventListener('pointerdown', clearPendingPointerFocus, true)
    }
  }, [])
  useLayoutEffect(() => {
    if (previousLocation.current === location.href) return
    previousLocation.current = location.href
    allowKeyboardSkipFocus.current = false
    skipTabAvailable.current = true
    setSkipLinkVisible(false)
    if (document.activeElement === skipLinkRef.current) skipLinkRef.current?.blur()
  }, [location.href])
  function chooseTheme(next: ThemePreference) {
    try { localStorage.setItem('12eixos:theme', next) } catch { /* Theme changes remain available without storage. */ }
    setThemePreference(next)
    setTheme(resolveTheme(next))
  }
  const themeLabel = themePreference === 'system' ? 'Sistema' : theme === 'light' ? 'Claro' : 'Escuro'

  return <div className="site-shell">
    <a
      className="skip-link"
      href="#main"
      ref={skipLinkRef}
      tabIndex={skipLinkVisible ? 0 : -1}
      data-visible={skipLinkVisible ? 'true' : 'false'}
      style={{ transform: skipLinkVisible ? 'translateY(0)' : 'translateY(calc(-100% - 12px))', visibility: skipLinkVisible ? 'visible' : 'hidden', opacity: skipLinkVisible ? 1 : 0, pointerEvents: skipLinkVisible ? 'auto' : 'none' }}
      onFocus={event => {
        if (allowKeyboardSkipFocus.current) setSkipLinkVisible(true)
        else event.currentTarget.blur()
        allowKeyboardSkipFocus.current = false
      }}
      onBlur={() => setSkipLinkVisible(false)}
      onClick={event => {
        event.preventDefault()
        const main = document.getElementById('main')
        const target = main?.querySelector<HTMLElement>('.answer-radio:not(:disabled)')
          ?? main?.querySelector<HTMLElement>('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')
        target?.focus({ preventScroll: true })
        target?.scrollIntoView({ block: 'nearest' })
      }}
    >Pular para o conteúdo</a>
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="12eixos, início">12eixos</Link>
      <div className="header-actions">
        {!compactNavigation ? <nav aria-label="Navegação principal" className="desktop-navigation">
          <ActionLink to="/eixos" variant="ghost" size="sm" className="nav-control">Os 12 eixos</ActionLink>
          <Menu.Root modal={false}>
            <Menu.Trigger className="nav-control nav-menu-trigger">
              Detalhes dos eixos <IconChevronDown size={15} aria-hidden="true"/>
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner sideOffset={5} align="center">
                <Menu.Popup className="theme-menu axis-navigation-menu" aria-label="Detalhes dos eixos">
                  {AXES.map(axis => <Menu.Item key={axis.key} className="theme-item" render={<Link to="/eixos/$axis" params={{ axis: axis.key }}/>}>{axisPoleName(axis)}</Menu.Item>)}
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
          <ActionLink to="/metodologia" variant="ghost" size="sm" className="nav-control">Metodologia</ActionLink>
        </nav> : <button type="button" className="theme-trigger" aria-haspopup="dialog" aria-expanded={mobileNavigationOpen} onClick={() => setMobileNavigationOpen(true)}>Explorar <IconChevronDown size={15} aria-hidden="true"/></button>}
        <Menu.Root modal={false}>
        <Menu.Trigger className={controlClassName({ variant: 'outline', color: 'ink', size: 'sm', className: 'theme-trigger' })} aria-label={`Tema: ${themeLabel}. Abrir opções`}>
            {themePreference === 'system' ? <IconDeviceDesktop size={18} aria-hidden="true"/> : theme === 'light' ? <IconSun size={18} aria-hidden="true"/> : <IconMoon size={18} aria-hidden="true"/>}
            <span>{themeLabel}</span><IconChevronDown size={15} aria-hidden="true"/>
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={5}>
              <Menu.Popup className="theme-menu" aria-label="Escolher tema">
                <Menu.Item className="theme-item" data-selected={themePreference === 'system' ? 'true' : undefined} onClick={() => chooseTheme('system')}><IconDeviceDesktop size={18}/> Sistema</Menu.Item>
                <Menu.Item className="theme-item" data-selected={themePreference === 'light' ? 'true' : undefined} onClick={() => chooseTheme('light')}><IconSun size={18}/> Claro</Menu.Item>
                <Menu.Item className="theme-item" data-selected={themePreference === 'dark' ? 'true' : undefined} onClick={() => chooseTheme('dark')}><IconMoon size={18}/> Escuro</Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>
      <dialog
        id="mobile-navigation"
        ref={mobileNavigationRef}
        aria-label="Navegação principal"
        className="mobile-navigation-dialog"
        onCancel={() => setMobileNavigationOpen(false)}
        onClose={() => setMobileNavigationOpen(false)}
        onClick={event => { if (event.target === mobileNavigationRef.current) setMobileNavigationOpen(false) }}
      >
        <div className="mobile-navigation-layout">
          <div className="mobile-navigation-heading"><b>Explorar</b><Button variant="outline" color="ink" size="icon" command="close" commandFor="mobile-navigation" aria-label="Fechar navegação" onClick={event => {
            if (!('commandForElement' in event.currentTarget)) setMobileNavigationOpen(false)
          }}><IconX size={19}/></Button></div>
          <nav aria-label="Navegação principal" className="mobile-navigation-links">
            <ActionLink to="/eixos" onClick={() => setMobileNavigationOpen(false)} variant="ghost" color="ink" className="mobile-navigation-link">Os 12 eixos</ActionLink>
            <details className="mobile-navigation-details"><summary>Detalhes dos eixos <IconChevronDown size={16}/></summary><div className="mobile-axis-links">{AXES.map(axis => <Link key={axis.key} to="/eixos/$axis" params={{ axis: axis.key }} onClick={() => setMobileNavigationOpen(false)}>{axisPoleName(axis)}</Link>)}</div></details>
            <ActionLink to="/metodologia" onClick={() => setMobileNavigationOpen(false)} variant="ghost" color="ink" className="mobile-navigation-link">Metodologia</ActionLink>
          </nav>
        </div>
      </dialog>
    </header>
    <main id="main"><Outlet/></main>
    <footer className="site-footer">
      <Link to="/" className="wordmark" aria-label="12eixos, início">12eixos</Link>
      <span>Um mapa das ideias políticas</span>
      <ActionLink to="/metodologia" variant="ghost" color="accent" size="sm">Metodologia e fontes <IconArrowRight size={16}/></ActionLink>
    </footer>
  </div>
}

function AxisBars({ scores, compact = false }: { scores: AxisScores; compact?: boolean }) {
  return <div className={compact ? 'axis-bars compact' : 'axis-bars'}>
    {AXES.map((axis, index) => {
      const score = scores[axis.key]
      return <div className="axis-bar" key={axis.key} style={{ '--axis-color': axisColors[index] } as CSSProperties}>
        <span className="axis-symbol" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <span className="axis-pole" style={compact ? { overflow: 'visible', textOverflow: 'clip', whiteSpace: 'normal', lineHeight: 1.08 } : undefined}>{axisPoleName(axis)}</span>
        <div className="axis-track" role="img" aria-label={`${axisPoleName(axis)}: ${formatPercent(score)}% ${axis.left}, ${formatPercent(100 - score)}% ${axis.right}`}>
          <span style={{ width: `${score}%` }}/>
          <i style={{ left: `${score}%` }}/>
        </div>
        <strong>{formatPercent(score)}%</strong>
      </div>
    })}
  </div>
}

function RadarProfile({ scores, compact = false }: { scores: AxisScores; compact?: boolean }) {
  const labels = AXES.map((_, index) => String(index + 1).padStart(2, '0'))
  const values = AXES.map(axis => scores[axis.key])
  const theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  const [reducedMotion, setReducedMotion] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])
  const color = theme === 'dark' ? '#BCBDC0' : '#4F5F6B'
  const summary = AXES.map(axis => `${axisPoleName(axis)} ${scores[axis.key]}%`).join(', ')
  return <div className={compact ? 'radar-wrap compact' : 'radar-wrap'} role="img" aria-label={`Gráfico radar com os doze eixos: ${summary}`}>
    <Radar data={{ labels, datasets: [{ data: values, borderColor: '#3B81CC', backgroundColor: 'rgba(59,129,204,.19)', pointBackgroundColor: axisColors, pointBorderColor: axisColors, pointRadius: compact ? 2 : 3, borderWidth: 2 }] }} options={{ responsive: true, maintainAspectRatio: false, animation: reducedMotion ? false : { duration: 350 }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: item => { const axis = AXES[item.dataIndex]; const value = Number(item.raw); return `${axisPoleName(axis)} · ${formatPercent(value)}% ${axis.left} / ${formatPercent(100 - value)}% ${axis.right}` } } } }, scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, pointLabels: { color, font: { size: compact ? 7 : 9, family: 'Georgia, serif' } }, grid: { color: theme === 'dark' ? 'rgba(188,189,192,.2)' : 'rgba(79,95,107,.2)' }, angleLines: { color: theme === 'dark' ? 'rgba(188,189,192,.2)' : 'rgba(79,95,107,.2)' } } } }}/>
  </div>
}

function LandingPreview() {
  const reference = referenceById.get('social-democracy')!
  const profileAxes = AXES.map(axis => ({ axis, score: reference.vec[axis.key] }))
  const strongestAxis = profileAxes.reduce((strongest, current) => Math.abs(current.score - 50) > Math.abs(strongest.score - 50) ? current : strongest)
  const balancedAxis = profileAxes.reduce((balanced, current) => Math.abs(current.score - 50) < Math.abs(balanced.score - 50) ? current : balanced)
  const strongestPole = strongestAxis.score >= 50 ? strongestAxis.axis.left : strongestAxis.axis.right
  return <aside className="landing-preview" aria-label="Perfil exemplo de social-democracia">
    <FilmGrain/>
    <div className="preview-head"><span style={{ color: 'var(--orange)' }}>PERFIL EXEMPLO</span></div>
    <div className="preview-lead"><div><h2>Social-democracia</h2><p>{reference.period}</p></div><b aria-label={`Polo mais marcado: ${strongestPole}, ${formatPercent(Math.max(strongestAxis.score, 100 - strongestAxis.score))}%`}><span>{formatPercent(Math.max(strongestAxis.score, 100 - strongestAxis.score))}%</span><span>{strongestPole}</span></b></div>
    <div className="preview-grid"><div><h3>PERFIL DOCUMENTADO</h3><AxisBars scores={reference.vec} compact/></div><div className="preview-side"><h3>PROXIMIDADE E DIFERENÇA</h3><RadarProfile scores={reference.vec} compact/><p>{reference.rationale}</p><ActionLink to="/metodologia" variant="ghost" color="accent" size="sm">Como os vetores são estimados <IconArrowRight size={16}/></ActionLink></div></div>
    <div className="preview-note" aria-label={`Eixo mais equilibrado: ${axisPoleName(balancedAxis.axis)}, ${formatPercent(balancedAxis.score)}% ${balancedAxis.axis.left} e ${formatPercent(100 - balancedAxis.score)}% ${balancedAxis.axis.right}`}><span>MAIS PRÓXIMO DO CENTRO</span> · <strong>{axisPoleName(balancedAxis.axis)}</strong> · {formatPercent(balancedAxis.score)}% {balancedAxis.axis.left} / {formatPercent(100 - balancedAxis.score)}% {balancedAxis.axis.right}</div>
  </aside>
}

export function LandingPage() {
  const plansWithResume = plans.map(plan => {
    return { ...plan, resumeAt: getResumeQuestion(plan.count) }
  })
  return <>
    <section className="hero">
      <div className="hero-map" aria-hidden="true"/>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>Descubra onde<br/>você se posiciona<br/><em>nos 12 eixos.</em></h1>
          <p className="hero-deck">Um questionário político gratuito que analisa suas opiniões em doze dimensões. Conheça cada posição, compare vetores com fontes abertas e veja também onde eles divergem.</p>
          <div className="plan-row" id="versoes">{plansWithResume.map(plan => <Link key={plan.count} to="/test/$length/$question" params={{ length: String(plan.count), question: String(plan.resumeAt) }} className={`plan-tile plan-${plan.count}`}><strong>{plan.count}</strong><b>perguntas</b><span>{plan.caption}<br/>~ {plan.duration}</span><IconArrowRight size={21}/></Link>)}</div>
        </div>
        <LandingPreview/>
      </div>
    </section>
    <section className="how-section scroll-reveal" id="como-funciona">
      <div className="how-intro"><h2>Um mapa político<br/>mais completo</h2><p>Uma única linha não descreve a variedade das escolhas políticas. O 12eixos mostra doze dimensões, com escalas próprias e interpretações transparentes.</p><ActionLink to="/metodologia" variant="ghost" color="accent" size="sm">CONHEÇA A METODOLOGIA <IconArrowRight size={17}/></ActionLink></div>
      <article className="how-step"><span className="step-number">01</span><IconBook2 className="step-icon"/><h3>Responda às perguntas</h3><p>Escolha entre 36, 60 ou 240 afirmações. O progresso fica salvo neste navegador.</p></article>
      <article className="how-step"><span className="step-number">02</span><IconChartBar className="step-icon"/><h3>Leia os 12 eixos</h3><p>Veja percentuais, polos, explicações e as posições que influenciaram cada escala.</p></article>
      <article className="how-step"><span className="step-number">03</span><IconArrowRight className="step-icon"/><h3>Explore as comparações</h3><p>Compare com ideologias, figuras e países por meio de vetores e fontes descritas.</p></article>
    </section>
    <section className="landing-end scroll-reveal"><div><h2>Mais perspectivas<br/><em>para interpretar.</em></h2><p>Explore a definição de cada eixo, a origem dos itens e as limitações das comparações.</p></div><div className="landing-end-links"><ActionLink to="/eixos" variant="ghost" color="accent" size="sm">Explorar os 12 eixos <IconArrowRight/></ActionLink><ActionLink to="/metodologia" variant="ghost" color="accent" size="sm">Ler a metodologia <IconArrowRight/></ActionLink></div></section>
  </>
}

function getVariant(raw: string): QuizVariant | null {
  return raw === '36' || raw === '60' || raw === '240' ? Number(raw) as QuizVariant : null
}

function getQuizLocation(pathname = window.location.pathname): { variant: QuizVariant | null; question: number } {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === 'test') return { variant: getVariant(segments[1] ?? ''), question: Number(segments[2]) || 1 }
  if (segments[0] === 'quiz') return { variant: getVariant(segments[1] ?? ''), question: 1 }
  return { variant: null, question: 1 }
}

function getQuestionIds(variant: QuizVariant): string[] {
  return variant === 36 ? questionIds36 : variant === 60 ? questionIds60 : questions.map(question => question.id)
}

function getResumeQuestion(variant: QuizVariant): number {
  return getQuizResumeQuestion(variant, getQuestionIds(variant))
}

function getInitialProgress(variant: QuizVariant, questionNumber: number): ReturnType<typeof createQuizProgress> {
  return getQuizProgressForRoute(variant, getQuestionIds(variant), questionNumber)
}

export function QuizPage() {
  const location = useLocation()
  const route = getQuizLocation(location.pathname)
  const variant = route.variant
  const navigate = useNavigate()
  const [progressState, setProgressState] = useState(() => variant ? getInitialProgress(variant, route.question) : null)
  const routeIndex = variant ? Math.max(0, Math.min(route.question, variant) - 1) : 0
  const progress = variant && progressState?.variant === variant ? { ...progressState, index: routeIndex } : null
  const answerListRef = useRef<HTMLFieldSetElement>(null)
  const restoreAnswerFocus = useRef<number | null>(null)
  useLayoutEffect(() => {
    const answerIndex = restoreAnswerFocus.current
    if (answerIndex === null) return
    restoreAnswerFocus.current = null
    answerListRef.current?.querySelectorAll<HTMLInputElement>('input[type="radio"]')[answerIndex]?.focus({ preventScroll: true })
  }, [location.href])
  useEffect(() => {
    if (!variant) return
    if (!progressState || progressState.variant !== variant) {
      setProgressState(getInitialProgress(variant, route.question))
      return
    }
    const requestedIndex = Math.max(0, Math.min(route.question, variant) - 1)
    if (progressState.index !== requestedIndex) {
      const next = { ...progressState, index: requestedIndex, updatedAt: Date.now() }
      setProgressState(next)
      saveQuizProgress(next)
    }
  }, [variant, route.question])
  useEffect(() => {
    if (variant && progressState?.variant === variant) saveQuizProgress(progressState)
  }, [progressState, variant])
  useEffect(() => {
    if (!variant || !progress) return
    function selectAnswerByNumber(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || !/^[1-5]$/.test(event.key)) return
      const target = event.target instanceof HTMLElement ? event.target : null
      if (target?.isContentEditable || target?.closest('input:not([type="radio"]), textarea, select, [contenteditable="true"], [role="textbox"]')) return
      const answerList = answerListRef.current
      if (!answerList) return
      const answerControl = target?.closest('.answer-list')
      const otherControl = target?.closest('button, a, [role="button"]')
      if (otherControl && !answerControl) return
      const answer = answerList.querySelectorAll<HTMLInputElement>('input[type="radio"]')[Number(event.key) - 1]
      if (!answer) return
      event.preventDefault()
      answer.focus()
      answerQuestion(ANSWER_OPTIONS[Number(event.key) - 1].value)
    }
    window.addEventListener('keydown', selectAnswerByNumber)
    return () => window.removeEventListener('keydown', selectAnswerByNumber)
  }, [variant, progress])
  if (!variant) return <section className="route-error"><h1>Versão não encontrada</h1><Link to="/">Voltar ao início</Link></section>
  if (!progress) return <section className="quiz-page" aria-busy="true">Carregando questionário…</section>

  const ids = progress.order
  const selectedQuestions = ids.map(id => questionById.get(id)).filter((question): question is (typeof questions)[number] => Boolean(question))
  const question = selectedQuestions[progress.index]
  if (selectedQuestions.length !== variant || !question) return <section className="route-error"><h1>Perguntas indisponíveis</h1><p>O conjunto desta versão não pôde ser carregado.</p><Link to="/">Voltar ao início</Link></section>

  const answered = ids.filter(id => progress.answers[id] !== undefined).length
  function update(index: number, answers = progress!.answers) {
    const next = { ...progress!, index, answers, updatedAt: Date.now() }
    setProgressState(next)
    saveQuizProgress(next)
    navigate({
      to: '/test/$length/$question',
      params: { length: String(variant!), question: String(index + 1) },
      replace: true,
    })
  }
  function finish(answers: Record<string, AnswerValue>) {
    const completed = completeQuizProgress(progress!, answers)
    if (!completed) return
    setProgressState(completed)
    saveQuizProgress(completed)
    const scores = scoreAnswers(selectedQuestions, answers)
    navigate({ to: '/results', search: () => scores as never, replace: true })
  }
  function answerQuestion(value: AnswerValue) {
    const answers = { ...progress!.answers, [question.id]: value }
    if (progress!.index === variant! - 1) { finish(answers); return }
    const nextQuestion = selectedQuestions[progress!.index + 1]
    const nextAnswer = nextQuestion ? answers[nextQuestion.id] : undefined
    restoreAnswerFocus.current = Math.max(nextAnswer ? ANSWER_OPTIONS.findIndex(option => option.value === nextAnswer) : 0, 0)
    update(progress!.index + 1, answers)
  }
  function goToNextQuestion() {
    const nextQuestion = selectedQuestions[progress!.index + 1]
    const nextAnswer = nextQuestion ? progress!.answers[nextQuestion.id] : undefined
    const optionIndex = nextAnswer ? ANSWER_OPTIONS.findIndex(option => option.value === nextAnswer) : 0
    update(progress!.index + 1)
    requestAnimationFrame(() => answerListRef.current?.querySelectorAll<HTMLInputElement>('input[type="radio"]')[Math.max(optionIndex, 0)]?.focus())
  }
  const axisIndex = AXES.findIndex(axis => axis.id === question.axisId)

  return <section className="quiz-page">
    <div className="quiz-head" style={{ position: 'relative', zIndex: 1 }}><Link to="/" className="back-link"><IconArrowLeft size={17}/> INÍCIO</Link><span>{variant} PERGUNTAS</span></div>
    <div className="quiz-progress" aria-label={`Progresso: pergunta ${progress.index + 1} de ${variant}`} style={{ position: 'relative', zIndex: 1 }}>
      <div className="quiz-progress-meta"><span>PERGUNTA <b>{String(progress.index + 1).padStart(2, '0')}</b> / {variant}</span><span><b>{Math.round(answered / variant * 100)}%</b> RESPONDIDO</span></div>
      <div className="quiz-progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={variant} aria-valuenow={answered} aria-label="Perguntas respondidas"><span style={{ width: `${answered / variant * 100}%` }}/></div>
    </div>
    <div className="quiz-layout" style={{ position: 'relative', zIndex: 1 }}>
      <div className="quiz-question"><p className="eyebrow"><span style={{ '--axis-color': axisColors[axisIndex] } as CSSProperties}/> <b className="quiz-axis-name">{axisPoleName(AXES[axisIndex]).toLocaleUpperCase('pt-BR')}</b></p><h1 id="question-text">{question.text}</h1><p className="question-note">Escolha a resposta que mais se aproxima da sua opinião. Você pode voltar e alterá-la.</p></div>
      <fieldset className="answer-list" ref={answerListRef} aria-describedby="question-text"><legend>Sua resposta</legend>{ANSWER_OPTIONS.map((option, index) => <label key={option.value} className={progress.answers[question.id] === option.value ? 'answer-option selected' : 'answer-option'}><input className="answer-radio" type="radio" name={`resposta-${variant}-${question.id}`} value={option.value} checked={progress.answers[question.id] === option.value} onClick={() => { if (progress.answers[question.id] === option.value) answerQuestion(option.value) }} onChange={() => answerQuestion(option.value)}/><span>{option.label}</span><span className="answer-key" aria-hidden="true">{index + 1}</span><IconArrowRight size={20} aria-hidden="true"/></label>)}</fieldset>
    </div>
    <div className="quiz-footer"><button className="back-question" onClick={() => update(Math.max(progress.index - 1, 0))} disabled={progress.index === 0}><IconArrowLeft size={18}/> Pergunta anterior</button>{progress.index < variant - 1 && progress.answers[question.id] !== undefined && <button className="next-question" onClick={goToNextQuestion}>Pergunta seguinte <IconArrowRight size={18}/></button>}<span className="keyboard-hint">Teclado: 1–5 para responder; Tab, setas e Espaço</span></div>
  </section>
}

const axisDetails: Record<string, string> = {
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

function AxisGuideRow({ axis, index }: { axis: (typeof AXES)[number]; index: number }) {
  const rowRef = useRef<HTMLAnchorElement>(null)
  const trackRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const row = rowRef.current
    const handle = trackRef.current
    if (!row || !handle) return
    const activate = () => row.classList.add('is-interested')
    const deactivate = () => row.classList.remove('is-interested')
    row.setAttribute('interestfor', handle.id)
    const nativeInterest = 'oninterest' in handle && 'onloseinterest' in handle
    if (nativeInterest) {
      handle.addEventListener('interest', activate)
      handle.addEventListener('loseinterest', deactivate)
    } else {
      row.addEventListener('pointerenter', activate)
      row.addEventListener('pointerleave', deactivate)
    }
    row.addEventListener('focusin', activate)
    row.addEventListener('focusout', deactivate)
    return () => {
      row.removeAttribute('interestfor')
      handle.removeEventListener('interest', activate)
      handle.removeEventListener('loseinterest', deactivate)
      row.removeEventListener('pointerenter', activate)
      row.removeEventListener('pointerleave', deactivate)
      row.removeEventListener('focusin', activate)
      row.removeEventListener('focusout', deactivate)
    }
  }, [axis.key])
  const AxisIcon = axisIcons[index]
  const handleId = `axis-handle-${axis.key}`
  return <Link ref={rowRef} className="scroll-reveal axis-guide-row" to="/eixos/$axis" params={{ axis: axis.key }} aria-label={`Abrir eixo ${axisPoleName(axis)}`} style={{ '--axis-color': axisColors[index] } as CSSProperties}>
    <span className="guide-number">{String(index + 1).padStart(2, '0')}</span>
    <span className="guide-copy"><span aria-hidden="true"><AxisIcon size={21} stroke={1.8}/></span><b>{axisPoleName(axis)}</b><span>{axisDetails[axis.key]}</span></span>
    <span ref={trackRef} id={handleId} className="guide-track" role="img" aria-label={`Escala de ${axis.left} a ${axis.right}`}><i/><b/><b/></span>
  </Link>
}

function MatchRows({ matches }: { matches: ReferenceMatch<ReferenceEntry>[] }) {
  const [visibleCount, setVisibleCount] = useState(6)
  return <div className="match-list">{matches.slice(0, visibleCount).map((match, index) => {
    const image = referenceImage(match.reference)
    const isCountry = match.reference.kind === 'country'
    const flagWidth = 'clamp(88px, 10vw, 128px)'
    const flagSize = isCountry ? countryFlagDisplaySize(match.reference.id, flagWidth) : undefined
    const coverage = countDocumentedEvidenceAxes(match.reference)
    return <details key={match.reference.id} className="match-row">
      <summary><span className="match-number">{String(index + 1).padStart(2, '0')}</span><span className="match-name" style={image ? { gridTemplateColumns: `${isCountry ? flagWidth : `${image.width}px`} minmax(0, 1fr)`, gridTemplateRows: 'auto auto auto', columnGap: 10, alignItems: 'center' } : undefined}><ReferenceThumbnail reference={match.reference} className={isCountry ? 'country-flag-intrinsic' : undefined} style={{ gridColumn: 1, gridRow: '1 / span 3', ...flagSize }}/><b>{match.reference.name}</b><small>{match.reference.period}</small><small className="match-evidence">Documentado em {coverage}/12 eixos</small></span><span className="match-score"><strong>{Math.round(match.similarity)}%</strong><small>{formatPercent(match.distance)} pontos do índice</small></span><IconChevronDown size={19} aria-hidden="true"/></summary>
      <div className="match-detail"><p>{match.reference.rationale}</p><p className="evidence-note">Fontes de evidência média ou alta cobrem {coverage} dos 12 eixos. Os demais valores não têm a mesma sustentação documental e não são interpretados como posições neutras. {match.reference.caveats} O índice de distância é 100 menos a similaridade ponderada exibida; não corresponde à soma simples destas diferenças.</p>
        <div className="match-analysis"><div><h3>Menores diferenças</h3>{match.closestAxes.map(item => <p key={item.key}><b>{axisPoleName(AXES.find(axis => axis.key === item.key)!)}</b><span>{item.distance.toFixed(1)} pontos</span></p>)}</div><div><h3>Maiores diferenças</h3>{match.divergentAxes.map(item => <p key={item.key}><b>{axisPoleName(AXES.find(axis => axis.key === item.key)!)}</b><span>{item.distance.toFixed(1)} pontos</span></p>)}</div></div>
        <div className="source-list">{match.reference.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title} <IconExternalLink size={14}/><small>{source.note}</small></a>)}</div>
      </div>
    </details>
  })}
  {visibleCount < matches.length && <button className="more-matches" type="button" onClick={() => setVisibleCount(count => Math.min(matches.length, count + 12))}>Mostrar mais {Math.min(12, matches.length - visibleCount)} ({matches.length - visibleCount} restantes)</button>}
  </div>
}

function UnrankedReferences({ references }: { references: ReferenceEntry[] }) {
  const [query, setQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(12)
  const filtered = references.filter(reference => `${reference.name} ${reference.period}`.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')))
  return <details className="unranked-catalog">
    <summary>Referências sem evidência suficiente para ordenar <span>{references.length}</span><IconChevronDown size={17}/></summary>
    <p>Estas fichas permanecem consultáveis, mas o modelo não apresenta uma proximidade enquanto há menos de seis eixos com fontes de evidência média ou alta. Valores sem fonte não são tratados como neutralidade.</p>
    <label className="catalog-search">Buscar nesta categoria<input type="search" value={query} onChange={event => { setQuery(event.currentTarget.value); setVisibleCount(12) }} placeholder="Nome ou período"/></label>
    <div className="unranked-list">{filtered.slice(0, visibleCount).map(reference => <details className="unranked-row" key={reference.id}>
      <summary><span>{reference.name}</span><small>{reference.period}</small><b>Fontes em {countDocumentedEvidenceAxes(reference)}/12 eixos</b><IconChevronDown size={16}/></summary>
      <div><p>{reference.rationale}</p><p>{reference.caveats}</p><div className="source-list">{reference.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title}<IconExternalLink size={14}/><small>{source.note}</small></a>)}</div></div>
    </details>)}</div>
    {visibleCount < filtered.length && <button className="more-matches" type="button" onClick={() => setVisibleCount(count => Math.min(filtered.length, count + 24))}>Mostrar mais ({filtered.length - visibleCount} restantes)</button>}
    {filtered.length === 0 && <p role="status">Nenhuma referência encontrada.</p>}
  </details>
}

function MatchSection({ category, matches, insufficient }: { category: ReferenceCategory; matches: ReferenceMatch<ReferenceEntry>[]; insufficient: ReferenceEntry[] }) {
  const title = referenceCategoryLabels[category]
  const proximity = category === 'country' || category === 'historical-country' ? 'próximos' : 'próximas'
  return <section className="match-section scroll-reveal">
    <div className="section-heading"><h2>{title} mais {proximity}</h2><p>Índice calculado somente nos eixos documentados de cada referência (mínimo de seis). Coberturas diferentes limitam a comparação entre percentuais. Não é probabilidade, apoio ou concordância pessoal.</p></div>
    {matches.length > 0 ? <MatchRows matches={matches}/> : <p className="match-empty" role="status">Nenhuma referência desta categoria tem cobertura suficiente para um índice ordenado.</p>}
    {insufficient.length > 0 && <UnrankedReferences references={insufficient}/>}
  </section>
}

function CountryMatchSection({ matches }: { matches: ReferenceMatch<ReferenceEntry>[] }) {
  const [scope, setScope] = useState<'current' | 'historical'>('current')
  const isCurrentCountry = (match: ReferenceMatch<ReferenceEntry>) => match.reference.period.startsWith('Instituições e políticas vigentes')
  const current = matches.filter(isCurrentCountry)
  const historical = matches.filter(match => !isCurrentCountry(match))
  const selected = scope === 'current' ? current : historical
  const primary = selected[0]
  const firstDistantIndex = Math.max(1, selected.length - 2)
  const nearer = selected.slice(1, firstDistantIndex)
  const distant = selected.slice(firstDistantIndex).reverse()
  const headingId = 'country-matches-heading'
  const panelId = `country-match-panel-${scope}`

  return <section className="match-section country-match-section scroll-reveal" aria-labelledby={headingId}>
    <div className="section-heading"><h2 id={headingId}>Países mais próximos</h2><p>Compare instituições atuais e experiências históricas documentadas. A proximidade mede vetores institucionais, não opiniões dos habitantes.</p></div>
    <div style={{ minWidth: 0 }}>
      <div role="tablist" aria-label="Período dos perfis de países" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        {([
          ['current', 'País atual'],
          ['historical', 'Experiência histórica'],
        ] as const).map(([value, label]) => <button
          key={value}
          type="button"
          role="tab"
          id={`country-match-tab-${value}`}
          aria-selected={scope === value}
          aria-controls={`country-match-panel-${value}`}
          tabIndex={scope === value ? 0 : -1}
          className="outline-link"
          onClick={() => setScope(value)}
          onKeyDown={event => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
            event.preventDefault()
            const nextScope = event.key === 'Home' ? 'current' : event.key === 'End' ? 'historical' : event.key === 'ArrowRight' ? (value === 'current' ? 'historical' : 'current') : (value === 'historical' ? 'current' : 'historical')
            setScope(nextScope)
            requestAnimationFrame(() => document.getElementById(`country-match-tab-${nextScope}`)?.focus())
          }}
          style={scope === value ? { borderColor: 'var(--orange)', color: 'var(--orange)', background: 'var(--surface-2)' } : undefined}
        >{label}</button>)}
      </div>
      <div role="tabpanel" id={panelId} aria-labelledby={`country-match-tab-${scope}`}>
        {primary ? <article className="top-match top-match-country" style={{ marginBottom: 16, gridTemplateColumns: 'minmax(0, 1fr) auto', border: '1px solid var(--border)', borderTop: '2px solid var(--orange)', background: 'var(--surface)' }}>
          <span>PAÍS MAIS PRÓXIMO · {scope === 'current' ? 'ATUAL' : 'HISTÓRICO'}</span>
          <strong><ReferenceThumbnail reference={primary.reference} className="country-flag-intrinsic" style={countryFlagDisplaySize(primary.reference.id, 'clamp(72px, 8.2vw, 105px)')}/>{primary.reference.name}</strong>
          <b>{formatPercent(primary.similarity)}%</b>
          <small style={{ gridColumn: '1 / -1', color: 'var(--text-secondary)', fontSize: 12 }}>{primary.reference.period}</small>
          <p style={{ gridColumn: '1 / -1', margin: 0, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{primary.reference.rationale}</p>
        </article> : <p role="status">Não há perfis de países neste período.</p>}
        {selected.length > 1 && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24 }}>
          {nearer.length > 0 && <section aria-label="Outros perfis próximos"><h3 style={{ margin: '0 0 12px', font: '600 16px/1.2 var(--display)' }}>Outras experiências próximas</h3><MatchRows matches={nearer}/></section>}
          {distant.length > 0 && <section aria-label="Perfis mais distantes"><h3 style={{ margin: '0 0 12px', font: '600 16px/1.2 var(--display)' }}>Perfis mais distantes</h3><MatchRows matches={distant}/></section>}
        </div>}
      </div>
    </div>
  </section>
}

function ShareCard({ scores, matches }: { scores: AxisScores; matches: ReferenceMatch<ReferenceEntry>[] }) {
  const isBalanced = AXES.every(axis => Math.abs(scores[axis.key] - 50) <= 5)
  const topIdeology = matches.find(item => item.reference.kind === 'ideology')
  const people = matches.filter(item => item.reference.kind === 'person')
  const topPerson = people[0]
  const publicPeople = matches.filter(item => item.reference.category === 'public-figure').slice(0, 3)
  const historicalPeople = matches.filter(item => item.reference.category === 'historical-figure').slice(0, 3)
  const countries = matches.filter(item => item.reference.category === 'country').slice(0, 4)
  const historicalCountries = matches.filter(item => item.reference.category === 'historical-country').slice(0, 4)
  const signatureAxes = AXES.map(axis => ({ axis, score: scores[axis.key], intensity: Math.max(scores[axis.key], 100 - scores[axis.key]) }))
    .sort((first, second) => second.intensity - first.intensity)
    .slice(0, 3)
  return <div className="share-card">
    <div className="share-card-head"><span className="wordmark">12eixos</span><span>SEU RESULTADO · 12 DIMENSÕES</span></div>
    <section className="share-card-hero">
      <div className="share-card-intro"><p className="eyebrow">SEU RESULTADO</p><h2>Um perfil político<br/><em>em doze dimensões.</em></h2><p>{isBalanced ? 'Suas respostas ficaram próximas ao centro nos doze eixos. Isso descreve um vetor equilibrado, não um rótulo político.' : <>Os polos mais marcados nas suas respostas: {signatureAxes.map(({ axis, score, intensity }) => `${axisPoleName(axis)} (${formatPercent(intensity)}% ${score >= 50 ? axis.left : axis.right})`).join(' · ')}.</>}</p></div>
      {isBalanced ? <aside className="share-ideology-feature share-neutral-feature"><p>PERFIL EQUILIBRADO</p><h3>Respostas próximas ao centro</h3><p>As comparações abaixo aproximam vetores documentados; não definem sua identidade política.</p></aside> : topIdeology && <aside className="share-ideology-feature"><p>IDEOLOGIA MAIS PRÓXIMA</p><strong className="share-feature-score">{formatPercent(topIdeology.similarity)}%</strong><h3>{topIdeology.reference.name}</h3><p>{topIdeology.reference.rationale}</p><small>{topIdeology.reference.period}</small><small>Fonte · {topIdeology.reference.sources[0]?.title}</small></aside>}
    </section>
    <div className="share-card-body">
      <section className="share-axes"><h3>SEUS 12 EIXOS</h3><AxisBars scores={scores} compact/></section>
      {topPerson && <section className="share-person-feature"><p className="eyebrow">FIGURA MAIS PRÓXIMA</p><ReferenceThumbnail reference={topPerson.reference} style={{ width: '100%', height: 126, objectFit: 'contain' }}/><div className="share-person-heading"><h3>{topPerson.reference.name}</h3><strong>{formatPercent(topPerson.similarity)}%</strong></div><small>{topPerson.reference.period}</small><p>{topPerson.reference.rationale}</p><small>Comparação documental · {topPerson.reference.sources[0]?.title}</small></section>}
    </div>
    <div className="share-people-groups">
      <section className="share-people-strip"><h3>FIGURAS PÚBLICAS</h3><div className="share-people-grid">{publicPeople.map(item => <article className="share-person-card" key={item.reference.id}><ReferenceThumbnail reference={item.reference} style={{ width: '100%', height: 52, objectFit: 'contain' }}/><div><h4>{item.reference.name}</h4><strong>{formatPercent(item.similarity)}%</strong></div><small>{item.reference.period}</small></article>)}</div></section>
      <section className="share-people-strip"><h3>FIGURAS HISTÓRICAS</h3><div className="share-people-grid">{historicalPeople.map(item => <article className="share-person-card" key={item.reference.id}><ReferenceThumbnail reference={item.reference} style={{ width: '100%', height: 52, objectFit: 'contain' }}/><div><h4>{item.reference.name}</h4><strong>{formatPercent(item.similarity)}%</strong></div><small>{item.reference.period}</small></article>)}</div></section>
    </div>
    <div className="share-card-lower">
      <section className="share-radar"><h3>FORMA DO VETOR</h3><RadarProfile scores={scores} compact/><p>Os eixos têm escalas independentes; o gráfico não reduz o perfil a uma nota única.</p></section>
      <section className="share-country-groups"><div className="share-countries"><h3>PAÍSES ATUAIS</h3>{countries.length === 0 && <p>Sem cobertura suficiente para ordenar.</p>}{countries.map(item => <p key={item.reference.id}><span><ReferenceThumbnail reference={item.reference}/><span><b>{item.reference.name}</b><small>{item.reference.period}</small></span></span><strong>{formatPercent(item.similarity)}%</strong></p>)}</div><div className="share-countries"><h3>PAÍSES HISTÓRICOS</h3>{historicalCountries.length === 0 && <p>Sem cobertura suficiente para ordenar.</p>}{historicalCountries.map(item => <p key={item.reference.id}><span><ReferenceThumbnail reference={item.reference}/><span><b>{item.reference.name}</b><small>{item.reference.period}</small></span></span><strong>{formatPercent(item.similarity)}%</strong></p>)}</div></section>
      <aside className="share-callout"><h3>Proximidade não é endosso.</h3><p>Os vetores resumem fontes e períodos específicos. Países representam instituições e políticas, não opiniões de seus habitantes.</p></aside>
    </div>
  </div>
}

export function ResultsPage() {
  const location = useLocation()
  const scores = parseResultSearch(location.searchStr)
  const [copied, setCopied] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [exportFailed, setExportFailed] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  if (!scores) return <section className="route-error"><p className="eyebrow">RESULTADO</p><h1>Link de resultado incompleto</h1><p>A URL precisa conter os doze scores válidos, de 0 a 100. Faça um teste para gerar seu mapa.</p><Link to="/" className="solid-link">Escolher um teste <IconArrowRight/></Link></section>

  const matches = matchReferences(scores, referenceEntries)
  const allReferenceMatches = partitionMatchReferences(referenceEntries)
  const categoryMatches = (category: ReferenceCategory) => matches.filter(item => item.reference.category === category)
  const insufficientByCategory = (category: ReferenceCategory) => allReferenceMatches.insufficientEvidence.filter(reference => reference.category === category)
  const ideology = matches.find(item => item.reference.category === 'ideology')
  const person = matches.find(item => item.reference.kind === 'person')
  const country = matches.find(item => item.reference.kind === 'country')
  const isBalanced = AXES.every(axis => Math.abs(scores[axis.key] - 50) <= 5)
  async function exportImage() {
    if (!cardRef.current) return
    setExporting(true)
    setExportFailed(false)
    try {
      await downloadShareImage(cardRef.current, document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
    } catch {
      setExportFailed(true)
    } finally { setExporting(false) }
  }
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.prompt('Copie o link do resultado:', location.href)
    }
  }

  return <div className="results-page">
    <section className="results-intro">
      <div className="results-headline" style={{ position: 'relative', zIndex: 1 }}>
        <div className="results-copy"><h1>Seu mapa<br/><em>em 12 dimensões.</em></h1><p>As pontuações descrevem suas respostas neste conjunto de perguntas. Compare as posições e as divergências antes de interpretar as aproximações.</p>
          <div className="results-actions results-actions-inline">
            <Button variant="solid" size="lg" onClick={copyLink}>{copied ? <IconCheck/> : <IconCopy/>}{copied ? 'Link copiado' : 'Copiar link'}</Button>
            <Button variant="solid" size="lg" onClick={exportImage} disabled={exporting}><IconDownload/>{exporting ? 'Gerando imagem…' : exportFailed ? 'Falha ao gerar imagem' : 'Baixar imagem'}</Button>
            <ActionLink to="/" variant="ghost" size="lg" className="retest-link"><IconArrowRight/> Fazer outro teste</ActionLink>
          </div>
          <span className="visually-hidden" aria-live="polite">{exportFailed ? 'Não foi possível gerar a imagem. Tente novamente.' : ''}</span>
        </div>
        {isBalanced ? <aside className="balanced-result" role="status"><h2>Suas respostas ficaram próximas do centro.</h2><p>O vetor está equilibrado nos doze eixos; ele não indica uma identidade política. As comparações abaixo mostram proximidade documental e continuam disponíveis para consulta.</p></aside> : <div className="top-matches" role="group" aria-label="Suas posições de referência mais próximas">
          {ideology ? <div className="top-match top-match-ideology"><span>IDEOLOGIA MAIS PRÓXIMA</span><strong>{ideology.reference.name}</strong><b>{Math.round(ideology.similarity)}%</b></div> : <p className="top-match-empty" role="status">Sem cobertura documental suficiente para ordenar ideologias.</p>}
          {person ? <div className="top-match top-match-person"><span>FIGURA {person.reference.category === 'public-figure' ? 'PÚBLICA' : 'HISTÓRICA'} MAIS PRÓXIMA</span><strong><ReferenceThumbnail reference={person.reference}/>{person.reference.name}</strong><b>{Math.round(person.similarity)}%</b></div> : <p className="top-match-empty" role="status">Sem cobertura documental suficiente para ordenar figuras.</p>}
          {country ? <div className="top-match top-match-country"><span>{country.reference.category === 'country' ? 'PAÍS ATUAL' : 'PAÍS HISTÓRICO'} MAIS PRÓXIMO</span><strong><ReferenceThumbnail reference={country.reference} className="country-flag-intrinsic" style={countryFlagDisplaySize(country.reference.id, 'clamp(72px, 8.2vw, 105px)')}/>{country.reference.name}</strong><b>{Math.round(country.similarity)}%</b></div> : <p className="top-match-empty" role="status">Sem cobertura documental suficiente para ordenar países.</p>}
        </div>}
      </div>
    </section>
    <section className="results-map scroll-reveal"><div className="section-heading"><h2>Suas posições nos 12 eixos</h2><p>100 representa o polo à esquerda de cada par; 0 representa o polo à direita. Os resultados mostram direção e intensidade, sem resumir sua identidade.</p></div>
      <div className="results-map-grid"><div className="results-axis-list">{AXES.map((axis, index) => {
        const score = scores[axis.key]
        const pole = score >= 50 ? axis.left : axis.right
        const strength = Math.round(Math.max(score, 100 - score))
        return <article className="result-axis" key={axis.key} style={{ '--axis-color': axisColors[index] } as CSSProperties}>
          <div className="result-axis-title"><span>{String(index + 1).padStart(2, '0')}</span><h3>{axisPoleName(axis)}</h3><strong>{score}%</strong></div>
          <div className="result-axis-track" role="img" aria-label={`${formatPercent(score)}% ${axis.left}, ${formatPercent(100 - score)}% ${axis.right}`}><span style={{ width: `${score}%` }}/><i style={{ left: `${score}%` }}/></div>
          <div className="result-axis-poles"><span>{axis.left}</span><span>{axis.right}</span></div>
          <p><b>{axisIntensity(score)} para {pole.toLowerCase()} ({formatPercent(strength)}%).</b> {axisDetails[axis.key]} <Link to="/eixos/$axis" params={{ axis: axis.key }} className={controlClassName({ variant: 'ghost', color: 'accent', size: 'sm' })}>Entenda este eixo <IconArrowRight size={14}/></Link></p>
        </article>
      })}</div><aside className="results-radar"><h3>MAPA DOS DOZE VALORES</h3><RadarProfile scores={scores}/><p>Cada ponto preserva o percentual na direção do primeiro polo listado; o gráfico não transforma os eixos numa única escala.</p><div className="results-radar-note"><h4>Relação entre eixos</h4><p>O cálculo pontua cada eixo de forma independente e não presume que uma posição cause outra. As perguntas podem tratar de temas relacionados; leia os resultados em conjunto sem inferir causalidade a partir do gráfico.</p></div></aside></div>
    </section>
    {referenceCategories.map(({ id: category }) => <MatchSection key={category} category={category} matches={categoryMatches(category)} insufficient={insufficientByCategory(category)}/>)}
    <Callout className="method-callout results-callout scroll-reveal"><h2>Proximidade não é endosso.</h2><div><p>Os perfis de referência são estimativas datadas, com graus diferentes de evidência por eixo. Um percentual alto significa menor distância entre dois vetores neste modelo; não representa probabilidade, recomendação eleitoral ou concordância em todas as questões.</p><ActionLink to="/metodologia" variant="ghost" color="accent" size="sm" className="text-link">LEIA A METODOLOGIA COMPLETA <IconArrowRight/></ActionLink></div></Callout>
    <div className="share-capture-source" data-share-card-capture="true" aria-hidden="true" ref={cardRef}><ShareCard scores={scores} matches={matches}/></div>
  </div>
}

function AxisReferenceValues({ axisKey }: { axisKey: (typeof AXES)[number]['key'] }) {
  const axis = AXES.find(item => item.key === axisKey)!
  const documented = referenceEntries.filter(entry => documentedEvidenceAxes(entry).includes(axisKey))
  const documentedIds = new Set(documented.map(entry => entry.id))
  const groups = {
    left: documented.filter(entry => entry.vec[axisKey] >= 60).sort((a, b) => b.vec[axisKey] - a.vec[axisKey]),
    center: documented.filter(entry => entry.vec[axisKey] > 40 && entry.vec[axisKey] < 60).sort((a, b) => Math.abs(a.vec[axisKey] - 50) - Math.abs(b.vec[axisKey] - 50)),
    right: documented.filter(entry => entry.vec[axisKey] <= 40).sort((a, b) => a.vec[axisKey] - b.vec[axisKey]),
    unknown: referenceEntries.filter(entry => !documentedIds.has(entry.id)),
  }
  return <section className="axis-reference-values scroll-reveal"><div className="section-heading"><h2>Exemplos neste eixo</h2><p>Valores documentados para este eixo. Cada comparação exibe as fontes e o período usados; entradas sem evidência suficiente ficam separadas e não são tratadas como neutras.</p></div>
    <div className="reference-value-groups">{referenceCategories.map(({ id: category }) => {
      const categoryGroups = Object.fromEntries(Object.entries(groups).map(([key, values]) => [key, values.filter(entry => entry.category === category)])) as typeof groups
      const total = Object.values(categoryGroups).reduce((count, values) => count + values.length, 0)
      if (!total) return null
      return <details className="axis-reference-category" key={category} open={category === 'ideology'}>
        <summary><span>{referenceCategoryLabels[category]}</span><b>{total}</b><IconChevronDown size={18}/></summary>
        <div className="axis-reference-buckets">
          <ReferenceValueBucket title={`${axis.left} · 60–100`} references={categoryGroups.left} axisKey={axisKey} axis={axis}/>
          <ReferenceValueBucket title={`Centro · 41–59`} references={categoryGroups.center} axisKey={axisKey} axis={axis}/>
          <ReferenceValueBucket title={`${axis.right} · 0–40`} references={categoryGroups.right} axisKey={axisKey} axis={axis}/>
        </div>
        {categoryGroups.unknown.length > 0 && <UnknownAxisValues references={categoryGroups.unknown} axisKey={axisKey} axis={axis}/>}
      </details>
    })}</div>
  </section>
}

function ReferenceValueRows({ references, axisKey, axis, unestimated = false }: { references: ReferenceEntry[]; axisKey: (typeof AXES)[number]['key']; axis: (typeof AXES)[number]; unestimated?: boolean }) {
  return <div className="reference-value-list">{references.map(entry => {
    const value = entry.vec[axisKey]
    const position = unestimated ? null : value
    return <article className="reference-value" key={entry.id}>
      <div><ReferenceThumbnail reference={entry} style={entry.kind === 'person' ? { width: 42, height: 54, objectFit: 'cover' } : countryFlagDisplaySize(entry.id, '52px')}/><span><b>{entry.name}</b><small>{entry.period}</small></span></div>
      <strong>{position === null ? '—' : `${value}%`}<small>{position === null ? 'Não estimado' : `${countDocumentedEvidenceAxes(entry)}/12 eixos`}</small></strong>
      <div className="reference-value-track">{position !== null && <span style={{ width: `${value}%` }}/>}</div>
    </article>
  })}</div>
}

function ReferenceValueBucket({ title, references, axisKey, axis }: { title: string; references: ReferenceEntry[]; axisKey: (typeof AXES)[number]['key']; axis: (typeof AXES)[number] }) {
  const [visibleCount, setVisibleCount] = useState(5)
  return <details className="reference-value-bucket">
    <summary>{title}<span>{references.length}</span><IconChevronDown size={15}/></summary>
    <ReferenceValueRows references={references.slice(0, visibleCount)} axisKey={axisKey} axis={axis}/>
    {visibleCount < references.length && <button className="more-matches" type="button" onClick={() => setVisibleCount(count => Math.min(references.length, count + 12))}>Mostrar mais ({references.length - visibleCount} restantes)</button>}
    {!references.length && <p>Sem perfis com evidência suficiente neste intervalo.</p>}
  </details>
}

function UnknownAxisValues({ references, axisKey, axis }: { references: ReferenceEntry[]; axisKey: (typeof AXES)[number]['key']; axis: (typeof AXES)[number] }) {
  const [visibleCount, setVisibleCount] = useState(6)
  return <details className="unknown-axis-values">
    <summary>Sem evidência suficiente para este eixo <span>{references.length}</span><IconChevronDown size={15}/></summary>
    <p>Estes perfis permanecem disponíveis, mas este eixo não tem cobertura documental média ou alta para eles.</p>
    <ReferenceValueRows references={references.slice(0, visibleCount)} axisKey={axisKey} axis={axis} unestimated/>
    {visibleCount < references.length && <button className="more-matches" type="button" onClick={() => setVisibleCount(count => Math.min(references.length, count + 12))}>Mostrar mais ({references.length - visibleCount} restantes)</button>}
  </details>
}

function AxisDetail({ axisKey }: { axisKey: (typeof AXES)[number]['key'] }) {
  const index = AXES.findIndex(axis => axis.key === axisKey)
  const axis = AXES[index]
  const examples = questions.filter(question => question.axisId === axis.id).slice(0, 3)
  return <div className="editorial-page axis-detail-page" style={{ '--axis-color': axisColors[index] } as CSSProperties}>
    <div className="axis-detail-hero"><h1>{axis.left} <em>↔ {axis.right}</em></h1><p>{axisDetails[axis.key]} A escala vai de <b>{axis.left}</b> (100) a <b>{axis.right}</b> (0), com 50 no centro.</p></div>
    <section className="axis-spectrum scroll-reveal"><div className="axis-spectrum-head"><h2>ESPECTRO</h2><span>100 ← posição → 0</span></div><div className="spectrum-ends"><div><b>{axis.left}</b><p>{axisDetails[axis.key]}</p></div><div className="spectrum-track"><span/><i/><b>50</b></div><div><b>{axis.right}</b><p>Uma posição mais próxima deste polo reflete maior adesão às políticas e argumentos associados a ele.</p></div></div></section>
    <div className="axis-interpretations"><article><p className="eyebrow">PRIMEIRO POLO · 100</p><h2>O que significa uma posição mais alta?</h2><p>Uma pontuação maior indica mais respostas direcionadas a <b>{axis.left}</b>. O índice resume as afirmações respondidas; ele não descreve todas as razões ou circunstâncias de uma escolha.</p></article><article><p className="eyebrow">SEGUNDO POLO · 0</p><h2>O que significa uma posição mais baixa?</h2><p>Uma pontuação menor indica mais respostas direcionadas a <b>{axis.right}</b>. A posição central significa equilíbrio nas respostas ou falta de evidência suficiente, não necessariamente indecisão.</p></article></div>
    <div className="axis-detail-grid scroll-reveal"><section className="axis-question-examples"><h2>Que afirmações compõem este eixo?</h2><p>Estas perguntas são exemplos do conjunto integral. Versões curtas usam subconjuntos selecionados do mesmo catálogo.</p><ol>{examples.map(item => <li key={item.id}><blockquote>“{item.text}”</blockquote><span>{item.agreePole === 'LEFT' ? `Concordar favorece ${axis.left}` : `Concordar favorece ${axis.right}`}</span></li>)}</ol></section><section className="axis-relation-note"><h2>Relação com outros eixos</h2><p>O modelo pontua cada dimensão de forma independente. Temas podem se aproximar no debate público, mas este projeto não estima correlações nem relações causais entre os eixos.</p><p>Para um resultado individual, consulte o perfil completo: ele mostra todos os doze percentuais, sem ocultar dimensões relacionadas.</p><ActionLink to="/metodologia" variant="ghost" color="accent" size="sm">MÉTODO DE CÁLCULO <IconArrowRight size={16}/></ActionLink></section></div>
    <AxisReferenceValues axisKey={axis.key}/>
    <div className="editorial-end"><Link to="/eixos" className="outline-link"><IconArrowLeft size={17}/> Voltar aos 12 eixos</Link><Link to="/test/$length/$question" params={{ length: '60', question: String(getResumeQuestion(60)) }} className="solid-link">Iniciar versão padrão <IconArrowRight/></Link></div>
  </div>
}

export function AxesPage() {
  const location = useLocation()
  const axisKey = new URLSearchParams(location.search).get('axis') ?? location.pathname.split('/').filter(Boolean)[1]
  const selectedAxis = AXES.find(axis => axis.key === axisKey)
  if (selectedAxis) return <AxisDetail axisKey={selectedAxis.key}/>
  return <div className="editorial-page axes-page">
    <div className="editorial-hero axes-page-hero">
      <div className="axes-hero-copy"><h1>Um mapa completo<br/>das suas posições<br/><em>políticas.</em></h1><p>O 12eixos mapeia suas opiniões em 12 eixos independentes, que cobrem os principais debates da sociedade contemporânea. Você responde a um questionário e recebe um perfil detalhado com seu posicionamento em cada eixo, comparações e explicações baseadas em dados.</p></div>
      <aside className="axes-hero-note" aria-label="Uma visão em doze dimensões"><p className="eyebrow">12 DIMENSÕES,<br/>UMA VISÃO MAIS COMPLETA</p><p>A política é complexa. Em vez de reduzir tudo a um único rótulo, o 12eixos analisa sua posição em doze dimensões independentes, revelando um perfil mais preciso, nuançado e alinhado com a realidade do mundo.</p></aside>
    </div>
    <section className="axes-intro scroll-reveal"><h2>Doze dimensões para entender sua visão de mundo.</h2></section>
    <div className="axis-guide">{AXES.map((axis, index) => <AxisGuideRow key={axis.key} axis={axis} index={index}/>)}</div>
    <Callout className="method-callout axis-callout scroll-reveal">
      <div><h2>Uma análise que vai<br/><em>além dos rótulos.</em></h2><p>O 12eixos não te coloca em uma caixa. Em vez de um único espectro, você é posicionado em 12 eixos independentes, com resultados detalhados, comparações com outras pessoas e explicações claras sobre o que suas posições indicam.</p></div>
      <div className="axis-callout-points">
        <div className="axis-callout-item"><IconChartBar size={28} aria-hidden="true"/><div><b>Baseado em evidências</b><p>Questões fundamentadas em pesquisas e estudos acadêmicos.</p></div></div>
        <div className="axis-callout-item"><IconWorld size={28} aria-hidden="true"/><div><b>Contexto global</b><p>Compare suas posições com pessoas do Brasil e de outros países.</p></div></div>
        <div className="axis-callout-item"><IconBook2 size={28} aria-hidden="true"/><div><b>Explicações claras</b><p>Entenda o que cada resultado significa, com dados e contexto.</p></div></div>
      </div>
    </Callout>
  </div>
}

const methodologySections = [
  { number: '01', title: 'Origem das 240 afirmações', text: 'O conjunto foi recuperado do pool público do 12 Axes original. Cada item conserva texto original, redação neutralizada, eixo, direção de concordância e peso, para que uma mudança editorial possa ser auditada.' },
  { number: '02', title: 'Neutralização', text: 'Foram reformuladas 171 afirmações para reduzir linguagem carregada, acusatória ou tendenciosa sem mudar o construto e sua direção. Os outros 69 textos foram mantidos após revisão. Isso é uma decisão editorial, não uma validação psicométrica.' },
  { number: '03', title: 'Construção dos subconjuntos', text: 'A versão 36 seleciona três itens por eixo; a versão 60 seleciona cinco por eixo e inclui os 36. Ambas representam os polos e limitam repetição temática. A versão 240 usa o catálogo completo. A ordem é sorteada ao iniciar e guardada com o progresso, para manter as mesmas perguntas após uma pausa. Versões curtas têm maior incerteza, apesar de usarem a mesma escala.' },
  { number: '04', title: 'Pesos e direção', text: 'Cada item traz seu eixo, peso e o polo favorecido pela concordância. Os pesos recuperados são 1. As cinco respostas recebem valores 1, 0,75, 0,5, 0,25 e 0; discordar inverte a contribuição em relação ao polo favorecido.' },
  { number: '05', title: 'Cálculo e normalização', text: 'Em cada eixo, calculamos a média ponderada das respostas na direção do primeiro polo e multiplicamos por 100. O intervalo vai de 0 a 100; 100 aponta ao primeiro polo, 0 ao segundo e 50 ao centro. O resultado é arredondado a uma casa decimal.' },
  { number: '06', title: 'Similaridade descritiva', text: 'Uma referência só entra na ordenação com pelo menos seis eixos documentados: evidência média ou alta, justificativa específica e fonte citada que corresponda exatamente a uma fonte da ficha. Todos os quatro componentes usam somente esses eixos: 42% de proximidade eixo a eixo, com penalidade para posições fortes em lados opostos; 33% de direção do vetor documentado; 18% de semelhança na intensidade média; e 7% de penalidade pela maior diferença. Eixos desconhecidos ficam fora do cálculo; 50 não comprova neutralidade. Percentuais baseados em conjuntos diferentes de eixos não são plenamente comparáveis. A porcentagem não é uma probabilidade nem a fração de opiniões iguais.' },
  { number: '07', title: 'Vetores de referência', text: 'Ideologias usam declarações de organizações; figuras usam obras, discursos ou propostas; países usam instituições e políticas de períodos indicados. Pontuações são estimativas editoriais, não pesquisas aplicadas às entidades. Cada ficha mostra suas fontes, razões, ressalvas e evidência por eixo.' },
  { number: '08', title: 'Privacidade e reprodução', text: 'Respostas e progresso permanecem no armazenamento local. O scoring, as comparações e a imagem rodam no cliente. A URL contém os doze scores, reconstrói o resultado em qualquer navegador e não revela as respostas individuais.' },
  { number: '09', title: 'Limites', text: 'Perguntas simplificam debates, vetores representam famílias heterogêneas e políticas mudam com o tempo. Fontes sustentam direções gerais, não cada ponto exato. Uma proximidade não é recomendação, validação de identidade nem substituto para examinar divergências.' },
]

export function MethodPage() {
  return <div className="editorial-page method-page">
    <div className="editorial-hero method-hero scroll-reveal"><h1>Como o 12eixos<br/>chega aos <em>resultados.</em></h1><p>Do banco de afirmações ao mapa final, mostramos os dados usados, as regras de cálculo e as limitações das comparações.</p></div>
    <div className="method-flow">{methodologySections.map(section => <article className="scroll-reveal" key={section.number}><span>{section.number}</span><div><h2>{section.title}</h2><p>{section.text}</p></div></article>)}</div>
    <Callout className="method-data method-callout scroll-reveal"><div><h2>Seleção das afirmações</h2><p>As versões curta e padrão usam três e cinco itens por eixo, respectivamente, escolhidos para cobrir os dois polos e limitar repetição temática. A versão completa usa as 240 afirmações. A seleção documenta o equilíbrio entre direções e a redundância dos temas.</p></div><div><h2>Perfis de referência</h2><p>A base reúne {referenceCounts.ideology} ideologias, {referenceCounts['public-figure']} figuras públicas, {referenceCounts['historical-figure']} figuras históricas, {referenceCounts.country} países atuais e {referenceCounts['historical-country']} países e governos históricos. Cada vetor se refere a documentos e períodos definidos, com graus de evidência, fontes e limitações descritos por entrada.</p></div></Callout>
    <section className="method-end scroll-reveal"><h2>Leia os dados por eixo<br/>ou trace seu próprio perfil.</h2><div><Link to="/eixos" className="outline-link">Conhecer os 12 eixos <IconArrowRight/></Link><Link to="/test/$length/$question" params={{ length: '60', question: String(getResumeQuestion(60)) }} className="solid-link">Começar questionário <IconArrowRight/></Link></div></section>
  </div>
}
