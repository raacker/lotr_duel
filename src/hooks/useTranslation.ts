"use client";

import { en } from "../locales/en";
import { ko } from "../locales/ko";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en,
  ko,
};

export function useTranslation() {
  const { language } = useLanguage();
  
  return {
    t: (key: string) => {
      const keys = key.split(".");
      let current: any = translations[language];

      for (const k of keys) {
        if (current[k] === undefined) {
          return key;
        }
        current = current[k];
      }

      return current;
    },
  };
}
