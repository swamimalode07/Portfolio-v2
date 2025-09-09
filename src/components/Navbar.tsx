"use client";
import React, { useState, useEffect } from "react";
import Searchbox from "./Searchbox";
import CommandMenu from "./CommandMenu";
import { GitHubIcon } from "@/app/icons/Githubicon";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState<boolean>(false);

  const router= useRouter();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCommandMenu = (): void => {
    setIsCommandMenuOpen(!isCommandMenuOpen);
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandMenu();
      }
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      if (!isMobile) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black border-b-2 border-[#1C1C1F]">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
  
          <p className="font-sans text-lg sm:text-xl text-white font-semibold font-space-grotesk-700">@code by SWAMI</p>

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
     
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button className="font-sans text-white hover:text-gray-300 transition-colors font-medium font-space-grotesk-300"
              onClick={() => router.push('/projects')}
              >
                Projects
              </button>
 
            </div>

          
            <button
              onClick={toggleCommandMenu}
              className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-black border-2 border-[#252528] rounded-lg text-gray-400 hover:text-gray-300 hover:border-gray-500 transition-all duration-200 "
            >
              <span className="text-sm font-space-grotesk-400 font-medium">Search...</span>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 text-xs bg-[#252528] text-gray-300 rounded border border-[#404044] font-mono">
                  CTRL
                </kbd>
                <kbd className="px-2 py-1 text-xs bg-[#252528] text-gray-300 rounded border border-[#404044] font-mono">
                  K
                </kbd>
              </div>
            </button>

            {/* <div className="md:hidden sm:hidden scale-75 origin-right">
              <Searchbox />
            </div> */}
            <a
  href="https://github.com/swamimalode07"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-11 md:w-11 -ml-4 items-center justify-center rounded-lg ring-2 ring-[#252528] hover:ring-gray-400 transition-all duration-200 hover:bg-[#1C1C1F]"
>
  <GitHubIcon className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
</a>

            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

      
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 border-t-2 border-[#1C1C1F]">
            <div className="space-y-1 pt-3">
            
              <button
                className="block w-full text-left font-sans font-medium text-white hover:text-gray-300 transition-colors py-3 hover:bg-[#1C1C1F] rounded-lg px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </button> 
             
              {/* <button
                className="block w-full text-left font-sans font-medium text-white hover:text-gray-300 transition-colors py-3 hover:bg-[#1C1C1F] rounded-lg px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Art
              </button> */}
        
              <button
                className="block w-full text-left font-sans font-medium text-white hover:text-gray-300 transition-colors py-3 hover:bg-[#1C1C1F] rounded-lg px-3"
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleCommandMenu();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>


      <CommandMenu 
        isOpen={isCommandMenuOpen} 
        onClose={() => setIsCommandMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;