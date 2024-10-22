import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { startGame } from '@/apis/room';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import useGetmember from '@/hooks/useGetmember';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { CustomError, NetworkError } from '@/utils/error';

const isServerError = (status: number) => status >= 500 && status !== 555;

export const useGameStart = () => {
  const {
    member: { isMaster },
  } = useGetmember();
  const { roomId } = useParams();
  const { show } = useToast();
  const { show: showModal } = useModal();

  const startGameMutation = useMutation({
    mutationFn: () => startGame(Number(roomId)),
    onError: (error: CustomError) => {
      if (error instanceof NetworkError) {
        show(error.message);
        return;
      }

      showModal(AlertModal, { title: '게임 시작 에러', message: error.message });
    },
    networkMode: 'always',
    throwOnError: (error: CustomError) => isServerError(error.status),
  });

  const handleGameStart = () => {
    if (isMaster) {
      startGameMutation.mutate();
    }
  };

  return { isMaster, handleGameStart };
};
