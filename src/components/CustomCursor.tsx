"use client";
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference z-[9999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
      }}
    />
  );
};

export default CustomCursor;
