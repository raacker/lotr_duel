"use client";

import "../../styles/actionCard.css";
import { useTranslation } from "@/hooks/useTranslation";

interface UserTurnProps {
  onTurnEnd?: () => void;
}

export function UserTurn({ onTurnEnd }: UserTurnProps) {
  const { t } = useTranslation();

  return (
    <div className="action-card" onClick={onTurnEnd}>
      <div className="h-full flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-800 bg-white/80 px-6 py-3 rounded-lg shadow-lg">
          {t("common.yourTurn")}
        </span>
      </div>
    </div>
  );
}
