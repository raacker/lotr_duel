"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { characters } from "@/components/Character/data";

export default function CharacterSelectPage() {
  const router = useRouter();

  useEffect(() => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    router.push(`/play/${randomCharacter.id}`);
  }, [router]);

  return <div className="container mx-auto px-4 py-8">리다이렉트 중...</div>;
}
