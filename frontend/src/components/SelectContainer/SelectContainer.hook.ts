import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchRoundVoteIsFinished } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';

const POLLING_DELAY = 1000;

interface UseRoundIsFinishedQueryProps {
  contentId?: number;
}

export const useRoundIsFinishedQuery = ({ contentId }: UseRoundIsFinishedQueryProps) => {
  const { roomId } = useParams();

  const roundIsFinishedQuery = useQuery({
    queryKey: [QUERY_KEYS.roundIsFinished, roomId, contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await fetchRoundVoteIsFinished({ roomId: Number(roomId), contentId });
    },
    enabled: !!contentId,
    refetchInterval: POLLING_DELAY,
    refetchIntervalInBackground: true,
  });

  return { ...roundIsFinishedQuery, isFinished: roundIsFinishedQuery.data?.finished };
};
