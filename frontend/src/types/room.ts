interface Member {
  memberId: number;
  nickname: string;
  isMaster: boolean;
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
}

export interface RoomMembers {
  members: Member[];
}

export interface CreateOrEnterRoomResponse {
  roomId: number;
  roomUuid: string;
  member: Member;
}

export type Category = '음식' | '연애' | 'MBTI' | '만약에';
