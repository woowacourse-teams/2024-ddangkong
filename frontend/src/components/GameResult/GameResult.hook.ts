import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchFinalGameResult } from '@/apis/balanceContent';
import { GameFinalResult } from '@/types/balanceContent';

type GameResultQueryResponse = UseQueryResult<GameFinalResult[], Error> & {
  gameResult?: GameFinalResult[];
};

const useGameResultQuery = (): GameResultQueryResponse => {
  const gameResultQuery = useQuery({
    queryKey: ['gameResult'],
    queryFn: async () => await fetchFinalGameResult(),
  });

  return { ...gameResultQuery, gameResult: gameResultQuery.data };
};

export { useGameResultQuery };
