import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NicknameInput from './components/NicknameInput/NicknameInput';
import useAccessRoom from './hooks/useAccessRoom';
import useIsJoinableRoomQuery from './hooks/useIsJoinableRoomQuery';
import { profileWrapper, profileImg, nicknameContainer } from './NicknamePage.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import useButtonHeightOnKeyboard from '@/hooks/useButtonHeightOnKeyboard';

const NicknamePage = () => {
  const { roomUuid } = useParams();
  const { nicknameInputRef, handleCreateRoom, handleEnterRoom, isLoading, isSuccess } =
    useAccessRoom();
  const { bottomButtonHeight } = useButtonHeightOnKeyboard();

  const isMaster = !roomUuid;

  useIsJoinableRoomQuery({ roomUuid });

  useEffect(() => {
    if (nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
  }, [roomUuid, nicknameInputRef]);

  return (
    <Content>
      <div css={profileWrapper}>
        <img src={SillyDdangkong} alt="사용자 프로필" css={profileImg} />
      </div>
      <div css={nicknameContainer}>
        <NicknameInput
          nicknameInputRef={nicknameInputRef}
          handleAccessRoom={isMaster ? handleCreateRoom : handleEnterRoom}
        />
        <Button
          text={isLoading || isSuccess ? '접속 중...' : '확인'}
          onClick={isMaster ? handleCreateRoom : handleEnterRoom}
          disabled={isLoading || isSuccess}
          style={{ width: '100%', bottom: bottomButtonHeight }}
          bottom
        />
      </div>
    </Content>
  );
};

export default NicknamePage;
