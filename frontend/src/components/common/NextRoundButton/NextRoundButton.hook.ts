import { useMutation } from '@tanstack/react-query';

import { moveNextRound } from '@/apis/balanceContent';

const useMoveNextRoundMutation = (roomId?: number) => {
  return useMutation({
    mutationFn: async () => await moveNextRound(Number(roomId)),
  });
};

export default useMoveNextRoundMutation;
