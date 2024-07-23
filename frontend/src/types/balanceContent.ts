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
