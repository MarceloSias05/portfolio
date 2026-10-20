import './App.css'
import { MotionConfig } from 'motion/react'
import { LangProvider } from './i18n'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Statement } from './components/Statement'
import { Section } from './components/Section'
import { Stats } from './components/Stats'
import { CercaStory } from './components/CercaStory'
import { ExperienceList } from './components/ExperienceList'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Footer } from './components/Footer'
import { experience, leadership } from './data/profile'
import { ui } from './data/ui'

const s = ui.sections

function App() {
  return (
    <LangProvider>
      {/* With reduced motion on, Motion drops transforms and keeps the fades. */}
      <MotionConfig reducedMotion="user">
        <Nav />
        <main>
          <Hero />
          <Statement />
          <Section id="numbers" tone="gray" eyebrow={s.numbers.eyebrow} title={s.numbers.title}>
            <Stats />
          </Section>
          <CercaStory />
          <Section id="projects" eyebrow={s.projects.eyebrow} title={s.projects.title}>
            <Projects />
          </Section>
          <Section id="experience" tone="gray" eyebrow={s.experience.eyebrow} title={s.experience.title}>
            <ExperienceList entries={experience} />
          </Section>
          <Section id="leadership" eyebrow={s.leadership.eyebrow} title={s.leadership.title}>
            <ExperienceList entries={leadership} />
          </Section>
          <Section id="skills" tone="dark" eyebrow={s.skills.eyebrow} title={s.skills.title}>
            <Skills />
          </Section>
          <Section id="education" tone="gray" eyebrow={s.education.eyebrow} title={s.education.title}>
            <Education />
            <Certifications />
          </Section>
        </main>
        <Footer />
      </MotionConfig>
    </LangProvider>
  )
}

export default App
