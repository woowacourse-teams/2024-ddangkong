import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { startGame } from '@/apis/room';
import useIsMaster from '@/hooks/useIsMaster';

const useGameStart = () => {
  const isMaster = useIsMaster();
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

export default useGameStart;
