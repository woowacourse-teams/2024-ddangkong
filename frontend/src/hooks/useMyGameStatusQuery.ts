import { useQuery } from '@tanstack/react-query';

import { checkMyGameStatus } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { BalanceContent } from '@/types/balanceContent';

interface useMyGameStatusQueryProps {
  balanceContent: BalanceContent | undefined;
  roomId: number;
}

const useMyGameStatusQuery = ({ roomId, balanceContent }: useMyGameStatusQueryProps) => {
  const myGameStatusQuery = useQuery({
    queryKey: [QUERY_KEYS.myGameStatus, balanceContent, roomId, balanceContent?.currentRound],
    queryFn: () => {
      if (!balanceContent) {
        throw new Error('balanceContent 가 존재하지 않습니다.');
      }
      return checkMyGameStatus({
        roomId: roomId,
        currentRound: balanceContent.currentRound,
      });
    },
    enabled: !!balanceContent,
    staleTime: 0,
    refetchInterval: 1000,
    refetchOnWindowFocus: true,
  });

  return {
    ...myGameStatusQuery,
    isRoundFinished: myGameStatusQuery.data?.isRoundFinished,
    isGameFinished: myGameStatusQuery.data?.isGameFinished,
  };
};

export default useMyGameStatusQuery;
