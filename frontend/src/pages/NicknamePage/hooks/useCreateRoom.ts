import { useMutation } from '@tanstack/react-query';
import { RefObject } from 'react';
import { useNavigate } from 'react-router-dom';

import { createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import useThrottle from '@/hooks/useThrottle';
import { CreateOrEnterRoomResponse } from '@/types/room';
import { CustomError } from '@/utils/error';

interface useCreateRoomProps {
  nicknameInputRef: RefObject<HTMLInputElement>;
}

const useCreateRoom = ({ nicknameInputRef }: useCreateRoomProps) => {
  const navigate = useNavigate();

  const createRoomMutation = useMutation<CreateOrEnterRoomResponse, CustomError, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
  });

  const throttledCreateRoom = useThrottle(createRoomMutation.mutate);

  const handleCreateRoom = () => {
    if (createRoomMutation.isPending) return;

    const nickname = nicknameInputRef.current?.value || nicknameInputRef.current?.placeholder || '';
    throttledCreateRoom(nickname);
  };

  return { createRoomMutation, handleCreateRoom };
};

export default useCreateRoom;
