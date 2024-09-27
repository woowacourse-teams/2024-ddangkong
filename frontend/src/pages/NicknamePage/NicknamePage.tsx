import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

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
import AngryDdangkong from '@/assets/images/angryDdangkong.webp';
import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import useKeyboardUp from '@/hooks/useKeyboardUp';
import { roomUuidState } from '@/recoil/atom';

const NicknamePage = () => {
  const { nicknameInputRef, handleMakeOrEnterRoom, isLoading } = useMakeOrEnterRoom();
  const { roomUuid } = useParams();
  const setRoomUuidState = useSetRecoilState(roomUuidState);
  const { isKeyboardUp } = useKeyboardUp();

  const { data, isLoading: isJoinableLoading } = useQuery({
    queryKey: ['isJoinable', roomUuid],
    queryFn: async () => isJoinableRoom(roomUuid || ''),
    enabled: !!roomUuid,
  });

  useEffect(() => {
    if (roomUuid) {
      setRoomUuidState(roomUuid);
    }

    if (nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
  }, [roomUuid, setRoomUuidState, nicknameInputRef]);

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
        <Button
          onClick={handleMakeOrEnterRoom}
          disabled={isLoading}
          text={isLoading ? '접속 중...' : '확인'}
          bottom={!isKeyboardUp}
          radius={isKeyboardUp ? 'small' : undefined}
          size={isKeyboardUp ? 'small' : undefined}
          style={{ width: '100%' }}
        />
      </div>
    </Content>
  );
};

export default NicknamePage;
