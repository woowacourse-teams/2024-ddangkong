import { useMutation } from '@tanstack/react-query';

import { stopGame } from '@/apis/room';

const useStopGameMutation = (roomId: number) => {
  return useMutation({
    mutationFn: () => stopGame(roomId),
  });
};

export default useStopGameMutation;
