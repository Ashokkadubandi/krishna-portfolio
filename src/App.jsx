import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route,Routes } from 'react-router-dom'
import AboutSection from './Pages/About'
import ProjectSection from './Pages/Projects'
import SkillsSection from './Pages/Skills'
import NavbarSection from './components/Navbar.jsx'

import viteLogo from '/vite.svg'
import ContactSection from './Pages/Contact.jsx'
// import './App.css'

function App() {
  return (
    <>
    <NavbarSection />
    <div className='pt-10 md:pt-10 bg-blue-900 text-white'>
      <section id='about'>
        <AboutSection/>
      </section>
      <section id='skills'>
        <SkillsSection/>
      </section>
      <section id='projects'>
        <ProjectSection/>
      </section>
      <section id='contact'>
        <ContactSection/>
      </section>
    {/* <Routes>
      <Route path='/' element={<AboutSection/>}/>
      <Route path='/about' element={<AboutSection/>}/>
      <Route path='/projects' element={<ProjectSection/>}/>
      <Route path='/skills' element={<SkillsSection/>}/>
    </Routes> */}
    </div>
    </>
    
  )
}


export default App
