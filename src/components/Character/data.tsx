import { RepeatType } from "../ActionCard/types";
import { Character } from "./types";

export const characters: Character[] = [
  {
    id: 1,
    name: "Witch King",
    image: "/characters/witch_king.png",
    repeat_types: [RepeatType.Action1],
  },
  {
    id: 2,
    name: "Galadriel",
    image: "/characters/galadriel.png",
    repeat_types: [RepeatType.Action1],
  },
  {
    id: 3,
    name: "Tom Bombadil",
    image: "/characters/tom_bombadil.png",
    repeat_types: [],
  },
  {
    id: 4,
    name: "Saruman",
    image: "/characters/saruman.png",
    repeat_types: [RepeatType.Action2],
  },
  {
    id: 5,
    name: "Elrond",
    image: "/characters/elrond.png",
    repeat_types: [RepeatType.Action2],
  },
  { id: 6, name: "Smaug", image: "/characters/smaug.png", repeat_types: [] },
  {
    id: 7,
    name: "Sauron",
    image: "/characters/sauron.png",
    repeat_types: [RepeatType.Action1, RepeatType.Action2],
  },
  {
    id: 8,
    name: "Gandalf",
    image: "/characters/gandalf.png",
    repeat_types: [RepeatType.Action1, RepeatType.Action2],
  },
  {
    id: 9,
    name: "Eowyn's Stew",
    image: "/characters/eowyns_stew.png",
    repeat_types: [RepeatType.Action1, RepeatType.Action2],
  },
];
