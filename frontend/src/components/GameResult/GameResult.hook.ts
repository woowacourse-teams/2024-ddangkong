import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import AlertModal from '../common/AlertModal/AlertModal';

import { fetchMatchingResult } from '@/apis/balanceContent';
import { resetRoom } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import useGetmember from '@/hooks/useGetmember';
import useModal from '@/hooks/useModal';
import { MatchingResult, MemberMatchingInfo } from '@/types/balanceContent';
import { CustomError } from '@/utils/error';

type MatchingResultQueryResponse = UseQueryResult<MatchingResult, Error> & {
  matchedMembers?: MemberMatchingInfo[];
  existMatching?: boolean;
};

export const useMatchingResultQuery = (): MatchingResultQueryResponse => {
  const { roomId } = useParams();
  const {
    member: { memberId },
  } = useGetmember();

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

export const useResetRoomMutation = (roomId: number) => {
  const { show: showModal } = useModal();

  return useMutation({
    mutationFn: async () => await resetRoom(roomId),
    onError: (error: CustomError) => {
      showModal(AlertModal, { title: '방 초기화 에러', message: error.message });
    },
  });
};
