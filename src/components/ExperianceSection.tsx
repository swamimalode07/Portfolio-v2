"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceProps {
  logo: string;
  title: string;
  type: string;
  highlights: string[];
  skills: string[];
  color?: string;
}

const ExperienceSection: React.FC<ExperienceProps> = ({
  logo,
  title,
  type,
  highlights,
  skills,
  color,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <div className="border-b border-[#1C1C1F]">
      
      <div
        onClick={toggleExpansion}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleExpansion();
        }}
        role="button"
        tabIndex={0}
        className="group text-white px-4 sm:px-[5%] py-6 sm:py-10 flex items-center gap-4 bg-black cursor-pointer transition-colors duration-200 hover:bg-[#0e0e0f] select-none"
      >
       
        <div className="w-14 h-14 flex-shrink-0 p-1 bg-[#18181B] border border-[#2A2A2D] rounded-lg shadow-sm group-hover:border-[#444446] transition">
          <img
            src={logo}
            alt={`${title} Logo`}
            className="w-full h-full object-contain rounded-md pointer-events-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-grow">
          <h2 className="text-lg sm:text-2xl font-semibold">{title}</h2>
          <p className="bg-[#1E1F21] text-gray-300 px-3 py-1 rounded-md text-xs sm:text-sm border border-[#2C2C2F] w-fit">
            {type}
          </p>
        </div>

       
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="bg-black text-white px-4 sm:px-[5%] overflow-hidden pb-8"
          >
            <div className="space-y-6">
           
              <div>
                <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#444444] rounded-full mt-2 flex-shrink-0 shadow-sm"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 sm:pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-3 py-1 bg-[#18181B] text-gray-300 text-xs sm:text-sm rounded-md border border-[#2C2C2F]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceSection;
