import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="footer-title">
          Let's build something<em>.</em>
        </h2>
        <p className="footer-meta">
          response_time: fast · languages: [es, en, fr] · base: {profile.location}
        </p>
        <div className="footer-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.links.map((l) => (
            <a
              className="btn btn-quiet"
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 {profile.fullName}</span>
          <div className="footer-bottom-links">
            <a href="#top">back_to_top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
