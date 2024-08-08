import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { voteBalanceContent } from '@/apis/balanceContent';
import { memberInfoState } from '@/recoil/atom';

interface UseSelectCompleteMutationProps {
  selectedId: number;
  contentId?: number;
}

const useSelectCompleteMutation = ({ selectedId, contentId }: UseSelectCompleteMutationProps) => {
  const { roomId } = useParams();
  const memberInfo = useRecoilValue(memberInfoState);

  return useMutation({
    mutationFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await voteBalanceContent({
        roomId: Number(roomId),
        optionId: selectedId,
        contentId,
        memberId: Number(memberInfo.memberId),
      });
    },
  });
};

export default useSelectCompleteMutation;
