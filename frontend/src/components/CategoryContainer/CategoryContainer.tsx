import { useRecoilValue } from 'recoil';

import {
  categoryContainerLayout,
  bigTitle,
  smallTitle,
  roomSettingLabel,
  roomSettingBox,
} from './CategoryContainer.styled';
import RoomSettingModal from '../common/RoomSettingModal/RoomSettingModal';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

const CategoryContainer = () => {
  const { roomSetting } = useGetRoomInfo();
  const { isMaster } = useRecoilValue(memberInfoState);
  const { show } = useModal();

  const handleClickCategory = () => {
    show(RoomSettingModal);
  };

  return (
    <button
      aria-label="카테고리 설정"
      css={categoryContainerLayout}
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
  );
};

export default CategoryContainer;
