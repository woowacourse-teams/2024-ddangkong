export interface BalanceContent {
  contentId: number;
  category: string;
  question: string;
  timeLimit: number;
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

export interface MyGameStatus {
  isRoundFinished: boolean;
  isGameFinished: boolean;
}

export interface MemberMatchingInfo {
  memberId: number;
  nickname: string;
  matchingPercent: number;
}
