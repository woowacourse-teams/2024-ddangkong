export interface RoundVoteResult {
  group: Group;
  total: Total;
}

export interface Group {
  firstOption: GroupOption;
  secondOption: GroupOption;
  giveUp: GroupMembersAndMemberCount;
}

export interface Total {
  firstOption: TotalOption;
  secondOption: TotalOption;
}

export interface GroupOption extends TotalOption {
  members: string[];
  memberCount: number;
}

export type GroupMembersAndMemberCount = Pick<GroupOption, 'members' | 'memberCount'>;

export interface TotalOption {
  optionId: number;
  name: string;
  percent: number;
}
