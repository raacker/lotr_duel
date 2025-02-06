import { RepeatType } from "../ActionCard/types";

export interface Character {
  id: number;
  name: string;
  image: string;
  repeat_types: RepeatType[];
}
