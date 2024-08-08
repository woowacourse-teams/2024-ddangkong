import { atom } from 'recoil';

interface MemberInfoState {
  memberId: number | null;
  nickname: string | null;
  isMaster: boolean;
}

export const memberInfoState = atom<MemberInfoState>({
  key: 'memberInfo',
  default: {
    memberId: null,
    nickname: null,
    isMaster: false,
  },
});
