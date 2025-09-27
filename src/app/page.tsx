"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import ExperienceSection from "@/components/ExperianceSection";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";
import Taskbar from "@/components/Taskbar";

const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="w-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]">
          <Container>
            <div className="text-white">
              <Navbar />
              <HeroSection />
              <Heading heading="Stack" />
              <SkillsSection />
              <Separator />
              <Heading heading="Projects" showButton buttonLink="/projects" />

              <ProjectsSection />
              <Separator />
              <Heading heading="Experience" />
              <ExperienceSection
                logo="/conduit.png"
                title="Full Stack  Developer"
                type="Internship"
                highlights={[
                  "Working on Frontend and Backend development for Conduit.",
                  "Working on modular codebase to ensure scalability and maintainability.",
                ]}
                skills={["Javascript", "Next.js", "Tailwind CSS", "Redux"]}
              />
              <ExperienceSection
                color="orange-500"
                logo="/mach5.png  "
                title="Frontend Developer"
                type="Freelance"
                highlights={[
                  "Worked as a Frontend Developer, transforming Figma design into fully responsive, high-performance website ",
                  " Implemented core SEO features: lazy loading, WebP images, clean URLs, meta tags, Open Graph, and accessibility. ",
                  "Set up essential SEO infrastructure that includes robots.txt, dynamic sitemap.xml, and crawlable internal links.",
                ]}
                skills={["HTML", "Tailwind CSS", "SEO"]}
              />
              <Separator />
              <Heading heading="About Me" />
              <About />
              <Separator />
              <ContactSection />
            </div>
          </Container>
        </div>
      )}
     {loading ||   <Taskbar />}
      
    </>
  );
};

export default page;
