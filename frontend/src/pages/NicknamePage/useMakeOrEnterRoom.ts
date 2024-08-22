import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import createRandomNickname from './createRandomNickname';

import { enterRoom, createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { memberInfoState, roomUuidState } from '@/recoil/atom';
import { CreateOrEnterRoomResponse } from '@/types/room';
export const useMakeOrEnterRoom = (showModal: () => void) => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [{ isMaster }, setMemberInfo] = useRecoilState(memberInfoState);
  const [isLoading, setIsLoading] = useState(false);

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
      navigate(ROUTES.ready(Number(data.roomId)));
      setIsLoading(false);
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
      navigate(ROUTES.ready(Number(data.roomId)));
      setIsLoading(false);
    },
    onError: () => {
      showModal();
    },
  });

  const handleMakeOrEnterRoom = () => {
    const nickname = nicknameInputRef.current?.value || randomNickname;
    if (isMaster) {
      createRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomUuid: roomUuid || '' });
    }
  };

  return {
    randomNickname,
    nicknameInputRef,
    handleMakeOrEnterRoom,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
  };
};
