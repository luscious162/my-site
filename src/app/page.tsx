"use client";

import React, { useEffect, useState } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import { useLanguage } from "@/contexts/language";

function MainPage() {
  const { language, forceRender } = useLanguage();
  const [key, setKey] = useState(0);
  
  // Force re-render when language changes
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [language, forceRender]);

  return (
    <div key={key}>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </div>
  );
}

export default MainPage;
