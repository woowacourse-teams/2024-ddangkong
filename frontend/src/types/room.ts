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

export interface RoomIdAndMember {
  roomId: number;

  // 초대링크 생성용으로 roomUuid를 사용, 방장만 필요한 값
  roomUuid?: string;
  member: Member;
}

export type Category = '음식' | '연애' | 'MBTI' | '만약에';
