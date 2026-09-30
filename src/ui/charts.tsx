import { useEffect, useState } from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { AXES, type AxisScores } from '../lib/scoring'
import { AXIS_COLORS, axisPoleName, formatPercent } from './view-model'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

export function RadarProfile({ scores, compact = false }: { scores: AxisScores; compact?: boolean }) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  const [reducedMotion, setReducedMotion] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light'))
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => { observer.disconnect(); preference.removeEventListener('change', updatePreference) }
  }, [])
  const labels = AXES.map((_, index) => String(index + 1).padStart(2, '0'))
  const values = AXES.map(axis => scores[axis.key])
  const color = theme === 'dark' ? '#BCBDC0' : '#4F5F6B'
  const summary = AXES.map(axis => `${axisPoleName(axis)} ${scores[axis.key]}%`).join(', ')
  return <div className={compact ? 'radar-wrap compact' : 'radar-wrap'} role="img" aria-label={`Gráfico radar com os doze eixos: ${summary}`}>
    <Radar data={{ labels, datasets: [{ data: values, borderColor: '#3B81CC', backgroundColor: 'rgba(59,129,204,.19)', pointBackgroundColor: AXIS_COLORS, pointBorderColor: AXIS_COLORS, pointRadius: compact ? 2 : 3, borderWidth: 2 }] }} options={{ responsive: true, maintainAspectRatio: false, animation: reducedMotion ? false : { duration: 350 }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: item => { const axis = AXES[item.dataIndex]; const value = Number(item.raw); return `${axisPoleName(axis)} · ${formatPercent(value)}% ${axis.left} / ${formatPercent(100 - value)}% ${axis.right}` } } } }, scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, pointLabels: { color, font: { size: compact ? 7 : 9, family: 'Georgia, serif' } }, grid: { color: theme === 'dark' ? 'rgba(188,189,192,.2)' : 'rgba(79,95,107,.2)' }, angleLines: { color: theme === 'dark' ? 'rgba(188,189,192,.2)' : 'rgba(79,95,107,.2)' } } } }}/>
  </div>
}
