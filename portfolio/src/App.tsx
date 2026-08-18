import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { ExperienceList } from './components/ExperienceList'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { experience, leadership } from './data/profile'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="experience" sectionKey="experience" title="Where I've worked">
          <ExperienceList entries={experience} />
        </Section>
        <Section id="projects" sectionKey="projects" title="Things I've built">
          <Projects />
        </Section>
        <Section id="leadership" sectionKey="leadership" title="Beyond the code">
          <ExperienceList entries={leadership} />
        </Section>
        <Section id="skills" sectionKey="skills" title="What I work with">
          <Skills />
        </Section>
        <Section id="education" sectionKey="education" title="Where I'm learning">
          <Education />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
