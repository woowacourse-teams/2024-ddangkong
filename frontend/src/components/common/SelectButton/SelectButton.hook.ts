import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { voteBalanceContent } from '@/apis/balanceContent';

interface UseSelectCompleteMutationProps {
  selectedId: number;
  contentId?: number;
}

const useSelectCompleteMutation = ({ selectedId, contentId }: UseSelectCompleteMutationProps) => {
  const { roomId } = useParams();

  return useMutation({
    mutationFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await voteBalanceContent({
        roomId: Number(roomId),
        optionId: selectedId,
        contentId,
      });
    },
  });
};

export default useSelectCompleteMutation;
