import { useEffect, useRef, useState } from 'react'

const EMBED_ORIGIN = 'https://www.youtube-nocookie.com'

type ProjectVideoProps = {
  id: string
  label: string
  poster: string
}

export function ProjectVideo({ id, label, poster }: ProjectVideoProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const node = frameRef.current
    if (!node || playing) return
    // Starting on its own is motion: when motion is reduced, wait for a click.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPlaying(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [playing])

  function command(func: string, args: unknown[] = []) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      EMBED_ORIGIN,
    )
  }

  // cc_load_policy=0 alone does not suppress auto-generated captions, so drop the
  // caption modules too. The player ignores commands until it is ready, hence the
  // short retry ladder rather than a single call.
  useEffect(() => {
    if (!playing) return
    const drop = () => {
      command('unloadModule', ['captions'])
      command('unloadModule', ['cc'])
    }
    const timers = [200, 700, 1500, 3000].map((delay) =>
      window.setTimeout(drop, delay),
    )
    return () => timers.forEach(window.clearTimeout)
  }, [playing])

  // Browsers only allow a video to start on its own while muted, so sound needs
  // one deliberate press.
  function turnOnSound() {
    command('unMute')
    command('playVideo')
    setMuted(false)
  }

  const src =
    `${EMBED_ORIGIN}/embed/${id}` +
    '?enablejsapi=1&autoplay=1&mute=1&cc_load_policy=0&playsinline=1&rel=0'

  return (
    <div className="project-video" ref={frameRef}>
      {playing ? (
        <>
          <iframe
            ref={iframeRef}
            src={src}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
          {muted && (
            <button type="button" className="video-sound" onClick={turnOnSound}>
              <span className="video-sound-mark" aria-hidden="true" />
              Turn on sound
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          className="video-poster"
          onClick={() => setPlaying(true)}
        >
          <img src={poster} alt="" aria-hidden="true" />
          <span className="video-play">
            <span className="video-play-mark" aria-hidden="true" />
            {label}
          </span>
        </button>
      )}
    </div>
  )
}
