import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { fetchMatchingResult } from '@/apis/balanceContent';
import { resetRoom } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { memberInfoState } from '@/recoil/atom';
import { MatchingResult, MemberMatchingInfo } from '@/types/balanceContent';

type MatchingResultQueryResponse = UseQueryResult<MatchingResult, Error> & {
  matchedMembers?: MemberMatchingInfo[];
  existMatching?: boolean;
};

export const useMatchingResultQuery = (): MatchingResultQueryResponse => {
  const { roomId } = useParams();
  const memberInfo = useRecoilValue(memberInfoState);

  const matchingResultQuery = useQuery({
    queryKey: [QUERY_KEYS.matchingResult, roomId, memberInfo.memberId],
    queryFn: async () => {
      if (!memberInfo.memberId) {
        throw new Error('Member ID is required');
      }
      return await fetchMatchingResult({ roomId: Number(roomId), memberId: memberInfo.memberId });
    },
  });

  return {
    ...matchingResultQuery,
    matchedMembers: matchingResultQuery.data?.matchedMembers,
    existMatching: matchingResultQuery.data?.existMatching,
  };
};

export const useResetRoomMutation = (roomId: number) => {
  return useMutation({
    mutationFn: async () => await resetRoom(roomId),
  });
};
