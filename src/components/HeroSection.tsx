import React from "react";
import { FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-4">
          <div className="mb-20 flex max-w-7xl flex-col items-start justify-center pt-10 text-white sm:mt-18 md:pt-0 lg:mt-6">
            <p className="font-space-grotesk text-4xl leading-tight font-bold sm:h-[px] sm:text-6xl md:h-[px] md:text-7xl lg:h-[px] lg:text-8xl xl:h-[px] xl:text-[130px]">
              Hi, I'm Swami
            </p>
            <p className="font-space-grotesk text-4xl leading-tight font-bold sm:-mt-4 sm:text-6xl md:-mt-6 md:text-7xl lg:-mt-2 lg:text-8xl xl:-mt-10 xl:text-[130px]">
              I build for the web.
            </p>

            <p className="font-space-grotesk mt-4 w-full text-sm text-[#A4A4A4] sm:mt-6 sm:w-[80%] sm:text-base md:mt-8 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl xl:w-[45%] xl:text-2xl">
              That means I can create good looking and functional websites. I'm
              always looking for new opportunities to learn and grow.
            </p>

            <a
              href="/resume.pdf"
              download="Swami-Malode-Resume.pdf"
              className="font-space-grotesk-500 mt-4 flex items-center gap-2 rounded-full border-2 border-[#494949] bg-[#1C1C1C] px-4 py-2 text-sm transition-all hover:border-[#5A5A5A] hover:bg-[#2C2C2C] sm:mt-6 sm:gap-3 sm:px-6 sm:py-2.5 sm:text-base md:mt-8 md:px-8 md:py-3"
            >
              <span>Download Resume</span>
              <FileDown
                size={18}
                strokeWidth={1.25}
                className="text-gray-300 sm:h-5 sm:w-5 md:h-[22px] md:w-[22px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </div>
  );
};

export default HeroSection;
