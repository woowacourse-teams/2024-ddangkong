import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { enterRoom, createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { memberInfoState, roomUuidState } from '@/recoil/atom';
import { RoomIdAndMember } from '@/types/room';
import { createRandomNickname } from '@/utils/nickname';

export const useMakeOrEnterRoom = (showModal: () => void) => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);
  const [roomUuid, setRoomUuidState] = useRecoilState(roomUuidState);

  const { roomId } = useParams();

  const createRoomMutation = useMutation<RoomIdAndMember, Error, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      setMemberInfo((prev) => ({
        ...prev,
        memberId: data.member.memberId,
      }));
      setRoomUuidState(data.roomUuid || '');
      navigate(ROUTES.ready(Number(data.roomId)));
    },
    onError: (error: Error) => {
      showModal();
    },
  });

  const enterRoomMutation = useMutation<
    RoomIdAndMember,
    Error,
    { nickname: string; roomUuid: string }
  >({
    mutationFn: ({ nickname, roomUuid }) => enterRoom(roomUuid, nickname),
    onSuccess: (data) => {
      setMemberInfo((prev) => ({ ...prev, memberId: data.member.memberId }));
      navigate(ROUTES.ready(Number(roomId)));
    },
    onError: (error: Error) => {
      showModal();
    },
  });

  const handleMakeOrEnterRoom = () => {
    const nickname = nicknameInputRef.current?.value || randomNickname;
    if (memberInfo.isMaster) {
      createRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomUuid });
    }
  };

  return { randomNickname, nicknameInputRef, handleMakeOrEnterRoom };
};
