import { useEffect, useRef, useState } from 'react'

type ProjectVideoProps = {
  id: string
  label: string
  poster: string
}

export function ProjectVideo({ id, label, poster }: ProjectVideoProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)

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

  return (
    <div className="project-video" ref={frameRef}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
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
