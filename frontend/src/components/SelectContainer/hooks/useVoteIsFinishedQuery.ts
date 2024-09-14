import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchVoteIsFinished } from '@/apis/balanceContent';
import { POLLING_DELAY } from '@/constants/config';
import { QUERY_KEYS } from '@/constants/queryKeys';

interface UseVoteIsFinishedQueryProps {
  enabled: boolean;
  contentId?: number;
}

const useVoteIsFinishedQuery = ({ contentId, enabled }: UseVoteIsFinishedQueryProps) => {
  const { roomId } = useParams();

  const voteIsFinishedQuery = useQuery({
    queryKey: [QUERY_KEYS.roundIsFinished, Number(roomId), contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await fetchVoteIsFinished({ roomId: Number(roomId), contentId });
    },
    enabled,
    refetchInterval: POLLING_DELAY,
    refetchIntervalInBackground: true,
    gcTime: 0,
  });

  return { ...voteIsFinishedQuery, isFinished: voteIsFinishedQuery.data?.isFinished };
};

export default useVoteIsFinishedQuery;
