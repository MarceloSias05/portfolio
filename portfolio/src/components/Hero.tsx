import type { CSSProperties, ReactNode } from 'react'
import { profile } from '../data/profile'

function Line({ step, children }: { step: number; children: ReactNode }) {
  const style = { '--d': `${0.4 + step * 0.22}s` } as CSSProperties
  return (
    <div className="schema-line" style={style}>
      {children}
    </div>
  )
}

const IN = <span className="indent" />

export function Hero() {
  return (
    <header className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            monterrey.mx <span className="accent">→</span> naples.it · 2026
          </p>
          <h1>
            I build AI systems that <em>ship</em>.
          </h1>
          <p className="hero-lede">
            Software engineer working across LLM agent pipelines, native iOS and
            full-stack web — from watsonx assistants at IBM to national-winning
            Swift apps. Computer Science at Tec de Monterrey; Apple Developer
            Academy in Naples, next.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See projects
            </a>
            <a className="btn btn-quiet" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
          </div>
        </div>

        <div className="schema-card" aria-label="Profile summary, styled as structured output">
          <div className="schema-card-head">
            <span>marcelo.profile</span>
            <span>structured_output · v1</span>
          </div>
          <div className="schema-card-body">
            <Line step={0}>{'{'}</Line>
            <Line step={1}>
              {IN}
              <span className="schema-key">"name":</span>{' '}
              <span className="schema-str">"Marcelo Sias"</span>,
            </Line>
            <Line step={2}>
              {IN}
              <span className="schema-key">"role":</span>{' '}
              <span className="schema-enum">software_engineer</span>,
            </Line>
            <Line step={3}>
              {IN}
              <span className="schema-key">"focus":</span> [
              <span className="schema-enum">llm_agents</span>,{' '}
              <span className="schema-enum">swiftui</span>,{' '}
              <span className="schema-enum">t3_stack</span>],
            </Line>
            <Line step={4}>
              {IN}
              <span className="schema-key">"base":</span>{' '}
              <span className="schema-str">"Monterrey, MX"</span>,
            </Line>
            <Line step={5}>
              {IN}
              <span className="schema-key">"next_stop":</span>{' '}
              <span className="schema-str">"Apple Developer Academy — Naples"</span>,
            </Line>
            <Line step={6}>
              {IN}
              <span className="schema-key">"languages":</span> [
              <span className="schema-enum">es_MX</span>,{' '}
              <span className="schema-enum">en</span>,{' '}
              <span className="schema-enum">fr</span>],
            </Line>
            <Line step={7}>
              {IN}
              <span className="schema-key">"status":</span>{' '}
              <span className="schema-enum">shipping</span>
            </Line>
            <Line step={8}>{'}'}</Line>
            <Line step={9}>
              <div className="schema-valid">
                ✓ schema validated · 0 errors
                <span className="caret" aria-hidden="true" />
              </div>
            </Line>
          </div>
        </div>
      </div>
    </header>
  )
}
