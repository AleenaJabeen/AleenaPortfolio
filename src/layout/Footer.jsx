import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='dark:bg-[#232323] bg-white dark:text-white text-[#232323] px-6 py-4'>
      <div className="flex items-center justify-center gap-4 mb-3">
        <Link>Email</Link>
        <Link>LinkedIn</Link>
        <Link>Github</Link>
      </div>
      <hr className='dark:text-[#ACACAC] text-black/20 py-3' />
      <div className='flex justify-between items-center mb-6'>
        <h3 className='dark:text-[#ACACAC] text-[#232323]'>Aleena Jabeen,Web Developer</h3>
        <p>All rights reserved </p>
      </div>
      
    </div>
  )
}

export default Footer
