import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang, type Lang } from '../i18n'

const anchors = [
  { label: ui.nav.cerca, href: '#cerca' },
  { label: ui.nav.projects, href: '#projects' },
  { label: ui.nav.experience, href: '#experience' },
  { label: ui.nav.skills, href: '#skills' },
  { label: ui.nav.contact, href: '#contact' },
]

const langs: Lang[] = ['en', 'es']

export function Nav() {
  const { lang, setLang, t } = useLang()
  const [overDark, setOverDark] = useState(false)

  // Match the bar to the section underneath it, like Apple's product pages.
  useEffect(() => {
    const dark = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) dark.add(entry.target)
          else dark.delete(entry.target)
        }
        setOverDark(dark.size > 0)
      },
      // A thin strip right under the 52px bar.
      { rootMargin: '-52px 0px -99% 0px' },
    )
    document.querySelectorAll('.tone-dark').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={overDark ? 'nav is-dark' : 'nav'}>
      <div className="nav-inner container">
        <a className="nav-mark" href="#top">
          {profile.displayName}
        </a>
        <div className="nav-links">
          {anchors.map((a) => (
            <a key={a.href} href={a.href}>
              {t(a.label)}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t(ui.nav.language)}>
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="nav-resume" href={profile.resume} download>
            {t(ui.nav.resume)}
          </a>
        </div>
      </div>
    </nav>
  )
}
