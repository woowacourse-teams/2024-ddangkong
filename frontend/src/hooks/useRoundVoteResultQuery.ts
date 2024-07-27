import { useQuery } from '@tanstack/react-query';

import INITIAL_VALUE from '../mocks/data/roundVoteResultInitialValue.json';

import { fetchRoundVoteResult } from '@/apis/balanceContent';

interface UseRoundVoteResultQueryProps {
  roomId: number;
  contentId?: number;
}

const useRoundVoteResultQuery = ({ roomId, contentId }: UseRoundVoteResultQueryProps) => {
  const roundVoteResultQuery = useQuery({
    queryKey: ['roundVoteResult', roomId, contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }
      return await fetchRoundVoteResult({ roomId, contentId });
    },
    placeholderData: INITIAL_VALUE,
    enabled: !!contentId,
  });

  return {
    ...roundVoteResultQuery,
    groupRoundResult: roundVoteResultQuery.data?.group,
    totalResult: roundVoteResultQuery.data?.total,
  };
};

export default useRoundVoteResultQuery;
