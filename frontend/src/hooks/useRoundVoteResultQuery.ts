import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import INITIAL_VALUE from '../mocks/data/roundVoteResultInitialValue.json';

import { fetchRoundVoteResult } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { Group, RoundVoteResult, Total } from '@/types/roundVoteResult';

interface UseRoundVoteResultQueryProps {
  contentId?: number;
}

type RoundVoteResultQueryResponse = UseQueryResult<RoundVoteResult, Error> & {
  groupRoundResult?: Group;
  totalResult?: Total;
};

const useRoundVoteResultQuery = ({
  contentId,
}: UseRoundVoteResultQueryProps): RoundVoteResultQueryResponse => {
  const { roomId } = useParams();

  const roundVoteResultQuery = useQuery({
    queryKey: [QUERY_KEYS.roundVoteResult, roomId, contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      if (typeof roomId === 'undefined') {
        throw new Error('방이 존재하지 않습니다.');
      }

      return await fetchRoundVoteResult({ roomId: Number(roomId), contentId });
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
