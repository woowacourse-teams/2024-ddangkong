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

export interface MatchingResult {
  matchedMembers: MemberMatchingInfo[];
  existMatching: boolean;
}

export interface MemberMatchingInfo {
  rank: number;
  memberId: number;
  nickname: string;
  matchingPercent: number;
}

export interface SelectedOption {
  id: number;
  isVoted: boolean;
}
