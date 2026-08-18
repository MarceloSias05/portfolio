import { skills } from '../data/profile'

export function Skills() {
  return (
    <div className="skills-list">
      {skills.map((group) => (
        <div className="skill-group" key={group.label}>
          <span className="skill-label">"{group.label}":</span>
          <div className="skill-items">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
