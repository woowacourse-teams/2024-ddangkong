export interface RoundVoteResult {
  group: Group;
  total: Total;
}

export interface Group {
  firstOption: GroupOption;
  secondOption: GroupOption;
}

export interface Total {
  firstOption: TotalOption;
  secondOption: TotalOption;
}

export interface GroupOption extends TotalOption {
  members: string[];
  memberCount: number;
}

export interface TotalOption {
  optionId: number;
  name: string;
  percent: number;
}