export interface GroupMemberInfo {
  members: string[];
  memberCount: number;
}

export interface RoundVoteResult {
  group: Group;
  total: Total;
}

export interface Group {
  firstOption: GroupOption;
  secondOption: GroupOption;
  giveUp: GroupMemberInfo;
}

export interface Total {
  firstOption: TotalOption;
  secondOption: TotalOption;
}

export interface GroupOption extends TotalOption, GroupMemberInfo {}

export interface TotalOption {
  optionId: number;
  name: string;
  percent: number;
}
