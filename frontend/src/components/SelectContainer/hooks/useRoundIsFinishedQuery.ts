import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchRoundVoteIsFinished } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { POLLING_DELAY } from '@/constants/time';

interface UseRoundIsFinishedQueryProps {
  enabled: boolean;
  contentId?: number;
}

const useRoundIsFinishedQuery = ({ contentId, enabled }: UseRoundIsFinishedQueryProps) => {
  const { roomId } = useParams();

  const roundIsFinishedQuery = useQuery({
    queryKey: [QUERY_KEYS.roundIsFinished, Number(roomId), contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await fetchRoundVoteIsFinished({ roomId: Number(roomId), contentId });
    },
    enabled,
    refetchInterval: POLLING_DELAY,
    refetchIntervalInBackground: true,
    gcTime: 0,
  });

  return { ...roundIsFinishedQuery, isFinished: roundIsFinishedQuery.data?.isFinished };
};

export default useRoundIsFinishedQuery;
