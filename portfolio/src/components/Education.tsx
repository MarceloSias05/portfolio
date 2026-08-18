import { education } from '../data/profile'

export function Education() {
  return (
    <div className="edu-grid">
      {education.map((e) => (
        <article className="edu-card" key={e.school}>
          <h3 className="edu-school">{e.school}</h3>
          <p className="edu-program">{e.program}</p>
          <p className="edu-meta">
            {e.dates}
            <br />
            {e.location}
            {e.detail && (
              <>
                {' · '}
                <span className="accent">{e.detail}</span>
              </>
            )}
          </p>
        </article>
      ))}
    </div>
  )
}
