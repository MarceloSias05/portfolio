import { certifications } from '../data/profile'

export function Certifications() {
  return (
    <div className="cert-list">
      {certifications.map((c) => (
        <div className="cert-row" key={c.name}>
          <div className="cert-main">
            <span className="cert-name">{c.name}</span>
            {c.kind === 'award' && <span className="award">award</span>}
          </div>
          <span className="cert-meta">
            {c.issuer} · {c.date}
          </span>
        </div>
      ))}
    </div>
  )
}
