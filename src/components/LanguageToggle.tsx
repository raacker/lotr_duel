"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 초기 렌더링 시에는 아무것도 보여주지 않음
  }

  return (
    <button
      onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
      className="px-3 py-1 bg-gray-200 rounded-lg text-sm"
    >
      {language === "ko" ? "EN" : "KO"}
    </button>
  );
}
