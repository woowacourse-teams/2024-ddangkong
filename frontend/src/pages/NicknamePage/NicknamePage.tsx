import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ImageList from './components/ImageList/ImageList';
import NicknameInput from './components/NicknameInput/NicknameInput';
import { useAccessRoom, useIsJoinableRoomQuery } from './hooks';
import { profileWrapper, profileImg, nicknameContainer, pencilIcon } from './NicknamePage.styled';

import Button from '@/components/common/Button/Button';
import Content from '@/components/layout/Content/Content';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import useButtonHeightOnKeyboard from '@/hooks/useButtonHeightOnKeyboard';
import useGAPageTimeSpentGA from '@/lib/googleAnalytics/hooks/usePageTimeSpentGA';

import { PencilIcon } from '@/assets';

const NicknamePage = () => {
  const { roomUuid } = useParams();
  const {
    nicknameInputRef,
    handleCreateRoom,
    handleEnterRoom,
    isLoading,
    isSuccess,
    changeImageUrl,
    imageUrl,
  } = useAccessRoom();
  const { bottomButtonHeight } = useButtonHeightOnKeyboard();
  const { showBottomSheet } = useBottomSheet();
  const isMaster = !roomUuid;

  useIsJoinableRoomQuery({ roomUuid });
  useGAPageTimeSpentGA('닉네임 페이지');

  useEffect(() => {
    if (nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
  }, [roomUuid, nicknameInputRef]);

  return (
    <Content>
      <div css={profileWrapper}>
        <img src={imageUrl} alt="사용자 프로필" css={profileImg} />
        <button
          onClick={() => {
            showBottomSheet(ImageList, { changeImageUrl });
          }}
        >
          <img src={PencilIcon} alt="연필아이콘" css={pencilIcon} />
        </button>
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
