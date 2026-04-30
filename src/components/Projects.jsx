import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  devloom,
  ecommerce,
  medtech,
  pdf,
  smartresume,
  sporty,
  stream_bank,
  webcontrol,
  xperience,
} from "../assets";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All"); // State for filtering

  const projects = [
    {
      name: "Devloom Solutions",
      image: devloom,
      category: "Frontend",
      techStack: ["React", "CSS"],
      liveDemo: "https://devloom-website-six.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/Devloom-Solutions",
      description:
        "A modern startup website built using React and CSS, focused on delivering a clean and intuitive UI. The platform highlights digital services with a strong emphasis on performance, responsiveness, and user experience.",
      myRole: "MERN Intern",
    },
    {
      name: "Xperience",
      image: xperience,
      category: "Frontend",
      techStack: ["Reactjs", "Tailwind CSS"],
      liveDemo: "https://global-gem.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/global-gem",
      description:
        "A frontend-focused travel platform designed for users to explore destinations, become hosts, or travel globally. Built with React and Tailwind CSS, with planned backend integration using Supabase.",
      myRole: "Frontend Developer",
    },

    {
      name: "Trendmart",
      image: ecommerce,
      category: "Frontend",
      techStack: ["Html", "CSS", "JavaScript"],
      liveDemo: "https://trendmart-ecommerce.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/EcommerceWebsite",
      description:
        "An eCommerce web application developed using HTML, CSS, and JavaScript. It allows users to browse clothing products, filter categories, and manage a shopping cart for a smooth online shopping experience.",
      myRole: "Frontend Developer",
    },

    {
      name: "Furniture Studio",
      image: ecommerce,
      category: "Full Stack",
      techStack: ["Html", "CSS", "JavaScript"],
      liveDemo: null,
      githubRepo: "https://github.com/AleenaJabeen/EcommerceWebsite",
      description:
        "A semester project featuring a full eCommerce system for luxury furniture. Includes both admin and user panels where admins can manage products and orders, while users can browse and purchase items بسهولة.",
      myRole: "Software Engineer Student",
    },

    {
      name: "SmartResume",
      image: smartresume,
      category: "Full Stack",
      techStack: [
        "MongoDB",
        "React",
        "Tailwind CSS",
        "Nodejs",
        "Express",
        "JWT",
        "Stripe",
      ],
      liveDemo: null,
      githubRepo: "https://github.com/AleenaJabeen/SmartResume",
      description:
        "A full-stack resume builder developed during a web development internship at Bitech. Users can create professional resumes using templates and check ATS scores to improve their chances of selection.",
      myRole: "Web Developer Intern",
    },

    {
      name: "WebControl-CMS",
      image: webcontrol,
      category: "Full Stack",
      techStack: ["React", "MongoDB", "Nodejs", "Express", "Tailwind CSS"],
      liveDemo: null,
      githubRepo: "https://github.com/AleenaJabeen/WebControl-CMS",
      description:
        "A content management system built during a Bitech internship. It enables admins to perform CRUD operations and manage website data efficiently from the backend.",
      myRole: "Web Developer Intern",
    },

    {
      name: "PDF-Tool",
      image: pdf,
      category: "Full Stack",
      techStack: ["React", "Nodejs", "Express", "Tailwind CSS"],
      liveDemo: null,
      githubRepo: "https://github.com/AleenaJabeen/PDF-Tool",
      description:
        "A utility-based web application developed during a Bitech internship that allows users to perform multiple PDF operations such as merging, splitting, and modifying documents بسهولة.",
      myRole: "Web Developer Intern",
    },
    {
      name: "SportyDoctor",
      image: sporty,
      category: "Frontend",
      techStack: ["Reactjs", "Tailwind CSS"],
      liveDemo: "https://sporty-doctor.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/SportyDoctor",
      description:
        "A freelance project developed as an admin panel for managing sports-related or healthcare data. Built with React and Tailwind CSS, focusing on usability and clean dashboard design.",
      myRole: "Frontend Developer",
    },
    ,
    {
      name: "MedTech",
      image: medtech,
      category: "Frontend",
      techStack: ["Reactjs", "Bootstrap", "Gemini AI", "Framer Motion"],
      liveDemo: "https://medtech-seven.vercel.app/",
      githubRepo: "https://github.com/sunnyallana/med-tech-website",
      description:
        "A fellowship project built using React and Next.js, integrating AI features such as a chatbot. The platform showcases modern UI with animations using Framer Motion and focuses on healthcare technology solutions.",
      myRole: "Reactjs and Nextjs Fellow",
    },
  ];

  // Logic to filter projects based on state
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = ["All", "Frontend", "Full Stack"];

  return (
    <div
      id="projects"
      className="dark:bg-[#1A1A1A] bg-white md:p-16 sm:p-12 p-6 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="dark:text-white text-[#1a1a1a] lg:text-7xl font-bold md:text-6xl sm:text-4xl text-2xl"
        >
          Projects
        </motion.h2>

        {/* --- FILTER TABS --- */}
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-[#232323] rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                filter === cat
                  ? "bg-[#116a9f] text-white shadow-lg"
                  : "text-gray-500 hover:text-[#116a9f] dark:text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item, index) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(item)}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-gray-100 dark:bg-[#232323] border border-gray-300 hover:border-[#116a9f] transition-all shadow-lg"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.name}
                className="w-full md:h-56 h-48 object-fill opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-[10px] bg-[#116a9f]/10 text-[#116a9f] px-2 py-1 rounded-md uppercase font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                  <p className="bg-[#116a9f]   text-center py-3 px-6  text-[#FFFFFF] rounded-xl mt-2 text-sm font-medium">
                    View Project Details
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/5 backdrop-blur cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1E1E1E] sm:w-[50%] w-[90%] h-[70%] sm:h-auto overflow-y-auto no-scrollbar rounded-3xl overflow-hidden relative cursor-default shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-[110] p-2 md:bg-black/20 hover:bg-[#116a9f] bg-[#116a9f] backdrop-blur-md text-white rounded-full transition-all duration-300 group"
              >
                <IoClose
                  size={28}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>

              <div className="flex">
                <div className="w-full p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold dark:text-white mb-2 leading-tight">
                    {selectedProject.name}
                  </h3>
                  <p className="text-[#116a9f] font-medium mb-4">
                    {selectedProject.myRole} • {selectedProject.category}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-white/10 dark:text-gray-300 text-gray-700 text-[10px] uppercase tracking-widest rounded-md font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="dark:text-gray-400 text-gray-600 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-auto w-full">
  {selectedProject.liveDemo && (
    <a
      href={selectedProject.liveDemo}
      target="_blank"
      rel="noreferrer"
      className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#116a9f] text-white px-5 py-3 rounded-xl hover:bg-[#116a78] transition-colors font-bold shadow-lg shadow-[#116a9f]/20 text-center"
    >
      <FaExternalLinkAlt className="shrink-0" /> 
      <span className="whitespace-nowrap">Live Demo</span>
    </a>
  )}
  
  <a
    href={selectedProject.githubRepo}
    target="_blank"
    rel="noreferrer"
    className="w-full sm:flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 dark:text-white px-5 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-bold text-center"
  >
    <FaGithub className="shrink-0" /> 
    <span className="whitespace-nowrap">Source Code</span>
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
