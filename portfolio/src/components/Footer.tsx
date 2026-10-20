import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer tone-dark" id="contact">
      <div className="container">
        <Reveal>
          <h2 className="footer-title">{t(ui.footer.title)}</h2>
          <p className="footer-lede">{t(ui.footer.lede)}</p>
          <div className="footer-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            {profile.links.map((l) => (
              <a className="btn btn-ghost" key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {t(l.label)}
              </a>
            ))}
            <a className="btn btn-ghost" href={profile.resume} download>
              {t(ui.hero.resume)}
            </a>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <span>
            © 2026 {profile.fullName} · {t(profile.location)}
          </span>
          <a href="#top">{t(ui.footer.top)} ↑</a>
        </div>
      </div>
    </footer>
  )
}
