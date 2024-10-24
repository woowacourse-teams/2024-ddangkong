import { useRef } from 'react';

import {
  roomSettingLayout,
  bigTitle,
  smallTitle,
  roomSettingKeyBox,
  roomSettingValueBox,
  roomSettingKey,
} from './RoomSetting.styled';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import useModal from '@/hooks/useModal';

const RoomSetting = () => {
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const { roomSetting } = useGetRoomInfo();
  const {
    member: { isMaster },
  } = useGetUserInfo();
  const { show } = useModal();
  const screenReaderRoomSetting = `
        방 정보.
        카테고리 ${roomSetting.category.label}. 
        라운드 ${roomSetting.totalRound}. 
        제한시간 ${roomSetting.timeLimit / 1000}초.`;

  const handleClickCategory = () => {
    show(RoomSettingModal, { returnFocusRef });
  };

  return (
    <>
      <A11yOnly aria-live="polite">{screenReaderRoomSetting}</A11yOnly>
      <button
        aria-label="방 설정"
        css={roomSettingLayout}
        onClick={isMaster ? handleClickCategory : () => {}}
        ref={returnFocusRef}
      >
        <div css={roomSettingKeyBox}>
          <span css={roomSettingKey}>라운드</span>
          <span css={roomSettingKey}>카테고리</span>
          <span css={roomSettingKey}>제한 시간</span>
        </div>
        <div css={roomSettingValueBox}>
          <h2 css={smallTitle}>{roomSetting.totalRound}</h2>
          <h2 css={bigTitle}>{roomSetting.category.label}</h2>
          <h2 css={smallTitle}>{roomSetting.timeLimit / 1000}초</h2>
        </div>
      </button>
    </>
  );
};

export default RoomSetting;
