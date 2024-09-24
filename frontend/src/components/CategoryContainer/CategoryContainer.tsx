import { useRecoilValue } from 'recoil';

import {
  categoryContainerLayout,
  title,
  subtitle,
  roomSettingLabel,
  roomSettingBox,
} from './CategoryContainer.styled';
import RoomSettingModal from '../common/RoomSettingModal/RoomSettingModal';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import { memberInfoState } from '@/recoil/atom';

const CategoryContainer = () => {
  const { roomSetting } = useGetRoomInfo();
  const { isOpen, show, close } = useModal();
  const { isMaster } = useRecoilValue(memberInfoState);

  return (
    <>
      <button
        aria-label="카테고리 설정 버튼"
        css={categoryContainerLayout}
        onClick={isMaster ? show : () => {}}
      >
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>라운드</span>
          <h1 css={subtitle}>{roomSetting.totalRound}</h1>
        </div>
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>카테고리</span>
          <h1 css={title}>{roomSetting.category.label}</h1>
        </div>
        <div css={roomSettingBox}>
          <span css={roomSettingLabel}>타이머</span>
          <h1 css={subtitle}>{roomSetting.timeLimit}</h1>
        </div>
      </button>
      {isOpen && <RoomSettingModal isOpen={isOpen} onClose={close} />}
    </>
  );
};

export default CategoryContainer;
