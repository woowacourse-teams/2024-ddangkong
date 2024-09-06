interface Member {
  memberId: number;
  nickname: string;
  isMaster: boolean;
}

export interface RoomSettingApply {
  category: CategoryValue;
  totalRound: number;
  timeLimit: number;
}

export interface RoomSetting {
  category: Category;
  totalRound: number;
  timeLimit: number;
}

export interface RoomInfo {
  isGameStart: boolean;
  roomSetting: RoomSetting;
  members: Member[];
  master: Omit<Member, 'isMaster'>;
}

export interface RoomMembers {
  members: Member[];
}

export interface CreateOrEnterRoomResponse {
  roomId: number;
  roomUuid: string;
  member: Member;
}

export type CategoryLabel = '음식' | '연애' | 'MBTI' | '만약에';
export type CategoryValue = 'FOOD' | 'ROMANCE' | 'MBTI' | 'IF';

export interface Category {
  value: CategoryValue;
  label: CategoryLabel;
}
