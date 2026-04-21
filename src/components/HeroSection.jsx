import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { profile } from "../assets";

function HeroSection() {
  const titles = [
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
     "Full Stack Developer"
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

  useEffect(() => {
    const currentFullText = titles[index];

    const handleTyping = () => {
      if (!isDeleting) {
        // Adding characters
        setDisplayText(currentFullText.substring(0, displayText.length + 1));

        if (displayText === currentFullText) {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Removing characters
        setDisplayText(currentFullText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, titles]);

  return (
    <div className="dark:bg-[#1A1A1A] bg-white md:p-16 sm:p-12 p-6 overflow-hidden relative">
      <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-center gap-12 z-10 relative">
        
     <div className="lg:w-[60%] w-[95%] mx-auto text-left">
 <h1 className="text-[#1A1A1A] dark:text-white font-bold 
               /* Responsive Font Sizes */
               text-4xl sm:text-5xl md:text-7xl lg:text-[80px] 
               /* Responsive Line Height */
               leading-[1.1] md:leading-[1.05] 
               mb-8 tracking-tight">
  
  <span className="block mb-2 opacity-90">Hi, I'm</span>
  
  <span className="text-[#116a9f] block md:inline-block mb-2 md:mb-0">
    Aleena Jabeen{" "}
  </span>

  <div className="block min-h-[1.2em] md:mt-2">
    <span className="dark:text-white text-[#1A1A1A]">a </span>
    <span className="text-[#116a9f] break-words">
      {displayText}
      {/* Blinking Cursor */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-2 w-[3px] md:w-[5px] h-[0.8em] bg-[#116a9f] translate-y-1"
      />
    </span>
  </div>
</h1>

          <div className="flex items-center  gap-4 py-3">
            <Button text="Download Resume" />
            <Button text="Hire Me" />
          </div>
        </div>

        {/* Right Side: Profile Image Section */}
        <div className="lg:w-[40%] w-full flex justify-center lg:justify-end items-center relative py-10 lg:py-0">
          <div className="absolute w-[120%] h-[120%] bg-[#116a9f] opacity-10 rounded-full blur-3xl -z-10" />
          
          <div className="absolute top-0 right-0 w-64 h-64 border-4 border-[#116a9f]/30 rounded-3xl rotate-12 -z-20 opacity-50 hidden lg:block" />
          
          <div className="relative w-full max-w-[400px] aspect-square rounded-full border-[10px] border-[#116a9f]/20 bg-gray-100/30 dark:bg-gray-800/20 shadow-xl overflow-hidden flex items-end justify-center">
             <img 
               src={profile} 
               alt="Aleena Jabeen" 
               className="w-[90%] h-[90%] object-contain object-bottom pointer-events-none z-10"
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;