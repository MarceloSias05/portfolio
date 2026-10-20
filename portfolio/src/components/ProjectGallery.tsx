import { useState } from 'react'
import type { ProjectEntry } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { Lightbox } from './Lightbox'

type Gallery = NonNullable<ProjectEntry['gallery']>

/** An iPhone with a titanium band, Dynamic Island and side buttons, sized by `--w`. */
function IPhone({ src }: { src: string }) {
  return (
    <div className="iphone">
      <div className="iphone-screen">
        <img src={src} alt="" loading="lazy" draggable={false} />
        <span className="iphone-island" aria-hidden="true" />
      </div>
    </div>
  )
}

/** Three phones on the card; any of them opens the full set of screens. */
export function ProjectGallery({ name, gallery }: { name: string; gallery: Gallery }) {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const { screens, cover } = gallery

  return (
    <>
      <div className="gallery-stage">
        {cover.map((i, k) => (
          <button
            key={i}
            type="button"
            className={`iphone-btn${k === 1 ? ' is-center' : ''}`}
            onClick={() => setOpen(i)}
            aria-label={`${t(ui.gallery.open)} — ${name}: ${t(screens[i].caption)}`}
          >
            <IPhone src={screens[i].src} />
          </button>
        ))}
        <span className="gallery-hint" aria-hidden="true">
          {t(ui.gallery.open)} · {screens.length}
        </span>
      </div>
      <Lightbox label={name} items={screens} index={open} onIndex={setOpen} frame="iphone" />
    </>
  )
}
