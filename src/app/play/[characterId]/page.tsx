"use client";

import { useEffect, useState } from "react";
import { Character } from "@/components/Character/types";
import { characters } from "@/components/Character/data";
import { CharacterCard } from "@/components/Character/CharacterCard";
import { ActionCard } from "@/components/ActionCard/ActionCard";
import { actions } from "@/components/ActionCard/data";
import { useParams } from "next/navigation";
import { Action, RepeatType } from "@/components/ActionCard/types";
import { LandmarkDecision } from "@/components/LandmarkDecision/LandmarkDecision";
import { UserTurn } from "@/components/UserTurn/UserTurn";

enum BotActionPhase {
  UserActionPhase,
  PurchaseLandmarkTile,
  PurchaseChapter,
  PurchaseChapterDone,
}

export default function PlayPage() {
  const params = useParams();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [actionSequence, setActionSequence] = useState<number[]>([]);
  const [currentActionIndex, setCurrentActionIndex] = useState<number>(0);
  const [currentAction, setCurrentAction] = useState<Action>(actions[0]);
  const [botActionPhase, setBotActionPhase] = useState<BotActionPhase>(
    BotActionPhase.PurchaseLandmarkTile
  );
  const [isBotRepeat, setIsBotRepeat] = useState<boolean>(false);
  useEffect(() => {
    if (actionSequence.length === 0) {
      const newSequence = Array.from(
        { length: actions.length },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);
      setActionSequence(newSequence);
    }
  }, [actionSequence.length]);

  useEffect(() => {
    if (currentActionIndex >= actionSequence.length) {
      const newSequence = Array.from(
        { length: actions.length },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);
      setActionSequence(newSequence);
      setCurrentActionIndex(0);
    }
    setCurrentAction(actions[actionSequence[currentActionIndex]]);
    setIsBotRepeat(false);
  }, [currentActionIndex, actionSequence.length]);

  useEffect(() => {
    const character = characters.find(
      (c) => c.id === Number(params.characterId)
    );
    if (character && !selectedCharacter) {
      setSelectedCharacter(character);
    }
  }, [params.characterId, selectedCharacter]);

  useEffect(() => {
    if (botActionPhase === BotActionPhase.PurchaseChapterDone) {
      if (selectedCharacter?.repeat_types.includes(currentAction?.repeat)) {
        setIsBotRepeat(true);
        setBotActionPhase(BotActionPhase.PurchaseLandmarkTile);
      } else {
        setBotActionPhase(BotActionPhase.UserActionPhase);
      }
    }
  }, [botActionPhase, selectedCharacter]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 max-h-[66vh] bg-background">
        <div className="h-full flex justify-center items-center p-4">
          {selectedCharacter && (
            <div className="h-full aspect-[2/3] max-w-[100%] max-h-[100%]">
              <CharacterCard character={selectedCharacter} />
            </div>
          )}
        </div>
      </div>
      <div className="h-1/3 bg-foreground/5 p-4">
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-full aspect-[5/3] max-w-[100%] max-h-[100%]">
            <div className="h-full w-full flex gap-4 items-center">
              <div className="h-full w-full flex items-center justify-center">
                {botActionPhase === BotActionPhase.UserActionPhase && (
                  <UserTurn
                    onTurnEnd={() =>
                      setBotActionPhase(BotActionPhase.PurchaseLandmarkTile)
                    }
                  />
                )}
                {botActionPhase === BotActionPhase.PurchaseLandmarkTile && (
                  <LandmarkDecision
                    isBotRepeat={isBotRepeat}
                    onLandmarkPurchased={(purchased) => {
                      if (purchased) {
                        setBotActionPhase(BotActionPhase.UserActionPhase);
                      } else {
                        setBotActionPhase(BotActionPhase.PurchaseChapter);
                      }
                    }}
                  />
                )}
                {botActionPhase === BotActionPhase.PurchaseChapter && (
                  <ActionCard
                    action={actions[actionSequence[currentActionIndex]]}
                    onActionSelect={() => {
                      setBotActionPhase(BotActionPhase.PurchaseChapterDone);
                      setCurrentActionIndex(currentActionIndex + 1);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
