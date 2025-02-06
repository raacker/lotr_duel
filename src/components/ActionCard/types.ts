export enum RepeatType {
  None,
  Action1,
  Action2,
}

export interface Action {
  id: number;
  image: string;
  repeat: RepeatType;
}
