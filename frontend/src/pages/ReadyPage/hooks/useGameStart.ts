import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { startGame } from '@/apis/room';
import { memberInfoState } from '@/recoil/atom';

export const useGameStart = () => {
  const memberInfo = useRecoilValue(memberInfoState);
  const { roomId } = useParams();

  const startGameMutation = useMutation({
    mutationFn: () => startGame(Number(roomId)),
  });

  const handleGameStart = () => {
    if (memberInfo.isMaster) {
      startGameMutation.mutate();
    }
  };

  return { isMaster: memberInfo.isMaster, handleGameStart };
};
