"use client";

import Dice from "react-dice-roll";
import "../../styles/actionCard.css";
import { useTranslation } from "@/hooks/useTranslation";

interface ActionCardProps {
  onLandmarkPurchased?: (purchased: boolean) => void;
  isBotRepeat?: boolean;
}

export function LandmarkDecision({
  onLandmarkPurchased,
  isBotRepeat,
}: ActionCardProps) {
  const { t } = useTranslation();
  const handleLandmarkPurchase = (purchased: boolean) => {
    if (onLandmarkPurchased) {
      onLandmarkPurchased(purchased);
    }
  };

  return (
    <div className="action-card">
      <div className="relative h-full w-full flex flex-col items-center justify-center space-y-6 md:space-y-10">
        <div className="flex space-x-4">
          {isBotRepeat && (
            <p className="font-bold text-red-700 text-sm md:text-base">
              {t("common.repeat")}
            </p>
          )}
          <p className="text-base md:text-xl font-bold text-gray-700 text-center">
            {t("bot.landmarkPurchase")}
            <br />
            {t("bot.findLandmark")}
          </p>
        </div>
        <Dice size={80} />
        <div className="flex space-x-8 md:space-x-20">
          <button
            className="px-3 py-3 md:px-4 md:py-4 bg-red-500 text-white text-bold text-base md:text-xl rounded-lg hover:bg-red-600 transition-colors"
            onClick={() => handleLandmarkPurchase(true)}
          >
            {t("common.purchased")}
          </button>
          <button
            className="px-3 py-3 md:px-4 md:py-4 bg-green-600 text-white text-bold text-base md:text-xl rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => handleLandmarkPurchase(false)}
          >
            {t("common.notPurchased")}
          </button>
        </div>
      </div>
    </div>
  );
}
