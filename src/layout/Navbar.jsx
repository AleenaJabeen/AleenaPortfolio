import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className='bg-[#1A1A1A] py-4 px-6'>
        {/* Desktop */}
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl text-white'>Aleena</h1>
            <button className='md:hidden text-white text-3xl'><HiMenuAlt2/></button>
            <div  className='md:flex hidden items-center gap-6'>
            <ul className='text-lg text-white flex items-center gap-8'>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Skills</li>
            </ul>
            <button className='text-lg p-2 text-white border border-white rounded-lg'>Contact</button>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar
