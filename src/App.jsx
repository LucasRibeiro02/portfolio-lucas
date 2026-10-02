import { useState } from 'react'
import { Header } from './components/Header'
import { ProjectModal } from './components/ProjectModal'
import { WhatsAppFloating } from './components/WhatsAppFloating'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>
      <WhatsAppFloating />
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default App
