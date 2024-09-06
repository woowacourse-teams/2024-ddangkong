import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { startGame } from '@/apis/room';
import useToast from '@/hooks/useToast';
import { memberInfoState } from '@/recoil/atom';
import { CustomError, NetworkError } from '@/utils/error';

const isServerError = (status: number) => status >= 500 && status !== 555;

export const useGameStart = (showModal: () => void) => {
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const { roomId } = useParams();
  const { show } = useToast();

  const startGameMutation = useMutation({
    mutationFn: () => startGame(Number(roomId)),
    onError: (error: CustomError) => {
      if (error instanceof NetworkError) {
        show(error.message);
        return;
      }

      showModal();
    },
    networkMode: 'always',
    throwOnError: (error: CustomError) => isServerError(error.status),
  });

  const handleGameStart = () => {
    if (memberInfo.isMaster) {
      startGameMutation.mutate();
    }
  };

  return { memberInfo, handleGameStart, setMemberInfo };
};
