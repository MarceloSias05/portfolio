import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  sectionKey: string
  title: string
  children: ReactNode
}

export function Section({ id, sectionKey, title, children }: SectionProps) {
  return (
    <section id={id} className="section container">
      <header className="section-head">
        <span className="section-key">"{sectionKey}":</span>
        <h2 className="section-title">{title}</h2>
      </header>
      {children}
    </section>
  )
}
