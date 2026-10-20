import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { stats, type Stat } from '../data/profile'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

const format = (n: number) => n.toLocaleString('en-US')

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || !inView) return
    if (reduce) {
      node.textContent = format(to)
      return
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return <span ref={ref}>0</span>
}

function StatValue({ stat }: { stat: Stat }) {
  const { t } = useLang()
  return (
    <p className="stat-value">
      {stat.prefix}
      {stat.to !== undefined ? <CountUp to={stat.to} /> : stat.text && t(stat.text)}
      {stat.suffix && t(stat.suffix)}
    </p>
  )
}

export function Stats() {
  const { t } = useLang()
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <Reveal className="stat-card" key={i} delay={i * 0.08}>
          <StatValue stat={stat} />
          <p className="stat-label">{t(stat.label)}</p>
        </Reveal>
      ))}
    </div>
  )
}
