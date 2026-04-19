import React from "react";
import Button from "./Button";
import Profile from '../assets/Profile.jpg';

function HeroSection() {
  return (
    <div className="dark:bg-[#1A1A1A] bg-white md:p-16 sm:p-12 p-6">
      <h1 className="flex items-center flex-wrap gap-3 
  md:w-[85%] w-[90%] mx-auto md:mx-0 
  md:leading-none leading-[1.2] 
  text-[#5F5F5F] 
  lg:text-[105px] md:text-8xl sm:text-4xl text-3xl">
  
  <span>Hi,</span>

  <span className="w-[165px] h-[105px] bg-[#D94100] 
    flex items-center justify-center">
    <img src={Profile} alt="Profile image" className="w-[60px]" />
  </span>
  <span>I'm</span>

  <span className="dark:text-white text-[#1A1A1A]">
    Aleena Jabeen <span className="text-[#5F5F5F]">a Web Developer</span>
  </span>

</h1>
      <div className="md:w-full w-[90%] mx-auto flex items-center flex-wrap gap-4 py-3 ">
        <Button text="Download Resume" />
        <Button text="Hire Me" />
      </div>
    </div>
  );
}

export default HeroSection;
