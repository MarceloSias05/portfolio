import { useState } from 'react'
import type { ExperienceEntry } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { Lightbox } from './Lightbox'
import { Reveal } from './Reveal'

export function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  const { t } = useLang()
  return (
    <div className="xp-list">
      {entries.map((xp) => (
        <Reveal className={xp.link ? 'xp-item has-link' : 'xp-item'} key={xp.company + xp.dates.en}>
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
              <a className="btn btn-link card-link" href={xp.link.href} target="_blank" rel="noreferrer">
                {t(xp.link.label)} <span aria-hidden="true">↗</span>
              </a>
            )}
            {xp.photos && <PhotoStrip label={xp.company} photos={xp.photos} />}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/** Photos in a row that scrolls sideways; any of them opens the full set. */
function PhotoStrip({ label, photos }: { label: string; photos: NonNullable<ExperienceEntry['photos']> }) {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <>
      <div className="photo-strip" aria-label={`${label} · ${photos.length} ${t(ui.gallery.photos)}`} role="group">
        {photos.map((p, i) => (
          <button key={p.src} type="button" className="photo-strip-item" onClick={() => setOpen(i)}>
            <img src={p.src} alt={t(p.caption)} loading="lazy" draggable={false} />
            {p.video && (
              <span className="photo-strip-play" aria-hidden="true">
                ▶
              </span>
            )}
          </button>
        ))}
      </div>
      <Lightbox label={label} items={photos} index={open} onIndex={setOpen} frame="photo" />
    </>
  )
}
