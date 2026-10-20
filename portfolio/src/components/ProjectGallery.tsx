import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, type PanInfo } from 'motion/react'
import type { ProjectEntry } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

type Gallery = NonNullable<ProjectEntry['gallery']>

/** An iPhone with a titanium band, Dynamic Island and side buttons, sized by `--w`. */
function IPhone({ src, alt = '' }: { src: string; alt?: string }) {
  return (
    <div className="iphone">
      <div className="iphone-screen">
        <img src={src} alt={alt} loading="lazy" draggable={false} />
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
      {createPortal(
        <AnimatePresence>
          {open !== null && (
            <Viewer
              name={name}
              screens={screens}
              index={open}
              onIndex={setOpen}
              onClose={() => setOpen(null)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

type ViewerProps = {
  name: string
  screens: Gallery['screens']
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}

function Viewer({ name, screens, index, onIndex, onClose }: ViewerProps) {
  const { t } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  // Which way the screens slide: 1 forward, -1 back.
  const [dir, setDir] = useState(1)

  function go(step: number) {
    setDir(step)
    onIndex((index + step + screens.length) % screens.length)
  }

  // Take focus and freeze the page while open; hand both back on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      opener?.focus()
    }
  }, [])

  function onKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowRight') go(1)
    else if (e.key === 'ArrowLeft') go(-1)
    else if (e.key === 'Tab') {
      // Keep Tab inside the dialog.
      const items = dialogRef.current?.querySelectorAll<HTMLElement>('button')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -60 || info.velocity.x < -400) go(1)
    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1)
  }

  const screen = screens[index]

  return (
    <motion.div
      ref={dialogRef}
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={name}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button ref={closeRef} type="button" className="viewer-btn viewer-close" onClick={onClose} aria-label={t(ui.gallery.close)}>
        ✕
      </button>
      <button type="button" className="viewer-btn viewer-prev" onClick={() => go(-1)} aria-label={t(ui.gallery.prev)}>
        ‹
      </button>
      <button type="button" className="viewer-btn viewer-next" onClick={() => go(1)} aria-label={t(ui.gallery.next)}>
        ›
      </button>

      <motion.div
        className="viewer-body"
        initial={{ scale: 0.92, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 12 }}
        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
      >
        <motion.div
          className="viewer-phone"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.35}
          onDragEnd={onDragEnd}
        >
          <div className="iphone">
            <div className="iphone-screen">
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.img
                  key={index}
                  src={screen.src}
                  alt={t(screen.caption)}
                  draggable={false}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ x: `${d * 30}%`, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: `${d * -30}%`, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', bounce: 0, duration: 0.45 }}
                />
              </AnimatePresence>
              <span className="iphone-island" aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        <p className="viewer-caption" aria-live="polite">
          {t(screen.caption)}
        </p>
        <div className="viewer-dots">
          {screens.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={i === index ? 'is-active' : undefined}
              onClick={() => go(i - index)}
              aria-label={`${t(ui.gallery.screen)} ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
