import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { startGame } from '@/apis/room';
import useGetUserInfo from '@/hooks/useGetUserInfo';

export const useGameStart = () => {
  const {
    member: { isMaster },
  } = useGetUserInfo();
  const { roomId } = useParams();

  const startGameMutation = useMutation({
    mutationFn: () => startGame(Number(roomId)),
  });

  const handleGameStart = () => {
    if (isMaster) {
      startGameMutation.mutate();
    }
  };

  return { isMaster, handleGameStart, ...startGameMutation };
};
