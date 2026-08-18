import { projects } from '../data/profile'
import { ProjectVideo } from './ProjectVideo'

export function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article
          className={['project-card', p.wide && 'wide'].filter(Boolean).join(' ')}
          key={p.name}
        >
          {p.video && (
            <ProjectVideo
              id={p.video.id}
              label={p.video.label}
              poster={p.video.poster}
            />
          )}
          {p.image && (
            <div className={`project-shot shot-${p.image.fit}`}>
              <img src={p.image.src} alt={p.image.alt} loading="lazy" />
            </div>
          )}
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">{p.name}</h3>
              <span className="project-context">
                {p.context} · {p.dates}
              </span>
            </div>
            {p.award && <span className="award">{p.award}</span>}
            <p className="project-tagline">{p.tagline}</p>
            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
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
              <a
                className="project-link"
                href={p.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {p.link.label} ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
