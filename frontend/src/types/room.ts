interface Member {
  memberId: number;
  nickname: string;
  isMaster: boolean;
}

interface RoomSetting {
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
  member: Member;
}
