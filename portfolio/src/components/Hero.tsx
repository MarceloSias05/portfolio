import { Fragment, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

const rise = { type: 'spring', bounce: 0, duration: 1.1 } as const

export function Hero() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // The hero recedes as the page scrolls over it, like a product page handing off.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const words = t(ui.hero.headline).split(' ')

  return (
    <header ref={ref} className="hero tone-light" id="top">
      <motion.div className="hero-inner container" style={{ scale, opacity }}>
        <motion.img
          className="hero-avatar"
          src={profile.photo}
          alt={profile.displayName}
          width={112}
          height={112}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={rise}
        />
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...rise, delay: 0.1 }}
        >
          {t(ui.hero.eyebrow)} · {t(profile.location)}
        </motion.p>
        {/* Keyed by language so the headline plays again when it changes. */}
        <h1 className="hero-title" key={lang}>
          {/* The space sits outside the mask: trailing space inside an inline-block collapses. */}
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="word-mask">
                <motion.span
                  className="word"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ ...rise, delay: 0.2 + i * 0.06 }}
                >
                  {word}
                </motion.span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>
        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...rise, delay: 0.6 }}
        >
          {t(ui.hero.lede)}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...rise, delay: 0.75 }}
        >
          <a className="btn btn-primary" href="#cerca">
            {t(ui.hero.primary)}
          </a>
          <a className="btn btn-link" href={profile.resume} download>
            {t(ui.hero.resume)} <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </header>
  )
}
