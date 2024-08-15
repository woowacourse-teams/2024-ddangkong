import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchFinalGameResult } from '@/apis/balanceContent';
import { resetRoom } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { GameFinalResult } from '@/types/balanceContent';

type GameResultQueryResponse = UseQueryResult<GameFinalResult[], Error> & {
  gameResult?: GameFinalResult[];
};

export const useGameResultQuery = (): GameResultQueryResponse => {
  const { roomId } = useParams();

  const gameResultQuery = useQuery({
    queryKey: [QUERY_KEYS.gameResult, roomId],
    queryFn: async () => await fetchFinalGameResult(Number(roomId)),
  });

  return { ...gameResultQuery, gameResult: gameResultQuery.data };
};

export const useResetRoomMutation = (roomId: number) => {
  return useMutation({
    mutationFn: async () => await resetRoom(roomId),
  });
};
