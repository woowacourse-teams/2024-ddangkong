import { useRecoilValue } from 'recoil';

import { memberInfoState } from '@/recoil/atom';

export const useGameStart = () => {
  const memberInfo = useRecoilValue(memberInfoState);

  const handleGameStart = () => {
    if (memberInfo.isMaster) {
      // TODO: 게임 시작 API 연결 예정
      alert('Game Start');
    }
  };

  return { isMaster: memberInfo.isMaster, handleGameStart };
};
