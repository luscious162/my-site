"use client";

import { useLanguage } from "@/contexts/language";
import { useEffect } from "react";

export default function LanguageHtmlAttribute() {
  const { language } = useLanguage();
  
  useEffect(() => {
    if (document.documentElement) {
      document.documentElement.lang = language;
    }
  }, [language]);
  
  return null;
} 