"use client";

import { useState } from "react";
import Link from "next/link";
import { Character } from "@/components/Character/types";
import { characters } from "@/components/Character/data";
import { CharacterCard } from "@/components/Character/CharacterCard";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
export default function SelectCharacter() {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-white font-bold text-center mb-8">
        {t("common.chooseOpponent")}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={selectedCharacter?.id === character.id}
            onClick={setSelectedCharacter}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href={selectedCharacter ? `/play/${selectedCharacter.id}` : "#"}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all
            ${
              selectedCharacter
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          {t("common.start")}
        </Link>
      </div>
    </div>
  );
}
