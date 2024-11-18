import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NicknameInput from './components/NicknameInput/NicknameInput';
import useCreateOrEnterRoom from './hooks/useCreateOrEnterRoom';
import useIsJoinableRoomQuery from './hooks/useIsJoinableRoomQuery';
import { profileWrapper, profileImg, nicknameContainer } from './NicknamePage.styled';

import SillyDdangkong from '@/assets/images/sillyDdangkong.webp';
import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import useButtonHeightOnKeyboard from '@/hooks/useButtonHeightOnKeyboard';

const NicknamePage = () => {
  const { roomUuid } = useParams();
  const { nicknameInputRef, handleCreateOrEnterRoom, isLoading, isSuccess } =
    useCreateOrEnterRoom();
  const { bottomButtonHeight } = useButtonHeightOnKeyboard();

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
          handleCreateOrEnterRoom={handleCreateOrEnterRoom}
        />
        <Button
          onClick={handleCreateOrEnterRoom}
          disabled={isLoading || isSuccess}
          text={isLoading || isSuccess ? '접속 중...' : '확인'}
          style={{ width: '100%', bottom: bottomButtonHeight }}
          bottom
        />
      </div>
    </Content>
  );
};

export default NicknamePage;
