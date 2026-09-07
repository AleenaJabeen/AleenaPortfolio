import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  codeclarify,
  financetracker,
  rozgarhub
} from "../assets"; // Adjust asset paths as needed

export default function LatestProjects() {
  // Highlighted latest projects (subset of your main list)
  const latestProjects = [
    {
      name: "RozgarHub",
      image: rozgarhub,
      category: "Full stack",
      techStack: ["MERN", "Socket.io", "Twilio", "Real-time Notifications","Leaflet Map API"],
      liveDemo:"https://rozgar-hub-fyp-one.vercel.app/",
      githubRepo: "https://github.com/AleenaJabeen/RozgarHub-FYP",
      description:
        "Final Year Project,a web based solution for blue-collar sector of Pakista,an online marketplace for customers and service providers built with MERN stack ,Google Map API and WebSocket.",
    },
    {
      name: "FinanceTracker",
      image: financetracker,
      category: "Full stack",
      techStack: ["Python", "pandas", "matplotlib"],
      githubRepo: "https://github.com/AleenaJabeen/PersonalFinanceTracker",
      description:
        "For my personal finance tracker, I made a simple, efficient tool to manage my budget without complex GUIs or online accounts. I developed this Command Line Interface (CLI) application as a streamlined solution for tracking income and expenses directly from my development terminal. It converts everyday expense logging into actionable financial insights.",
    },
    {
      name: "CodeClarify",
      image: codeclarify,
      category: "AI Project",
      techStack: ["React", "TailwindCSS", "Flask API", "Gemini API"],
      githubRepo: "https://github.com/AleenaJabeen/CodeClarify",
      description:
        "AI-powered code explanation and review tool delivering summaries, step-by-step insights, and architectural feedback.",
    }
  ];

  return (
    <section className="dark:bg-[#1A1A1A] bg-white md:p-16 sm:p-12 p-6 transition-colors duration-300">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <span className="text-[#116a9f] text-xs uppercase tracking-widest font-bold">
            Recent Work
          </span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="dark:text-white text-[#1a1a1a] text-3xl sm:text-5xl font-bold mt-1"
          >
            Latest Projects
          </motion.h2>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-[#116a9f] font-bold hover:underline transition-all text-sm sm:text-base"
        >
          View All Projects <FaArrowRight className="text-xs" />
        </a>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestProjects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#232323] border border-gray-200 dark:border-white/10 hover:border-[#116a9f] transition-all shadow-md hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-48 w-full">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full md:h-56 h-48 object-fill opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {project.name}
                  </h3>
                  <span className="text-[10px] bg-[#116a9f]/10 text-[#116a9f] px-2 py-0.5 rounded font-bold uppercase">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-200 dark:bg-white/10 dark:text-gray-300 text-gray-700 text-[10px] rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-white/10">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#116a9f] text-white py-2 px-3 rounded-lg text-xs font-bold hover:bg-[#116a78] transition-colors"
                    >
                      <FaExternalLinkAlt className="shrink-0" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 dark:border-white/20 dark:text-white py-2 px-3 rounded-lg text-xs font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  >
                    <FaGithub className="shrink-0" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}