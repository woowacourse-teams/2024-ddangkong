import { useRef } from 'react';

import {
  roomSettingLayout,
  bigTitle,
  smallTitle,
  roomSettingLabel,
  roomSettingBox,
} from './RoomSetting.styled';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import useGetmember from '@/hooks/useGetmember';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';

const RoomSetting = () => {
  const returnFocusRef = useRef<HTMLButtonElement>(null);
  const { roomSetting } = useGetRoomInfo();
  const {
    member: { isMaster },
  } = useGetmember();
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
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>라운드</span>
          <h2 css={smallTitle}>{roomSetting.totalRound}</h2>
        </div>
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>카테고리</span>
          <h2 css={bigTitle}>{roomSetting.category.label}</h2>
        </div>
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>제한 시간</span>
          <h2 css={smallTitle}>{roomSetting.timeLimit / 1000}초</h2>
        </div>
      </button>
    </>
  );
};

export default RoomSetting;
