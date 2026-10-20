import { skills } from '../data/profile'
import { useLang } from '../i18n'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useLang()
  return (
    <div className="skills-grid">
      {skills.map((group, i) => (
        <Reveal className="skill-card" key={group.label.en} delay={(i % 3) * 0.08}>
          <h3 className="skill-label">{t(group.label)}</h3>
          <ul className="skill-items">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
