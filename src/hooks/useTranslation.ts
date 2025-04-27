"use client";

import { useLanguage } from "@/contexts/language";
import { translations } from "@/data/translations";
import { useEffect, useState } from "react";

function useTranslation() {
  const { language, forceRender } = useLanguage();
  // Track active language to force re-render when it changes
  const [activeLanguage, setActiveLanguage] = useState(language);
  
  useEffect(() => {
    if (language !== activeLanguage) {
      setActiveLanguage(language);
    }
  }, [language, forceRender, activeLanguage]);
  
  function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    return value;
  }
  
  return { t, language: activeLanguage };
}

export default useTranslation; 