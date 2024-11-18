import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { voteBalanceContent } from '@/apis/balanceContent';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import useThrottle from '@/hooks/useThrottle';

interface UseSelectCompleteMutationProps {
  selectedId: number;
  completeSelection: () => void;
  contentId?: number;
}

const useCompleteSelectionMutation = ({
  selectedId,
  contentId,
  completeSelection,
}: UseSelectCompleteMutationProps) => {
  const { roomId } = useParams();
  const {
    member: { memberId },
  } = useGetUserInfo();

  const completeSelectionMutation = useMutation({
    mutationFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await voteBalanceContent({
        roomId: Number(roomId),
        optionId: selectedId,
        contentId,
        memberId: Number(memberId),
      });
    },
    onMutate: () => {
      completeSelection();
    },
  });

  const throttledVote = useThrottle(completeSelectionMutation.mutate);

  return { ...completeSelectionMutation, vote: throttledVote };
};

export default useCompleteSelectionMutation;
