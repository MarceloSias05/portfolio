import type { ReactNode } from 'react'
import type { Text } from '../i18n'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export type Tone = 'light' | 'gray' | 'dark'

type SectionProps = {
  id: string
  tone?: Tone
  eyebrow: Text
  title: Text
  children: ReactNode
}

export function Section({ id, tone = 'light', eyebrow, title, children }: SectionProps) {
  const { t } = useLang()
  return (
    <section id={id} className={`section tone-${tone}`}>
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t(eyebrow)}</p>
          <h2 className="section-title">{t(title)}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
