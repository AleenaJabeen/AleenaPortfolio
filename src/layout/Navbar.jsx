import React, { useEffect, useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi"
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";

const menuItems = [
  { menu: "About", link: "/about" },
  { menu: "Services", link: "/services" },
  { menu: "Projects", link: "/projects" },
  { menu: "Skills", link: "/skills" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode,setDarkMode]=useState(true);
  useEffect(()=>{
    console.log(darkMode);
    if(darkMode){
document.documentElement.classList.add('dark');

    }else{
document.documentElement.classList.remove('dark');

    }

  },[darkMode])

  return (
    <nav className="w-full dark:bg-[#1A1A1A] dark:text-white text-[#1A1A1A] bg-[#FFFFFF] px-6 py-4">
      {/* Navbar Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:pl-3">AleenaJabeen.</h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen?<IoCloseOutline />:<HiMenuAlt2 />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-lg">
            {menuItems.map((item) => (
              <Link key={item.menu} to={item.link}>
                {item.menu}
              </Link>
            ))}
          </ul>
          {/* dark mode */}
          <button onClick={()=>setDarkMode(!darkMode)} className={`${darkMode?"text-white":"text-black"}`}>{darkMode?<LuSunMoon size={26}/>:<MdOutlineDarkMode size={26}/>}</button>
          <button className="text-lg border dark:border-white border-[#1A1A1A] px-4 py-2 rounded-lg">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 dark:text-white text-[#1A1A1A] flex flex-col gap-6">
          <ul className="flex flex-col gap-6 text-base ">
            {menuItems.map((item) => (
              <Link
                key={item.menu}
                to={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.menu}
              </Link>
            ))}
          </ul>
                    <button onClick={()=>setDarkMode(!darkMode)} className={`${darkMode?"text-white":"text-black"}`}>{darkMode?<LuSunMoon size={26}/>:<MdOutlineDarkMode size={26}/>}</button>

          <button className="border border-white text-base px-4 py-2 rounded-lg text-white w-fit">
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
