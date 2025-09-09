import React from "react";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-gray-300 font-space-grotesk">
      <div className="px-4 sm:px-[5%] mt-0 py-6">
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I’m a UI/UX Designer and Full Stack Developer based in India, currently
          pursuing my degree at Vishwakarma Institute of Technology, Pune. I blend
          design thinking with technical expertise to create intuitive and scalable
          digital solutions.
        </p>

        <p className="mb-6 sm:mb-10 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          With a strong foundation in both design and development, I bridge the gap
          between aesthetics and functionality. My approach combines user-centered
          design principles with robust full-stack development practices, ensuring
          seamless experiences from concept to deployment.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">
          <a
            href="https://github.com/swamimalode07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/swamimalode/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a
            href="https://leetcode.com/u/shrek07/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Leetcode <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
