import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiMap, FiMapPin } from 'react-icons/fi'; // npm install react-icons

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: "aleenajabeen19648@gmail.com",
      href: "mailto:aleenajabeen19648@gmail.com",
      icon: <FiMail />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aleenajabeen",
      href: "https://linkedin.com/in/aleena-jabeen-2246a2273", // Replace with your actual link
      icon: <FiLinkedin />,
    },
    {
      label: "GitHub",
      value: "github.com/AleenaJabeen",
      href: "https://github.com/AleenaJabeen", // Replace with your actual link
      icon: <FiGithub />,
    },
    {
      label: "Location",
      value: "Rawalpindi,Pakistan",
      href: "#", 
      icon: <FiMapPin />,
    },
  ];

  return (
    <section id="contact" className="dark:bg-[#1A1A1A] bg-white py-20 px-8">
      <div className="w-[95%] mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold dark:text-white mt-4"
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-[#116a9f] mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Professional Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-lg dark:text-gray-400 text-gray-600 max-w-md leading-relaxed">
              I’m currently looking for new opportunities and full time roles to contribute to 
              innovative projects and company. Whether you have a question or just want to say hi, 
              my inbox is always open.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-medium dark:text-gray-300">Available for Full Time Roles</span>
            </div>
          </motion.div>
         <div className="grid gap-4">
  {contactMethods.map((method, i) => (
    <motion.a
      key={i}
      href={method.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      className="group flex items-center justify-between p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#116a9f] dark:hover:border-[#116a9f] transition-all duration-300 bg-transparent overflow-hidden"
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0"> {/* min-w-0 is critical for child truncation */}
        <div className="text-xl sm:text-2xl text-[#116a9f] bg-[#116a9f]/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
          {method.icon}
        </div>
        
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-bold">
            {method.label}
          </p>
          <p className="text-sm sm:text-lg font-medium dark:text-white truncate">
            {method.value}
          </p>
        </div>
      </div>

      <div className="ml-2 flex-shrink-0">
        <FiArrowUpRight className="text-lg sm:text-xl text-gray-400 group-hover:text-[#116a9f] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
    </motion.a>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}