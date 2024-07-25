import { useMutation, useQueryClient } from '@tanstack/react-query';

import { moveNextRound } from '@/apis/balanceContent';

const useMoveNextRoundMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await moveNextRound(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balanceContent'] });
    },
  });
};

export { useMoveNextRoundMutation };
