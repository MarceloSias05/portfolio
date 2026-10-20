import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>
  range: [number, number]
  children: ReactNode
}) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return <motion.span style={{ opacity }}>{children} </motion.span>
}

/** A paragraph that lights up word by word as it scrolls through the viewport. */
export function Statement() {
  const { t } = useLang()
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] })
  const words = t(ui.statement).split(' ')

  return (
    <section className="statement tone-dark" aria-label={t(ui.statement)}>
      <div className="container">
        <p ref={ref} className="statement-text" aria-hidden="true">
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}
