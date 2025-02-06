"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl text-white font-bold text-center mb-8">
        Lord of the rings : Duel for Middle-Earth
      </h1>
      <h2 className="text-xl text-white font-bold text-center mb-8">
        Unofficial solo variant
      </h2>
      <div className="flex gap-4 p-4">
        <Link
          href="/select_character"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {t("common.chooseOpponent")}
        </Link>
        <Link
          href="/play"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {t("common.random")}
        </Link>
      </div>
    </div>
  );
}
