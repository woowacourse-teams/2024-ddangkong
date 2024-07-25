export interface BalanceContent {
  contentId: number;
  category: string;
  question: string;
  totalRound: number;
  currentRound: number;
  firstOption: {
    optionId: number;
    name: string;
  };
  secondOption: {
    optionId: number;
    name: string;
  };
}

export interface GameFinalResult {
  rank: number;
  name: string;
  percent: number;
}
