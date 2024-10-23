import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import AlertModal from '../AlertModal/AlertModal';

import { voteBalanceContent } from '@/apis/balanceContent';
import useGetmember from '@/hooks/useGetmember';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { CustomError, NetworkError } from '@/utils/error';

const isServerError = (status: number) => status >= 500 && status !== 555;

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
  } = useGetmember();
  const { show } = useToast();
  const { show: showModal } = useModal();
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
    onError: (error: CustomError) => {
      if (error instanceof NetworkError) {
        show(error.message);
        return;
      }

      showModal(AlertModal, { title: '선택 에러', message: error.message });
    },
    networkMode: 'always',
    throwOnError: (error: CustomError) => isServerError(error.status),
  });
};

export default useCompleteSelectionMutation;
