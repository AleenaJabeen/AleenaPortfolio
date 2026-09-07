import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiNextdotjs 
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="dark:text-white text-black" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
];

export default function Skills() {
  return (
    // Section background is white for light mode
    <section id="skills" className="bg-white dark:bg-[#1A1A1A] md:p-16 p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:text-7xl font-bold md:text-6xl sm:text-4xl text-2xl dark:text-white text-[#1a1a1a] mb-8"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              
              // Lift effect on hover
              whileHover={{ y: -8 }}
              
              className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#232323] cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              {/* Icon scaling happens because of the 'group' class above */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              
              <span className="text-gray-700 dark:text-gray-300 font-bold text-sm tracking-widest uppercase">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
