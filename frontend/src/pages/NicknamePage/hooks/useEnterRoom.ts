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
  imageUrl: string;
}

const useEnterRoom = ({ nicknameInputRef, imageUrl }: useCreateRoomProps) => {
  const navigate = useNavigate();
  const { roomUuid } = useParams();

  const enterRoomMutation = useMutation<
    CreateOrEnterRoomResponse,
    CustomError,
    { nickname: string; roomUuid: string; imageUrl: string }
  >({
    mutationFn: ({ nickname, roomUuid, imageUrl }) => enterRoom(roomUuid, nickname, imageUrl),
    onSuccess: (data) => {
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
  });

  const throttledEnterRoom = useThrottle(enterRoomMutation.mutate);

  const handleEnterRoom = () => {
    if (enterRoomMutation.isPending) return;

    const nickname = nicknameInputRef.current?.value || nicknameInputRef.current?.placeholder || '';
    throttledEnterRoom({ nickname, roomUuid: roomUuid || '', imageUrl });
  };

  return { enterRoomMutation, handleEnterRoom };
};

export default useEnterRoom;
