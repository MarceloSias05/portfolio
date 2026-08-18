import type { ExperienceEntry } from '../data/profile'

export function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div>
      {entries.map((xp) => (
        <article className="xp-item" key={xp.company + xp.dates}>
          <div className="xp-meta">
            {xp.dates}
            <br />
            {xp.location}
          </div>
          <div>
            <h3 className="xp-company">{xp.company}</h3>
            <p className="xp-role">{xp.role}</p>
            <ul className="xp-highlights">
              {xp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {xp.stack && (
              <div className="chip-row">
                {xp.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
