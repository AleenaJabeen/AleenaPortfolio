import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <footer className='dark:bg-[#232323] bg-white dark:text-white text-[#232323] px-6 py-8'>
      {/* Social Icons Section */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <Link 
          to="mailto:aleenajabeen19648@gmail.com" 
          className="hover:text-blue-500 transition-colors duration-300"
          aria-label="Email"
        >
          <SiGmail size={24} />
        </Link>
        <Link 
          to="https://linkedin.com/in/aleena-jabeen-2246a2273" 
          target="_blank" 
          className="hover:text-blue-600 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link 
          to="https://github.com/AleenaJabeen" 
          target="_blank" 
          className="hover:text-gray-500 transition-colors duration-300"
          aria-label="Github"
        >
          <FaGithub size={24} />
        </Link>
      </div>

      <hr className='border-t dark:border-[#ACACAC]/20 border-black/10 mb-6' />

      {/* Bottom Credits Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <h3 className='dark:text-[#ACACAC] text-[#666] font-medium'>
          Aleena Jabeen, <span className="italic">Software Engineer</span>
        </h3>
        <p className='text-sm dark:text-[#ACACAC] text-[#666]'>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;