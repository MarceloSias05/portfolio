import { certifications } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export function Certifications() {
  const { t } = useLang()
  return (
    <Reveal className="cert-block">
      <h3 className="cert-heading">{t(ui.sections.credentials)}</h3>
      <ul className="cert-list">
        {certifications.map((c) => (
          <li className="cert-row" key={c.name}>
            <span className="cert-name">
              {c.name}
              {c.kind === 'award' && <span className="award award-small">{t(ui.project.award)}</span>}
            </span>
            <span className="cert-meta">
              {c.issuer} · {t(c.date)}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
