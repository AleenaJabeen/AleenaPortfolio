import React from "react";

function About() {
  return (
    <div className="dark:bg-[#232323] bg-white dark:text-white text-[#232323] md:p-16 sm:p-12 p-6">
      <h2 className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl mb-4">About Me</h2>
      <p className="md:w-[65%] md:mx-1 text-justify w-[90%] mx-auto text-base">
        I’m someone who cares deeply about how ideas are shaped, communicated,
        and experienced. Whether I’m building, designing, writing, or refining,
        I focus on creating work that feels intentional—not just finished. I
        enjoy turning vague concepts into clear outcomes and finding simple
        solutions to complex problems.
        <br /><br />
        My work is driven by curiosity and a strong attention to detail. I like
        asking the right questions early, experimenting thoughtfully, and
        improving through iteration. I value clarity, originality, and
        usefulness, and I’m always looking for ways to push a project beyond
        “good enough.”
        <br /><br />
        What sets me apart is how I combine creativity with structure. I’m
        comfortable exploring new ideas, but I also know how to organize them
        into something practical and effective. I see every project as a
        collaboration—between strategy and creativity, logic and intuition.
      </p>
    </div>
  );
}

export default About;
