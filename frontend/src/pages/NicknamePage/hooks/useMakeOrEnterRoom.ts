import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { enterRoom, createRoom } from '@/apis/room';
import { ROUTES } from '@/constants/routes';
import { memberInfoState } from '@/recoil/atom';
import { RoomIdAndMember } from '@/types/room';
import { createRandomNickname } from '@/utils/nickname';

export const useMakeOrEnterRoom = () => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useRecoilState(memberInfoState);

  const { roomId } = useParams();

  const createRoomMutation = useMutation<RoomIdAndMember, Error, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      setMemberInfo((prev) => ({ ...prev, memberId: data.member.memberId }));
      navigate(ROUTES.ready(Number(data.roomId)));
    },
    onError: (error: Error) => {},
  });

  const enterRoomMutation = useMutation<
    RoomIdAndMember,
    Error,
    { nickname: string; roomId: number }
  >({
    mutationFn: ({ nickname, roomId }) => enterRoom(roomId, nickname),
    onSuccess: (data) => {
      setMemberInfo((prev) => ({ ...prev, memberId: data.member.memberId }));
      navigate(ROUTES.ready(Number(roomId)));
    },
    onError: (error: Error) => {},
  });

  const handleMakeOrEnterRoom = () => {
    const nickname = nicknameInputRef.current?.value || randomNickname;
    if (memberInfo.isMaster) {
      createRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomId: Number(roomId) });
    }
  };

  return { randomNickname, nicknameInputRef, handleMakeOrEnterRoom };
};
