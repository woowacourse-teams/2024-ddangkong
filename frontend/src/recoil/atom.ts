import { atom } from 'recoil';

export const memberInfoState = atom({
  key: 'memberInfo',
  default: {
    memberId: null,
    nickname: null,
    isMaster: false,
  },
});
