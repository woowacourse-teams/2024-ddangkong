import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import NicknameInput from './NicknameInput/NicknameInput';
import {
  profileWrapper,
  profileImg,
  noVoteTextContainer,
  noVoteText,
  angryImage,
  nicknameTitle,
  nicknameContainer,
} from './NicknamePage.styled';
import useMakeOrEnterRoom from './useMakeOrEnterRoom';

import { isJoinableRoom } from '@/apis/room';
import AngryDdangkong from '@/assets/images/angryDdangkong.png';
import SillyDdangkong from '@/assets/images/sillyDdangkong.png';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import useModal from '@/hooks/useModal';
import { memberInfoState, roomUuidState } from '@/recoil/atom';

const NicknamePage = () => {
  const { isOpen, show, close } = useModal();
  const { nicknameInputRef, handleMakeOrEnterRoom, isLoading } = useMakeOrEnterRoom(show);
  const { isMaster } = useRecoilValue(memberInfoState);
  const { roomUuid } = useParams();
  const setRoomUuidState = useSetRecoilState(roomUuidState);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const { data, isLoading: isJoinableLoading } = useQuery({
    queryKey: ['isJoinable', roomUuid],
    queryFn: async () => isJoinableRoom(roomUuid || ''),
    enabled: !!roomUuid,
  });

  useEffect(() => {
    if (roomUuid) {
      setRoomUuidState(roomUuid);
    }
  }, [roomUuid, setRoomUuidState]);

  useEffect(() => {
    const initialHeight = window.innerHeight;

    window.addEventListener('resize', () => {
      const currentHeight = window.innerHeight;
      if (currentHeight < initialHeight) {
        setKeyboardHeight(30);
      } else {
        setKeyboardHeight(0);
      }
    });
  }, []);

  if (!isJoinableLoading && roomUuid && !data?.isJoinable)
    return (
      <div css={noVoteTextContainer}>
        <img src={AngryDdangkong} alt="화난 땅콩" css={angryImage} />
        <span css={noVoteText}>잘못된 링크에 접속했어요 :{`)`}</span>
      </div>
    );

  return (
    <Content>
      <div css={profileWrapper}>
        <img src={SillyDdangkong} alt="사용자 프로필" css={profileImg} />
      </div>
      <div css={nicknameContainer}>
        <span css={nicknameTitle}>닉네임</span>
        <NicknameInput
          nicknameInputRef={nicknameInputRef}
          handleMakeOrEnterRoom={handleMakeOrEnterRoom}
        />
      </div>
      <Button
        onClick={handleMakeOrEnterRoom}
        disabled={isLoading}
        text={isLoading ? '접속 중...' : '확인'}
        bottom
        style={{ marginBottom: `${keyboardHeight}rem` }}
      />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        message={isMaster ? '방 생성에 실패했습니다.' : '해당 방에 참여할 수 없습니다.'}
        title={isMaster ? '방 생성 실패' : '방 참가 실패'}
      />
    </Content>
  );
};

export default NicknamePage;
