import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  
  {
    role: "Senior Software Engineering Student",
    company: "UET Taxila",
    duration: "2022 - Present",
    desc: "Building a strong foundation in Software Engineering fundamentals Data Structures, Algorithms, and Software Design Patterns."
  },
  {
    role: "MERN Fellow",
    company: "Buildable",
    duration: "Sep 2025 - Nov 2025",
    desc: "Developing high-performance web applications using the MERN stack. Focused on scalable architecture and clean UI/UX."
  },
  {
    role: "Web Developer Intern",
    company: "Bitech, Bahria Phase VII, Rawalpindi",
    duration: "Jul 2025 - Aug 2025",
    desc: "Worked on frontend components using React and Tailwind CSS. Integrated REST APIs and optimized landing pages."
  },
  ,
  {
    role: "MERN Intern",
    company: "Innovaronix",
    duration: "Oct 2024 - Jan 2025",
    desc: "Worked on frontend components using React and Tailwind CSS. Integrated REST APIs and optimized landing pages."
  }
  ,
  {
    role: "Reactjs & Nextjs Fellow",
    company: "Bytewise Limited",
    duration: "Jun 2024 - Sep 2024",
    desc: "Worked on frontend components using React and Tailwind CSS. Integrated REST APIs and optimized landing pages."
  }
];

export default function Experience() {
  return (
    <section className="dark:bg-[#232323] bg-[#f9f9f9] md:p-16 p-6 transition-colors duration-300">
      <div className="w-[95%] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:text-5xl lg:text-7xl sm:text-4xl text-2xl font-bold dark:text-white text-[#1A1A1A] mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 border-l-2 border-[#116a9f]  hover:border-[#116a9f] transition-colors pb-16"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#116a9f] shadow-[0_0_15px_#116a9f]" />
              
              <span className="text-[#116a9f] font-bold text-sm uppercase tracking-tighter">
                {exp.duration}
              </span>
              <h3 className="text-3xl font-bold dark:text-white text-[#1A1A1A] mt-2">
                {exp.role}
              </h3>
              <p className="text-xl font-medium text-[#116a9f] dark:text-[#116a9f]/80 mb-4">
                {exp.company}
              </p>
              <p className="dark:text-[#ada9a9] text-[#1a1a1a]/80 max-w-2xl leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}