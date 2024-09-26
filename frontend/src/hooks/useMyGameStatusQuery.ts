import { useQuery } from '@tanstack/react-query';

import { checkMyGameStatus } from '@/apis/balanceContent';
import { POLLING_DELAY, POLLING_ERROR_FAILURE_COUNT } from '@/constants/config';
import { QUERY_KEYS } from '@/constants/queryKeys';

interface useMyGameStatusQueryProps {
  currentRound: number | undefined;
  roomId: number;
}

const useMyGameStatusQuery = ({ roomId, currentRound }: useMyGameStatusQueryProps) => {
  const myGameStatusQuery = useQuery({
    queryKey: [QUERY_KEYS.myGameStatus, roomId, currentRound],
    queryFn: () => {
      if (!currentRound) {
        throw new Error('balanceContent 가 존재하지 않습니다.');
      }
      return checkMyGameStatus({
        roomId: roomId,
        currentRound: currentRound,
      });
    },
    enabled: !!currentRound,
    refetchInterval: (query) => {
      if (query.state.error && query.state.fetchFailureCount >= POLLING_ERROR_FAILURE_COUNT) {
        return false;
      }
      return POLLING_DELAY;
    },
    refetchIntervalInBackground: true,
    gcTime: 0,
  });

  return {
    ...myGameStatusQuery,
    isRoundFinished: myGameStatusQuery.data?.isRoundFinished,
    isGameFinished: myGameStatusQuery.data?.isGameFinished,
  };
};

export default useMyGameStatusQuery;
