import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { enterRoom, createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { CreateOrEnterRoomResponse } from '@/types/room';
import { CustomError } from '@/utils/error';

const useMakeOrEnterRoom = () => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { roomUuid } = useParams();

  // roomUuId가 없다 -> 초대링크를 받지 않은 master이다.
  const isMaster = !roomUuid;

  const createRoomMutation = useMutation<CreateOrEnterRoomResponse, CustomError, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
  });

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

  const handleMakeOrEnterRoom = () => {
    const nickname = nicknameInputRef.current?.value || nicknameInputRef.current?.placeholder || '';
    if (isMaster) {
      createRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomUuid: roomUuid || '' });
    }
  };

  return {
    nicknameInputRef,
    handleMakeOrEnterRoom,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
  };
};

export default useMakeOrEnterRoom;
