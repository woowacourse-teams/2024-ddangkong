import { useQuery, UseQueryResult } from '@tanstack/react-query';

import INITIAL_VALUE from '../mocks/data/roundVoteResultInitialValue.json';

import { fetchRoundVoteResult } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { Group, RoundVoteResult, Total } from '@/types/roundVoteResult';

interface UseRoundVoteResultQueryProps {
  roomId: number;
  contentId?: number;
}

type RoundVoteResultQueryResponse = UseQueryResult<RoundVoteResult, Error> & {
  groupRoundResult?: Group;
  totalResult?: Total;
};

const useRoundVoteResultQuery = ({
  roomId,
  contentId,
}: UseRoundVoteResultQueryProps): RoundVoteResultQueryResponse => {
  const roundVoteResultQuery = useQuery({
    queryKey: [QUERY_KEYS.roundVoteResult, roomId, contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      if (typeof roomId === 'undefined') {
        throw new Error('방이 존재하지 않습니다.');
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
