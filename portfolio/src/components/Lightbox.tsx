import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, type PanInfo } from 'motion/react'
import { ui } from '../data/ui'
import { useLang, type Text } from '../i18n'

export type LightboxItem = { src: string; caption: Text }

type LightboxProps = {
  label: string
  items: LightboxItem[]
  /** The open item, or null when closed. */
  index: number | null
  onIndex: (i: number | null) => void
  /** 'iphone' shows each item inside a phone frame, 'photo' as a plain rounded image. */
  frame: 'iphone' | 'photo'
}

/** A full-screen viewer: swipe, arrow keys, dots, Esc; rendered on <body> so no card clips it. */
export function Lightbox({ index, ...rest }: LightboxProps) {
  return createPortal(
    <AnimatePresence>{index !== null && <Viewer index={index} {...rest} />}</AnimatePresence>,
    document.body,
  )
}

function Viewer({ label, items, index, onIndex, frame }: Omit<LightboxProps, 'index'> & { index: number }) {
  const { t } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  // Which way the items slide: 1 forward, -1 back.
  const [dir, setDir] = useState(1)
  const onClose = () => onIndex(null)

  function go(step: number) {
    setDir(step)
    onIndex((index + step + items.length) % items.length)
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
      const buttons = dialogRef.current?.querySelectorAll<HTMLElement>('button')
      if (!buttons?.length) return
      const first = buttons[0]
      const last = buttons[buttons.length - 1]
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

  const item = items[index]
  const image = (
    <AnimatePresence initial={false} custom={dir} mode="popLayout">
      <motion.img
        key={index}
        src={item.src}
        alt={t(item.caption)}
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
  )

  return (
    <motion.div
      ref={dialogRef}
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={label}
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
      {items.length > 1 && (
        <>
          <button type="button" className="viewer-btn viewer-prev" onClick={() => go(-1)} aria-label={t(ui.gallery.prev)}>
            ‹
          </button>
          <button type="button" className="viewer-btn viewer-next" onClick={() => go(1)} aria-label={t(ui.gallery.next)}>
            ›
          </button>
        </>
      )}

      <motion.div
        className="viewer-body"
        initial={{ scale: 0.92, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 12 }}
        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
      >
        <motion.div
          className="viewer-media"
          drag={items.length > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.35}
          onDragEnd={onDragEnd}
        >
          {frame === 'iphone' ? (
            <div className="iphone">
              <div className="iphone-screen">
                {image}
                <span className="iphone-island" aria-hidden="true" />
              </div>
            </div>
          ) : (
            <div className="viewer-photo">{image}</div>
          )}
        </motion.div>

        <p className="viewer-caption" aria-live="polite">
          {t(item.caption)}
        </p>
        {items.length > 1 && (
          <div className="viewer-dots">
            {items.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={i === index ? 'is-active' : undefined}
                onClick={() => go(i - index)}
                aria-label={`${t(ui.gallery.item)} ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
