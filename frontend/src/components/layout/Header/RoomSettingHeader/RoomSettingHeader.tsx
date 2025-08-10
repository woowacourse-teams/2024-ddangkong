/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useRef } from 'react';

import {
  buttonWrapper,
  gameTitle,
  headerLayout,
  iconImage,
  leftSide,
  rightSide,
  roundText,
} from '../Header.styled';
import { useExit } from '../hooks';

import { ExitIcon, SettingIcon } from '@/assets';
import { AlertModal, RoomSettingModal } from '@/components';
import { useFocus, useIsMaster, useModal } from '@/hooks';

interface RoomSettingHeaderProps {
  title: string;
}

// 가운데 제목, 우측 상단 차지하는 헤더 : 게임 대기 화면
const RoomSettingHeader = ({ title }: RoomSettingHeaderProps) => {
  const isMaster = useIsMaster();
  const { showModal } = useModal();

  const { handleExit } = useExit();
  const returnFocusRef = useRef(null);
  const focusRef = useFocus<HTMLElement>();

  const handleClickRoomSetting = () => {
    showModal(RoomSettingModal, { returnFocusRef });
  };

  const handleClickExit = () => {
    showModal(AlertModal, { message: '정말로 나가시겠습니까?', onConfirm: handleExit });
  };

  return (
    <header css={headerLayout} tabIndex={0} ref={focusRef}>
      <div css={leftSide}>
        <button onClick={handleClickExit} css={buttonWrapper}>
          <img src={ExitIcon} alt="방 나가기" css={iconImage} />
        </button>
      </div>
      <h1 css={gameTitle}>{title}</h1>
      <div css={rightSide}>
        {isMaster ? (
          <button ref={returnFocusRef} onClick={handleClickRoomSetting} css={buttonWrapper}>
            <img src={SettingIcon} alt="방 설정" css={iconImage} />
          </button>
        ) : (
          <span css={roundText}></span>
        )}
      </div>
    </header>
  );
};

export default RoomSettingHeader;
