import { useRecoilValue } from 'recoil';

import {
  roomSettingLayout,
  bigTitle,
  smallTitle,
  roomSettingLabel,
  roomSettingBox,
} from './RoomSetting.styled';

import A11yOnly from '@/components/common/a11yOnly/A11yOnly';
import RoomSettingModal from '@/components/common/RoomSettingModal/RoomSettingModal';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

const RoomSetting = () => {
  const { roomSetting } = useGetRoomInfo();
  const { isMaster } = useRecoilValue(memberInfoState);
  const { show } = useModal();
  const screenReader = `
        방 정보.
        카테고리 ${roomSetting.category.label}. 
        라운드 ${roomSetting.totalRound}. 
        타이머 ${roomSetting.timeLimit / 1000}초.`;

  const handleClickCategory = () => {
    show(RoomSettingModal);
  };

  return (
    <>
      <A11yOnly aria-live="polite">{screenReader}</A11yOnly>
      <button
        aria-label="방 설정"
        css={roomSettingLayout}
        aria-hidden={isMaster}
        onClick={isMaster ? handleClickCategory : () => {}}
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
          <span css={roomSettingLabel}>타이머</span>
          <h2 css={smallTitle}>{roomSetting.timeLimit / 1000}초</h2>
        </div>
      </button>
    </>
  );
};

export default RoomSetting;
