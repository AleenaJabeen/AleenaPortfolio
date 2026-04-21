import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { devloom } from '../assets';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Devloom Solutions",
      image: devloom,
      techStack: ["React", "Tailwind", "Node.js"],
      liveDemo: "https://devloom-website-six.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/Devloom-Solutions",
      description: "A comprehensive digital solution platform for modern businesses. Optimized for high performance and seamless user experience.",
      myRole: "Lead Frontend Developer"
    },
    // Add your other projects here
  ];

  return (
    <div id="projects" className='dark:bg-[#1A1A1A] bg-white md:p-16 sm:p-12 p-6 transition-colors duration-300'>
      <div className='flex justify-between items-end mb-12'>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='dark:text-white text-[#1a1a1a] lg:text-7xl font-bold md:text-6xl sm:text-4xl text-2xl mb-8'>
          Projects
        </motion.h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {projects.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(item)}
            className='group cursor-pointer relative overflow-hidden rounded-xl bg-gray-100 dark:bg-[#232323] border border-transparent hover:border-[#116a9f] transition-all shadow-lg'
          >
            <img src={item.image} alt={item.name} className='w-full md:h-56 h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity' />
            <div className='p-6'>
              <h3 className='text-xl font-semibold dark:text-white'>{item.name}</h3>
              <p className='text-[#5F5F5F] mt-2 text-sm font-medium'>View Project Case Study →</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            // Click background to close
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              className="bg-white dark:bg-[#1E1E1E] max-w-3xl w-full rounded-3xl overflow-hidden relative cursor-default shadow-2xl"
            >
              {/* --- ENHANCED CLOSE BUTTON --- */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-[110] p-2 bg-black/20 hover:bg-[#116a9f] backdrop-blur-md text-white rounded-full transition-all duration-300 group"
                aria-label="Close Modal"
              >
                <IoClose size={28} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
              {/* ----------------------------- */}
              
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2">
                  <img src={selectedProject.image} className="w-full h-full object-cover min-h-[300px]" alt="Preview" />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold dark:text-white mb-2 leading-tight">
                    {selectedProject.name}
                  </h3>
                  <p className="text-[#116a9f] font-medium mb-4">{selectedProject.myRole}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/10 dark:text-gray-300 text-gray-700 text-[10px] uppercase tracking-widest rounded-md font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="dark:text-gray-400 text-gray-600 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#116a9f] text-white px-5 py-3 rounded-xl hover:bg-[#116a78] transition-colors font-bold shadow-lg shadow-[#D94100]/20">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href={selectedProject.githubRepo} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-gray-300 dark:border-white/20 dark:text-white px-5 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-bold">
                      <FaGithub /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}