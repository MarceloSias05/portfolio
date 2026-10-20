import { education } from '../data/profile'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export function Education() {
  const { t } = useLang()
  return (
    <div className="edu-grid">
      {education.map((e, i) => (
        <Reveal className="edu-card" key={e.school} delay={i * 0.08}>
          {e.logo && <img className="org-logo" src={e.logo} alt="" aria-hidden="true" />}
          <h3 className="edu-school">{e.school}</h3>
          <p className="edu-program">{t(e.program)}</p>
          <p className="edu-meta">
            {t(e.dates)}
            <br />
            {t(e.location)}
            {e.detail && (
              <>
                {' · '}
                <span className="accent">{t(e.detail)}</span>
              </>
            )}
          </p>
        </Reveal>
      ))}
    </div>
  )
}
