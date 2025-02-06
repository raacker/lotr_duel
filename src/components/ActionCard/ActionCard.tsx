import { Action } from "./types";
import Image from "next/image";
import "../../styles/actionCard.css";

interface ActionCardProps {
  action?: Action;
  isLoading?: boolean;
  onActionSelect?: () => void;
}

export function ActionCard({
  action,
  isLoading = false,
  onActionSelect,
}: ActionCardProps) {
  return (
    <div className="action-card" onClick={onActionSelect}>
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-48 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </div>
      ) : action ? (
        <>
          <div className="relative h-full w-full">
            <Image
              src={action.image}
              alt={`${action.id}`}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
