import React from "react";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const ProjectsSection = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-[#1C1C1F] bg-black ">
    
      </div>

      <ProjectsCard
        title="Layers  Landing Page"
        description="Animated landing page."
        image="/layers.png"
          url="https://landing.swamimalode.online/"
      />
      <ProjectsCard
        title="GhostType"
        description="Minimalist Typing website."
        image="/ghosttype.png"
        url="https://ghosttype.swamimalode.online/"
      />
      <ProjectsCard
        title="Anieditor"
        description="Anime Overlay Editor."
        image="/anieditor.png"
        url="https://anieditor.swamimalode.online/"
      />
    </>
  );
};

export default ProjectsSection;
