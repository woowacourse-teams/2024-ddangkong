import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchMatchingResult } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import { MatchingResult, MemberMatchingInfo } from '@/types/balanceContent';

type MatchingResultQueryResponse = UseQueryResult<MatchingResult, Error> & {
  matchedMembers?: MemberMatchingInfo[];
  existMatching?: boolean;
};

const useMatchingResultQuery = (): MatchingResultQueryResponse => {
  const { roomId } = useParams();
  const {
    member: { memberId },
  } = useGetUserInfo();

  const matchingResultQuery = useQuery({
    queryKey: [QUERY_KEYS.matchingResult, roomId, memberId],
    queryFn: async () => {
      if (!memberId) {
        throw new Error('Member ID is required');
      }
      return await fetchMatchingResult({ roomId: Number(roomId), memberId: memberId });
    },
  });

  return {
    ...matchingResultQuery,
    matchedMembers: matchingResultQuery.data?.matchedMembers,
    existMatching: matchingResultQuery.data?.existMatching,
  };
};

export default useMatchingResultQuery;
