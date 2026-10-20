import { motion } from 'motion/react'
import { projects, type ProjectEntry } from '../data/profile'
import { useLang } from '../i18n'
import { ProjectVideo } from './ProjectVideo'
import { Reveal } from './Reveal'

// Six PQRST beats across a 1200×200 strip.
const ECG_PATH = Array.from({ length: 6 }, (_, i) => {
  const w = 200
  const x = (f: number) => (i * w + f * w).toFixed(1)
  return (
    `L${x(0.28)} 100 Q${x(0.34)} 82 ${x(0.4)} 100 L${x(0.47)} 100 ` +
    `L${x(0.5)} 114 L${x(0.54)} 24 L${x(0.58)} 168 L${x(0.62)} 100 ` +
    `L${x(0.72)} 100 Q${x(0.81)} 70 ${x(0.9)} 100 L${x(1)} 100`
  )
}).reduce((d, beat) => `${d} ${beat}`, 'M0 100')

function EcgArt() {
  return (
    <div className="project-art art-ecg" aria-hidden="true">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
        <motion.path
          d={ECG_PATH}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
      <span className="art-label">CorAI · 120 Hz</span>
    </div>
  )
}

function ProjectMedia({ p }: { p: ProjectEntry }) {
  const { t } = useLang()
  if (p.video) {
    return <ProjectVideo id={p.video.id} label={t(p.video.label)} poster={p.video.poster} />
  }
  if (p.art === 'ecg') return <EcgArt />
  if (p.image) {
    return (
      <div className={`project-shot shot-${p.image.fit}`}>
        <img src={p.image.src} alt={t(p.image.alt)} loading="lazy" />
      </div>
    )
  }
  return null
}

export function Projects() {
  const { t } = useLang()
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        // The reveal owns the entrance transform, so the hover lift lives on the inner card.
        <Reveal className={['project-cell', p.wide && 'wide'].filter(Boolean).join(' ')} key={p.name}>
          <article className={['project-card', p.wide && 'wide'].filter(Boolean).join(' ')}>
            <ProjectMedia p={p} />
            <div className="project-body">
              <p className="project-context">
                {t(p.context)} · {t(p.dates)}
              </p>
              <h3 className="project-name">{p.name}</h3>
              {p.role && <p className="project-role">{t(p.role)}</p>}
              {p.award && <span className="award">{t(p.award)}</span>}
              <p className="project-tagline">{t(p.tagline)}</p>
              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h.en}>{t(h)}</li>
                ))}
              </ul>
              <div className="chip-row">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              {p.link && (
                <a className="btn btn-link" href={p.link.href} target="_blank" rel="noreferrer">
                  {t(p.link.label)} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
