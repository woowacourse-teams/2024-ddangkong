import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { startGame } from '@/apis/room';
import { memberInfoState } from '@/recoil/atom';

export const useGameStart = (showModal: () => void) => {
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const { roomId } = useParams();

  const startGameMutation = useMutation({
    mutationFn: () => startGame(Number(roomId)),
    onError: () => {
      showModal();
    },
  });

  const handleGameStart = () => {
    if (memberInfo.isMaster) {
      startGameMutation.mutate();
    }
  };

  return { memberInfo, handleGameStart, setMemberInfo };
};
