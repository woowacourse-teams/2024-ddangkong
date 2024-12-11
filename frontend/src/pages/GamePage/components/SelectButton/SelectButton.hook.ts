import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { voteBalanceContent } from '@/apis/balanceContent';
import useDefaultMutationErrorHandler from '@/hooks/useDefaultMutationErrorHandler';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import useThrottle from '@/hooks/useThrottle';

interface UseSelectCompleteMutationProps {
  selectedId: number;
  contentId: number;
  completeSelection: () => void;
  cancelSelection: () => void;
}

const useCompleteSelectionMutation = ({
  selectedId,
  contentId,
  completeSelection,
  cancelSelection,
}: UseSelectCompleteMutationProps) => {
  const { roomId } = useParams();
  const {
    member: { memberId },
  } = useGetUserInfo();
  const handleError = useDefaultMutationErrorHandler();

  const completeSelectionMutation = useMutation({
    mutationFn: async () =>
      await voteBalanceContent({
        roomId: Number(roomId),
        optionId: selectedId,
        contentId,
        memberId: Number(memberId),
      }),
    onMutate: () => {
      completeSelection();
    },
    onError: (error) => {
      cancelSelection();
      handleError(error);
    },
  });

  const throttledVote = useThrottle(completeSelectionMutation.mutate);

  return { ...completeSelectionMutation, vote: throttledVote };
};

export default useCompleteSelectionMutation;
