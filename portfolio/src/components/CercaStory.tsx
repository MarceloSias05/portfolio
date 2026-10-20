import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { cerca } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { ProjectVideo } from './ProjectVideo'
import { Reveal } from './Reveal'

const steps = cerca.steps

/**
 * Product-page storytelling: the phone stays pinned while the copy scrolls past,
 * and each step swaps the screen it shows.
 */
export function CercaStory() {
  const { t } = useLang()
  const storyRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start center', 'end center'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)))
    setActive(next)
  })

  return (
    <section id="cerca" className="cerca tone-dark">
      <div className="container">
        <Reveal className="cerca-intro">
          <p className="eyebrow eyebrow-accent">{t(ui.cerca.eyebrow)}</p>
          <h2 className="cerca-title">Cerca.</h2>
          <p className="cerca-tagline">{t(cerca.tagline)}</p>
          <p className="cerca-body">{t(cerca.intro)}</p>
          <dl className="cerca-meta">
            <div>
              <dt>{t(ui.cerca.role)}</dt>
              <dd>{t(cerca.role)}</dd>
            </div>
            <div>
              <dt>{t(ui.cerca.program)}</dt>
              <dd>
                <a className="inline-link" href={cerca.programLink} target="_blank" rel="noreferrer">
                  {t(cerca.program)}
                </a>
              </dd>
            </div>
            <div>
              <dt>{t(ui.cerca.dates)}</dt>
              <dd>{t(cerca.dates)}</dd>
            </div>
          </dl>
          <a className="btn btn-link btn-link-dark" href={cerca.profileLink} target="_blank" rel="noreferrer">
            {t(ui.cerca.profile)} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <div className="cerca-story" ref={storyRef}>
          <div className="cerca-phone-col" aria-hidden="true">
            <div className="cerca-phone-sticky">
              <div className="phone">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={active}
                    src={steps[active].image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                  />
                </AnimatePresence>
              </div>
              <div className="phone-dots">
                {steps.map((s, i) => (
                  <span key={s.image} className={i === active ? 'is-active' : undefined} />
                ))}
              </div>
              <p className="cerca-note">{t(ui.cerca.mvpNote)}</p>
            </div>
          </div>

          <ol className="cerca-steps">
            {steps.map((step, i) => (
              <li key={step.image} className={i === active ? 'is-active' : undefined}>
                <img className="step-shot" src={step.image} alt={t(step.alt)} loading="lazy" />
                <span className="step-num">0{i + 1}</span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.body)}</p>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="cerca-pitch">
          <h3>{t(ui.cerca.pitchTitle)}</h3>
          <ProjectVideo id={cerca.pitch.id} label={t(cerca.pitch.label)} poster={cerca.pitch.poster} />
        </Reveal>
      </div>
    </section>
  )
}
