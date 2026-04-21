import React from "react";
import { motion } from "framer-motion";
import  {about} from '../assets'

function About() {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="about" 
      className="dark:bg-[#232323] bg-white dark:text-white text-[#232323] md:p-16 sm:p-12 p-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:w-3/5"
        >
          <h2 className="lg:text-7xl font-bold md:text-6xl sm:text-4xl text-2xl mb-6">
            About Me
          </h2>
          <div className="text-base leading-relaxed text-justify space-y-4">
            <p>
              I’m someone who cares deeply about how ideas are shaped, communicated,
              and experienced. Whether I’m building, designing, writing, or refining,
              I focus on creating work that feels intentional—not just finished. I
              enjoy turning vague concepts into clear outcomes and finding simple
              solutions to complex problems.
            </p>
            <p>
              My work is driven by curiosity and a strong attention to detail. I like
              asking the right questions early, experimenting thoughtfully, and
              improving through iteration. I value clarity, originality, and
              usefulness, and I’m always looking for ways to push a project beyond
              “good enough.”
            </p>
            <p>
              What sets me apart is how I combine creativity with structure. I’m
              comfortable exploring new ideas, but I also know how to organize them
              into something practical and effective. I see every project as a
              collaboration—between strategy and creativity, logic and intuition.
            </p>
          </div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 w-full flex justify-center"
        >
          <div className="relative group">
            {/* Decorative background element */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <img 
              src={about} // Replace with your actual image path
              alt="Profile" 
              className="relative rounded-lg shadow-2xl dark:grayscale grayscale-0 hover:grayscale-0 transition-all duration-500 object-cover w-full max-w-sm"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import { about1 } from "../assets";

export default About;