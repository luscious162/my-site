"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  forceRender: number;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  forceRender: 0
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with default English
  const [language, setLanguage] = useState<Language>("en");
  // Add a counter to force re-renders when language changes
  const [forceRender, setForceRender] = useState(0);

  useEffect(() => {
    // Get language from localStorage if available
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh")) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Increment counter to force re-render of all components that use this context
    setForceRender(prev => prev + 1);
    
    try {
      localStorage.setItem("language", newLanguage);
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
    if (document.documentElement) {
      document.documentElement.lang = newLanguage;
    }
  };

  // This value object will always be a new reference when language changes
  // causing all consumers to re-render
  const contextValue = {
    language,
    setLanguage: handleSetLanguage,
    forceRender
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}; 