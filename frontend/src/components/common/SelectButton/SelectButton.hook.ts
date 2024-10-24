import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { voteBalanceContent } from '@/apis/balanceContent';
import useGetUserInfo from '@/hooks/useGetUserInfo';

interface UseSelectCompleteMutationProps {
  selectedId: number;
  contentId?: number;
  completeSelection: () => void;
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

  return useMutation({
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
    onSuccess: () => {
      completeSelection();
    },
  });
};

export default useCompleteSelectionMutation;
