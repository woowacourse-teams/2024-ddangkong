export interface RoundVoteResult {
  group: Group;
  total: Total;
}

export interface Group {
  firstOption: GroupOption;
  secondOption: GroupOption;
}

export interface Total {
  firstOption: AverageOption;
  secondOption: AverageOption;
}

export interface GroupOption {
  optionId: number;
  name: string;
  members: string[];
  memberCount: number;
  percent: number;
}

export interface AverageOption {
  optionId: number;
  name: string;
  percent: number;
}
