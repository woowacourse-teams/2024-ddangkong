import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { enterRoom, makeRoom } from '@/apis/room';
import { memberInfoState } from '@/recoil/atom';
import { RoomAndMember } from '@/types/room';
import { createRandomNickname } from '@/utils/nickname';

export const useMakeOrEnterRoom = () => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { isMaster } = useRecoilValue(memberInfoState);
  const { roomId } = useParams();
  const nickname = nicknameInputRef.current?.value || randomNickname;

  const makeRoomMutation = useMutation<RoomAndMember, Error, string>({
    mutationFn: makeRoom,
    onSuccess: (data) => {
      navigate(`/ready/${data.roomId}`);
    },
    onError: (error: Error) => {},
  });

  const enterRoomMutation = useMutation<RoomAndMember, Error, { nickname: string; roomId: number }>(
    {
      mutationFn: ({ nickname, roomId }) => enterRoom(roomId, nickname),
      onSuccess: () => {
        navigate(`/ready/${roomId}`);
      },
      onError: (error: Error) => {},
    },
  );

  const handleMakeOrEnterRoom = () => {
    if (isMaster) {
      makeRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomId: Number(roomId) });
    }
  };

  return { randomNickname, nicknameInputRef, handleMakeOrEnterRoom };
};
