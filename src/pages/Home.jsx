import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection'



const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Experience = lazy(() => import('../components/Experience'));
const Contact = lazy(() => import('../components/Contact'));
function Home() {
  return (
    <div>
        <HeroSection/>
       <Suspense fallback={<div className="h-20" />}>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Suspense>
      
    </div>
  )
}

export default Home
