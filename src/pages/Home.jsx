import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>

      
    </div>
  )
}

export default Home
