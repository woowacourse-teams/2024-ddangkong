import { useQuery } from '@tanstack/react-query';

import { fetchFinalGameResult } from '@/apis/balanceContent';

const useGameResultQuery = () => {
  const gameResultQuery = useQuery({
    queryKey: ['gameResult'],
    queryFn: async () => await fetchFinalGameResult(),
  });

  return { ...gameResultQuery, gameResult: gameResultQuery.data };
};

export { useGameResultQuery };
