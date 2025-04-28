"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
// Assuming SKILLS type no longer has shortDescription
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
// Make sure this hook provides the 't' function correctly based on next-intl setup
import useTranslation from "@/hooks/useTranslation";
import { translations } from "@/data/translations";
import FontLoader from "./font-loader";

gsap.registerPlugin(ScrollTrigger);

// STATES object remains the same...
const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
};

type Section = "hero" | "about" | "skills" | "projects" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();
  const { t, language } = useTranslation(); // Get translation function and current language

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [bongoAnimation, setBongoAnimation] = useState<{
    start: () => void;
    stop: () => void;
  }>();
  const [keycapAnimtations, setKeycapAnimtations] = useState<{
    start: () => void;
    stop: () => void;
  }>();

  // 添加鼠标位置状态，用于定位技能描述悬浮框
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Import Chinese translations directly
  const zhTranslations = useRef(translations.zh);

  const keyboardStates = (section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    // 更新鼠标位置 - 使用全局鼠标位置，而不是SplineEvent中的point
    // SplineEvent不包含point属性，我们依赖全局鼠标事件监听
    // 此处不需要更新mousePosition，由全局事件处理函数负责

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
    } else {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill && (!selectedSkill || selectedSkill.name !== e.target.name)) {
        setSelectedSkill(skill); // Update state, useEffect will handle text update
      }
    }
  };

  // 添加鼠标移动事件处理函数
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update Spline text variables when selectedSkill changes (due to hover or key press)
  useEffect(() => {
    if (!splineApp) return;

    if (selectedSkill) {
      splineApp.setVariable("heading", selectedSkill.label);
      // Always use English descriptions in the 3D scene
      const englishDesc = translations.en.skills[selectedSkill.name as keyof typeof translations.en.skills];
      splineApp.setVariable("desc", englishDesc);
      
      // 尝试直接设置字体
      splineApp.setVariable("textFont", "Special Elite");
    } else {
      // Clear text if no skill is selected
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    }
  }, [selectedSkill, splineApp]);

  // handle keyboard heading and desc visibility based on theme, screen size, and section
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");

    if (!textDesktopDark || !textDesktopLight || !textMobileDark || !textMobileLight) {
        console.warn("Spline text objects not found.");
        return;
    }

    textDesktopDark.visible = false;
    textDesktopLight.visible = false;
    textMobileDark.visible = false;
    textMobileLight.visible = false;

    if (activeSection !== "skills") {
      return;
    }

    if (theme === "dark") {
      if (isMobile) {
        textMobileLight.visible = true;
      } else {
        textDesktopLight.visible = true;
      }
    } else {
       if (isMobile) {
        textMobileDark.visible = true;
      } else {
        textDesktopDark.visible = true;
      }
    }
  }, [theme, splineApp, isMobile, activeSection]);

  // initialize gsap animations and listeners
  useEffect(() => {
    if (!splineApp) return;
    handleSplineInteractions();
    handleGsapAnimations();
    setBongoAnimation(getBongoAnimation());
    setKeycapAnimtations(getKeycapsAnimation());

    // Cleanup listeners on component unmount
    return () => {
        if (splineApp) { // Check if splineApp exists before removing listeners
            splineApp.removeEventListener("keyUp", handleKeyUp);
            splineApp.removeEventListener("keyDown", handleKeyDown);
            splineApp.removeEventListener("mouseHover", handleMouseHover);
        }
        // Kill all GSAP animations and ScrollTriggers associated with this component
        gsap.killTweensOf("*"); // Be cautious with global kill
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [splineApp]); // Run only when splineApp is set

  // Handle keyboard rotation and other animations based on activeSection
  useEffect(() => {
    let rotateKeyboard: gsap.core.Tween | null = null;
    let teardownKeyboard: gsap.core.Tween | null = null;

    (async () => {
      if (!splineApp) return;
      const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
      if (!kbd) return;

      gsap.killTweensOf(kbd.rotation); // Kill only rotation tweens before creating new ones

      // Setup tweens
      rotateKeyboard = gsap.to(kbd.rotation, {
          y: Math.PI * 2 + kbd.rotation.y,
          duration: 10,
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          ease: "back.inOut",
          delay: 2.5,
          paused: true, // Start paused
      });
      teardownKeyboard = gsap.fromTo(kbd.rotation,
          { y: 0, x: -Math.PI, z: 0 },
          { y: -Math.PI / 2, duration: 5, repeat: -1, yoyo: true, yoyoEase: true, delay: 2.5, immediateRender: false, paused: true }
      );

      // Control animations based on activeSection
      if (activeSection === "hero") {
        rotateKeyboard.restart();
        teardownKeyboard.pause();
      } else if (activeSection === "contact") {
        rotateKeyboard.pause();
        if (!teardownKeyboard.isActive()) {
             teardownKeyboard.restart();
        }
        keycapAnimtations?.start();
      } else {
        rotateKeyboard.pause();
        teardownKeyboard.pause();
      }

      // Bongo animation control
      if (activeSection === "projects") {
        await sleep(300);
        bongoAnimation?.start();
      } else {
        await sleep(200);
        bongoAnimation?.stop();
      }

       // Keycaps animation control for contact section
      if (activeSection !== "contact") {
         await sleep(600);
         keycapAnimtations?.stop();
      }

    })();

    // Cleanup function for this specific effect
    return () => {
      if (rotateKeyboard) rotateKeyboard.kill();
      if (teardownKeyboard) teardownKeyboard.kill();
      // Stop animations explicitly if they might persist
      bongoAnimation?.stop();
      keycapAnimtations?.stop();
    };
  }, [activeSection, splineApp, bongoAnimation, keycapAnimtations]); // Add animation state dependencies

  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const router = useRouter();

  // Reveal keycaps animation
  useEffect(() => {
    if (!splineApp || isLoading || keyboardRevealed) return;

    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    const reveal = async () => {
        kbd.visible = false;
        await sleep(400);
        kbd.visible = true;
        setKeyboardRevealed(true);

        gsap.fromTo( kbd.scale,
          { x: 0.01, y: 0.01, z: 0.01 },
          { x: keyboardStates(activeSection).scale.x, y: keyboardStates(activeSection).scale.y, z: keyboardStates(activeSection).scale.z, duration: 1.5, ease: "elastic.out(1, 0.6)" }
        );

        const allObjects = splineApp.getAllObjects();
        const keycaps = allObjects.filter((obj) => obj.name === "keycap");

        await sleep(900);

        if (isMobile) {
          const mobileKeyCaps = allObjects.filter(obj => obj.name === "keycap-mobile");
          mobileKeyCaps.forEach(keycap => keycap.visible = true);
        } else {
          const desktopKeyCaps = allObjects.filter(obj => obj.name === "keycap-desktop");
          desktopKeyCaps.forEach(async (keycap, idx) => {
            await sleep(idx * 70);
            keycap.visible = true;
          });
        }

        keycaps.forEach(async (keycap, idx) => {
          keycap.visible = false;
          await sleep(idx * 70);
          keycap.visible = true;
          gsap.fromTo( keycap.position,
            { y: 200 },
            { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
          );
        });
    }
    reveal();

  }, [splineApp, isLoading, keyboardRevealed, activeSection, isMobile]); // Add dependencies

  // --- Event Handlers defined outside useEffect ---
  const handleKeyUp = (e: SplineEvent) => {
     if (!splineApp) return;
     setSelectedSkill(null);
  };

  const handleKeyDown = (e: SplineEvent) => {
     if (!splineApp) return;
     const skill = SKILLS[e.target.name as SkillNames];
     if (skill) {
       setSelectedSkill(skill);
     }
  };

  // Setup Spline event listeners
  const handleSplineInteractions = () => {
    if (!splineApp) return;
    splineApp.removeEventListener("keyUp", handleKeyUp);
    splineApp.addEventListener("keyUp", handleKeyUp);
    splineApp.removeEventListener("keyDown", handleKeyDown);
    splineApp.addEventListener("keyDown", handleKeyDown);
    splineApp.removeEventListener("mouseHover", handleMouseHover);
    splineApp.addEventListener("mouseHover", handleMouseHover);
  };


  // Setup GSAP scroll-triggered animations
  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;

    // REMOVED the ScrollTrigger.getAll().forEach(...) loop that caused type errors.
    // Relying on overwrite: "auto" in the tweens below.

    // Set initial state
    gsap.set(kbd.scale, { ...keyboardStates("hero").scale });
    gsap.set(kbd.position, { ...keyboardStates("hero").position });
    gsap.set(kbd.rotation, { ...keyboardStates("hero").rotation });

    // --- Timeline for Skills Section ---
    gsap.timeline({
      scrollTrigger: {
        trigger: "#skills", start: "top 50%", end: "bottom bottom", scrub: 1,
        onEnter: () => setActiveSection("skills"),
        onLeaveBack: () => setActiveSection("hero"), // Set active section immediately
        onUpdate: (self) => {
            // Ensure overwrite: "auto" is used to handle conflicting tweens
            gsap.to(kbd.scale, { ...keyboardStates("skills").scale, ease: "none", overwrite: "auto" });
            gsap.to(kbd.position, { ...keyboardStates("skills").position, ease: "none", overwrite: "auto" });
            gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, ease: "none", overwrite: "auto" });
        },
      },
    });
    ScrollTrigger.create({ // Separate trigger for animating back to hero state
        trigger: "#skills", start: "top 50%",
        onLeaveBack: () => {
             gsap.to(kbd.scale, { ...keyboardStates("hero").scale, duration: 1, overwrite: "auto" });
             gsap.to(kbd.position, { ...keyboardStates("hero").position, duration: 1, overwrite: "auto" });
             gsap.to(kbd.rotation, { ...keyboardStates("hero").rotation, duration: 1, overwrite: "auto" });
        }
    });

    // --- Timeline for Projects Section ---
     gsap.timeline({
      scrollTrigger: {
        trigger: "#projects", start: "top 70%", end: "bottom bottom", scrub: 1,
        onEnter: () => setActiveSection("projects"),
        onLeaveBack: () => setActiveSection("skills"), // Set active section immediately
         onUpdate: (self) => {
            gsap.to(kbd.scale, { ...keyboardStates("projects").scale, ease: "none", overwrite: "auto" });
            gsap.to(kbd.position, { ...keyboardStates("projects").position, ease: "none", overwrite: "auto" });
            gsap.to(kbd.rotation, { ...keyboardStates("projects").rotation, ease: "none", overwrite: "auto" });
        },
      },
    });
     ScrollTrigger.create({ // Separate trigger for animating back to skills state
        trigger: "#projects", start: "top 70%",
        onLeaveBack: () => {
             gsap.to(kbd.scale, { ...keyboardStates("skills").scale, duration: 1, overwrite: "auto" });
             gsap.to(kbd.position, { ...keyboardStates("skills").position, duration: 1, overwrite: "auto" });
             gsap.to(kbd.rotation, { ...keyboardStates("skills").rotation, duration: 1, overwrite: "auto" });
        }
    });

    // --- Timeline for Contact Section ---
     gsap.timeline({
      scrollTrigger: {
        trigger: "#contact", start: "top 30%", end: "bottom bottom", scrub: 1,
        onEnter: () => setActiveSection("contact"),
        onLeaveBack: () => setActiveSection("projects"), // Set active section immediately
         onUpdate: (self) => {
            gsap.to(kbd.scale, { ...keyboardStates("contact").scale, ease: "none", overwrite: "auto" });
            gsap.to(kbd.position, { ...keyboardStates("contact").position, ease: "none", overwrite: "auto" });
            gsap.to(kbd.rotation, { ...keyboardStates("contact").rotation, ease: "none", overwrite: "auto" });
        },
      },
    });
    ScrollTrigger.create({ // Separate trigger for animating back to projects state
        trigger: "#contact", start: "top 30%",
        onLeaveBack: () => {
             gsap.to(kbd.scale, { ...keyboardStates("projects").scale, duration: 1, overwrite: "auto" });
             gsap.to(kbd.position, { ...keyboardStates("projects").position, duration: 1, overwrite: "auto" });
             gsap.to(kbd.rotation, { ...keyboardStates("projects").rotation, duration: 1, overwrite: "auto" });
        }
    });

  };

  // --- Animation helper functions ---
   const getBongoAnimation = () => {
     if (!splineApp) return { start: () => {}, stop: () => {} };
     const framesParent = splineApp.findObjectByName("bongo-cat");
     const frame1 = splineApp.findObjectByName("frame-1");
     const frame2 = splineApp.findObjectByName("frame-2");
     if (!frame1 || !frame2 || !framesParent) return { start: () => {}, stop: () => {} };

     let interval: NodeJS.Timeout | null = null;
     const start = () => {
       if (interval) clearInterval(interval);
       let i = 0;
       framesParent.visible = true;
       interval = setInterval(() => {
         frame1.visible = i % 2 === 0;
         frame2.visible = i % 2 !== 0;
         i++;
       }, 100);
     };
     const stop = () => {
       if (interval) clearInterval(interval);
       interval = null;
       framesParent.visible = false;
       frame1.visible = false;
       frame2.visible = false;
     };
     return { start, stop };
   };

   const getKeycapsAnimation = () => {
     if (!splineApp) return { start: () => {}, stop: () => {} };

     let tweens: gsap.core.Tween[] = [];
     const removePrevTweens = () => {
       tweens.forEach((t) => t.kill());
       tweens = [];
     };

     const start = () => {
       removePrevTweens();
       Object.values(SKILLS)
         .sort(() => Math.random() - 0.5)
         .forEach((skill, idx) => {
           const keycap = splineApp.findObjectByName(skill.name);
           if (!keycap) return;
           const t = gsap.to(keycap.position, {
             y: Math.random() * 200 + 200, duration: Math.random() * 2 + 2, delay: idx * 0.6,
             repeat: -1, yoyo: true, yoyoEase: "none", ease: "elastic.out(1,0.3)",
           });
           tweens.push(t);
         });
     };

     const stop = () => {
       removePrevTweens();
       Object.values(SKILLS).forEach((skill) => {
         const keycap = splineApp.findObjectByName(skill.name);
         if (!keycap) return;
         const t = gsap.to(keycap.position, { y: 0, duration: 1, ease: "power2.out" });
         tweens.push(t);
       });
     };

     return { start, stop };
   };

  // Attempt to set font when Spline loads
  const handleSplineLoad = (app: Application) => {
    setSplineApp(app);
    bypassLoading();
    
    // 尝试设置Spline文本字体
    try {
      app.setVariable("textFont", "Special Elite");
      
      // 尝试找到文本对象并直接设置
      const textObjects = app.getAllObjects().filter(obj => 
        obj.name.includes("text") || 
        obj.name.includes("desc") ||
        obj.name.includes("heading")
      );
      
      textObjects.forEach(obj => {
        // 尝试设置字体属性 - 无法直接访问但仍尝试
        try {
          // @ts-ignore - 尝试不同的方式访问字体属性
          if (obj.text && obj.text.style) obj.text.style.fontFamily = "Special Elite";
          // @ts-ignore
          if (obj.style) obj.style.fontFamily = "Special Elite";
        } catch (e) {
          // 忽略错误
        }
      });
    } catch (e) {
      console.log("无法设置Spline字体:", e);
    }
  };

  return (
    <>
      <FontLoader />
      <Suspense fallback={<div className="fixed inset-0 bg-gray-200 z-50 flex items-center justify-center">Loading 3D Scene...</div>}>
        <div className="spline-container" style={{ width: '100%', height: '100%' }}>
          <Spline
            ref={splineContainer}
            onLoad={handleSplineLoad}
            scene="/assets/skills-keyboard.spline"
            style={{ width: '100%', height: '100%', outline: 'none' }}
          />
        </div>
      </Suspense>

      {/* 添加技能描述悬浮框 - 显示中文 */}
      {selectedSkill && activeSection === "skills" && (
        <div
          className="absolute z-10 pointer-events-none bg-black/80 dark:bg-white/80 text-white dark:text-black p-4 rounded-md shadow-lg transform -translate-x-1/2 -translate-y-full skill-tooltip"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y - 20}px`,
            maxWidth: '300px',
          }}
        >
          <h3 className="text-lg font-bold mb-1">
            {selectedSkill.label}
          </h3>
          {/* Always show Chinese description in the tooltip */}
          <p className="text-sm whitespace-pre-line">
            {zhTranslations.current.skills[selectedSkill.name as keyof typeof zhTranslations.current.skills]}
          </p>
        </div>
      )}
    </>
  );
};

export default AnimatedBackground;
