import Image from "next/image";
import { Character } from "./types";
import "../../styles/actionCard.css";

interface CharacterCardProps {
  character: Character;
  isSelected?: boolean;
  onClick?: (character: Character) => void;
}

export function CharacterCard({
  character,
  isSelected = false,
  onClick,
}: CharacterCardProps) {
  return (
    <div
      className={`
        no-select relative p-6 rounded-lg cursor-pointer transition-all
        ${
          isSelected
            ? "bg-blue-100 border-2 border-blue-500"
            : "bg-gray-100 hover:bg-gray-200"
        }
      `}
      onClick={() => onClick?.(character)}
    >
      <div
        className="relative h-[calc(100%-2rem)]"
        style={{ paddingTop: "152.7%" }}
      >
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
