import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { profile, nickname, nicknameInputWrapper, nicknameInput } from './NicknamePage.styled';

import { enterRoom, makeRoom } from '@/apis/room';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import { memberInfoState } from '@/recoil/atom';
import { RoomAndMember } from '@/types/room';
import { createRandomNickname } from '@/utils/nickname';

const NicknamePage = () => {
  const randomNickname = createRandomNickname();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [{ isMaster }, setMemberInfo] = useRecoilState(memberInfoState);
  const { search } = useLocation();
  const roomId = Number(new URLSearchParams(search).get('roomId'));
  const nickname = nicknameInputRef.current?.value || randomNickname;

  const makeRoomMutation = useMutation<RoomAndMember, Error, string>({
    mutationFn: makeRoom,
    onSuccess: (data) => {
      navigate(`/ready?roomId=${data.roomId}`);
    },
    onError: (error: Error) => {},
  });

  const enterRoomMutation = useMutation<RoomAndMember, Error, { nickname: string; roomId: number }>(
    {
      mutationFn: ({ nickname, roomId }) => enterRoom(roomId, nickname),
      onSuccess: (data) => {
        navigate(`/ready?roomId=${data.roomId}`);
      },
      onError: (error: Error) => {},
    },
  );

  const handleClick = () => {
    if (isMaster) {
      makeRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomId });
    }
  };

  return (
    <Content>
      <div css={profile}></div>
      <div css={nickname}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input
          css={nicknameInput}
          type="text"
          placeholder={randomNickname}
          ref={nicknameInputRef}
        />
      </div>
      <Button onClick={handleClick} text="확인" bottom></Button>
    </Content>
  );
};

export default NicknamePage;
