"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language";
import useTranslation from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, forceRender } = useLanguage();
  const { t } = useTranslation();
  const [currentLabel, setCurrentLabel] = useState("");

  // Update the label whenever language changes
  useEffect(() => {
    setCurrentLabel(t("language.switch"));
  }, [language, forceRender, t]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "zh" : "en";
    console.log(`Switching language from ${language} to ${newLanguage}`);
    setLanguage(newLanguage);
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLanguage} 
      className={cn("px-2 text-sm", className)}
    >
      {currentLabel}
    </Button>
  );
} 