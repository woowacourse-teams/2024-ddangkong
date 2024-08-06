import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { startGame } from '@/apis/room';
import { memberInfoState } from '@/recoil/atom';

export const useGameStart = () => {
  const memberInfo = useRecoilValue(memberInfoState);
  const { roomId } = useParams();

  const startGameMutate = useMutation({
    mutationFn: () => startGame(Number(roomId)),
  });

  const handleGameStart = () => {
    if (memberInfo.isMaster) {
      startGameMutate.mutate();
    }
  };

  return { isMaster: memberInfo.isMaster, handleGameStart };
};
