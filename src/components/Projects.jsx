import React from 'react'
import { devloom } from '../assets'

function Projects() {
  const projects=[
    {
      name:"Devloom Solutions",
      image:devloom,
      techStack:"",
      liveDemo:"https://devloom-website-six.vercel.app/",
      githubRepo:"https://github.com/AleenaJabeen/Devloom-Solutions",
      description:"",
      myRole:""
    },
     {
      name:"MedTech",
      image:devloom,
      techStack:"",
      liveDemo:"https://devloom-website-six.vercel.app/",
      githubRepo:"https://github.com/AleenaJabeen/Devloom-Solutions",
      description:"",
      myRole:""
    },
     {
      name:"Furniture Studio",
      image:devloom,
      techStack:"",
      liveDemo:"https://devloom-website-six.vercel.app/",
      githubRepo:"https://github.com/AleenaJabeen/Devloom-Solutions",
      description:"",
      myRole:""
    },
     {
      name:"Web-CMS",
      image:devloom,
      techStack:"",
      liveDemo:"https://devloom-website-six.vercel.app/",
      githubRepo:"https://github.com/AleenaJabeen/Devloom-Solutions",
      description:"",
      myRole:""
    }

  ]
  return (
    <div className='dark:bg-[#1A1A1A] bg-white  md:p-16 sm:p-12 p-6 md:py-12'>
      <div className='flex justify-between items-center'>
        <h2 className='dark:text-white text-[#232323] lg:text-7xl md:text-6xl sm:text-4xl text-2xl'>WORK</h2>
        <button className='text-white border-white border rounded-sm px-4 py-2 text-base text-center'>View All</button>
      
      </div>
        <div className='flex items-center gap-6 py-4'>
          {projects.map((item)=>{
            return(
              <>
              <div key={item.name} className='flex items-center justify-center dark:bg-[#232323] p-4 rounded-md'>
                <img src={item.image} alt={item.name} />
               
              </div>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default Projects
