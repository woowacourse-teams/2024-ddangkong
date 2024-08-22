import { useQuery } from '@tanstack/react-query';

import { checkMyGameStatus } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ONE_SECOND } from '@/constants/time';

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
    refetchInterval: ONE_SECOND,
  });

  return {
    ...myGameStatusQuery,
    isRoundFinished: myGameStatusQuery.data?.isRoundFinished,
    isGameFinished: myGameStatusQuery.data?.isGameFinished,
  };
};

export default useMyGameStatusQuery;
