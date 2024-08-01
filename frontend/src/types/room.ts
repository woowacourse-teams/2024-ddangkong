interface Member {
  memberId: number;
  nickname: string;
  isMaster: boolean;
}

export interface RoomAndMember {
  roomId: number;
  member: Member;
}

export interface RoomMembers {
  members: Member[];
}
