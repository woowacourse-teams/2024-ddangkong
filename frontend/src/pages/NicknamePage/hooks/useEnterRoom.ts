import { useMutation } from '@tanstack/react-query';
import { RefObject } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { enterRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import useThrottle from '@/hooks/useThrottle';
import { CreateOrEnterRoomResponse } from '@/types/room';
import { CustomError } from '@/utils/error';

interface useCreateRoomProps {
  nicknameInputRef: RefObject<HTMLInputElement>;
}

const useEnterRoom = ({ nicknameInputRef }: useCreateRoomProps) => {
  const navigate = useNavigate();
  const { roomUuid } = useParams();

  const enterRoomMutation = useMutation<
    CreateOrEnterRoomResponse,
    CustomError,
    { nickname: string; roomUuid: string }
  >({
    mutationFn: ({ nickname, roomUuid }) => enterRoom(roomUuid, nickname),
    onSuccess: (data) => {
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
  });

  const throttledEnterRoom = useThrottle(enterRoomMutation.mutate);

  const handleEnterRoom = () => {
    if (enterRoomMutation.isPending) return;

    const nickname = nicknameInputRef.current?.value || nicknameInputRef.current?.placeholder || '';
    throttledEnterRoom({ nickname, roomUuid: roomUuid || '' });
  };

  return { enterRoomMutation, handleEnterRoom };
};

export default useEnterRoom;
