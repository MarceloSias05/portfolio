import type { ExperienceEntry } from '../data/profile'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  const { t } = useLang()
  return (
    <div className="xp-list">
      {entries.map((xp) => (
        <Reveal className="xp-item" key={xp.company + xp.dates.en}>
          <div className="xp-meta">
            {xp.logo ? (
              <img className="org-logo" src={xp.logo} alt="" aria-hidden="true" />
            ) : (
              <span className="org-logo org-logo-mono" aria-hidden="true">
                {xp.company.charAt(0)}
              </span>
            )}
            <p>
              {t(xp.dates)}
              <br />
              {t(xp.location)}
            </p>
          </div>
          <div className="xp-content">
            <h3 className="xp-company">{xp.company}</h3>
            {xp.org && <p className="xp-org">{t(xp.org)}</p>}
            <p className="xp-role">{t(xp.role)}</p>
            <ul className="xp-highlights">
              {xp.highlights.map((h) => (
                <li key={h.en}>{t(h)}</li>
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
            {xp.link && (
              <a className="btn btn-link" href={xp.link.href} target="_blank" rel="noreferrer">
                {t(xp.link.label)} <span aria-hidden="true">↗</span>
              </a>
            )}
            {xp.photo && (
              <figure className="xp-photo">
                <img src={xp.photo.src} alt={t(xp.photo.alt)} loading="lazy" />
                <figcaption>{t(xp.photo.caption)}</figcaption>
              </figure>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
