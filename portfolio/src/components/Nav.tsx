import { profile } from '../data/profile'

const anchors = [
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
]

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a className="nav-mark" href="#top">
          marcelo<span className="accent">.</span>sias
        </a>
        <div className="nav-links">
          {anchors.map((a) => (
            <a key={a.href} href={a.href}>
              {a.label}
            </a>
          ))}
          <a className="nav-contact" href={`mailto:${profile.email}`}>
            contact
          </a>
        </div>
      </div>
    </nav>
  )
}
