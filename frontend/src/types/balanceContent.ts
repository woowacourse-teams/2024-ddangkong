export interface BalanceContent {
  contentId: number;
  category: string;
  question: string;
  firstOption: {
    optionId: number;
    name: string;
  };
  secondOption: {
    optionId: number;
    name: string;
  };
}
