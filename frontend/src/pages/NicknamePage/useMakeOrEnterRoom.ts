import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { enterRoom, createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { memberInfoState, roomUuidState } from '@/recoil/atom';
import { CreateOrEnterRoomResponse } from '@/types/room';

const useMakeOrEnterRoom = (showModal: () => void) => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [{ isMaster }, setMemberInfo] = useRecoilState(memberInfoState);

  const [, setRoomUuidState] = useRecoilState(roomUuidState);
  const { roomUuid } = useParams();

  const createRoomMutation = useMutation<CreateOrEnterRoomResponse, Error, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      setMemberInfo((prev) => ({
        ...prev,
        memberId: data.member.memberId,
      }));
      setRoomUuidState(data.roomUuid || '');
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
    onError: () => {
      showModal();
    },
  });

  const enterRoomMutation = useMutation<
    CreateOrEnterRoomResponse,
    Error,
    { nickname: string; roomUuid: string }
  >({
    mutationFn: ({ nickname, roomUuid }) => enterRoom(roomUuid, nickname),
    onSuccess: (data) => {
      setMemberInfo((prev) => ({ ...prev, memberId: data.member.memberId }));
      setRoomUuidState(data.roomUuid || '');
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
    onError: () => {
      showModal();
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
