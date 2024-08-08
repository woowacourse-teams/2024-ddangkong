import { useMutation, useQueryClient } from '@tanstack/react-query';

import { moveNextRound } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';

const useMoveNextRoundMutation = (roomId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await moveNextRound(roomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.balanceContent] });
    },
  });
};

export default useMoveNextRoundMutation;
