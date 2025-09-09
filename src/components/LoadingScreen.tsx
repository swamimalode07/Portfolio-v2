import React, { useEffect, useState } from "react";

const words = ["Hello", "Bonjour", "Hola", "नमस्ते", "Ciao"];

const WordPreloader = ({ onFinish }: { onFinish: () => void }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {

      const timer = setTimeout(
        () => setCurrentWordIndex((prev) => prev + 1),
        200
      );
      return () => clearTimeout(timer);
    } else {
    
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinish, 500); 
      }, 400);
    }
  }, [currentWordIndex, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-out ${
        isExiting
          ? "bg-black opacity-0 scale-105"
          : "bg-black opacity-100 scale-100"
      }`}
    >
     
      <div className="relative h-40 flex items-center justify-center">
        {words.map((word, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              index === currentWordIndex
                ? "opacity-100 translate-y-0 scale-100 blur-0" 
                : "opacity-0 translate-y-6 scale-95 blur-sm"
            }`}
          >
            <h1 className="text-white text-6xl sm:text-7xl font-space-grotesk-700 tracking-tight">
              {word}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordPreloader;
