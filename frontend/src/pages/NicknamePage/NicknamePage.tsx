
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  nicknameBox,
  nicknameInputWrapper,
  nicknameInput,
  profileWrapper,
  profileImg,
  noVoteTextContainer,
  noVoteText,
  angryImage,
} from './NicknamePage.styled';
import { useMakeOrEnterRoom } from './useMakeOrEnterRoom';

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
  const { randomNickname, nicknameInputRef, handleMakeOrEnterRoom, isLoading } =
    useMakeOrEnterRoom(show);
  const { isMaster } = useRecoilValue(memberInfoState);
  const { roomUuid } = useParams();
  const [, setRoomUuidState] = useRecoilState(roomUuidState);

  const { data } = useQuery({
    queryKey: ['isJoinable', roomUuid],
    queryFn: async () => isJoinableRoom(roomUuid || ''),
  });

  useEffect(() => {
    if (roomUuid) {
      setRoomUuidState(roomUuid);
    }
  }, [roomUuid, setRoomUuidState]);

  if (roomUuid && !data?.isJoinable)
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
      <div css={nicknameBox}>닉네임</div>
      <div css={nicknameInputWrapper}>
        <input
          css={nicknameInput}
          type="text"
          placeholder={randomNickname}
          ref={nicknameInputRef}
        />
      </div>
      <Button
        onClick={handleMakeOrEnterRoom}
        disabled={isLoading}
        text={isLoading ? '로딩 중.....' : '확인'}
        bottom
      />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        message={isMaster ? '방 생성에 실패했습니다' : '방 참가에 실패했습니다'}
        title={isMaster ? '방 생성 실패' : '방 참가 실패'}
      />
    </Content>
  );
};

export default NicknamePage;
