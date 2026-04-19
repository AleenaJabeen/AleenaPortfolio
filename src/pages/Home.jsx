import React from 'react'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import About from '../components/About'

function Home() {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Projects/>
        {/* <SkillsAndExperience/> */}

      
    </div>
  )
}

export default Home
