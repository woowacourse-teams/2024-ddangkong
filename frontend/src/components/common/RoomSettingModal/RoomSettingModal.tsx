import { useParams } from 'react-router-dom';

import useApplyRoomSetting from './hooks/useApplyRoomSetting';
import useCategoryDropdown from './hooks/useCategoryDropdown';
import useCategoryListQuery from './hooks/useCategoryListQuery';
import useTimerPerRound from './hooks/useTimerPerRound';
import useTotalRound from './hooks/useTotalRound';
import RoomSettingItem from './RoomSettingItem/RoomSettingItem';
import {
  roomSettingButton,
  roomSettingContainer,
  roomSettingModalLayout,
  roomSettingModalTitle,
} from './RoomSettingModal.styled';
import Dropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';

import { useGetRoomInfo } from '@/pages/ReadyPage/useGetRoomInfo';

const TOTAL_ROUND_LIST = [5, 7, 10];
const TIMER_PER_ROUND_LIST = [5000, 10000, 15000];

interface RoomSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoomSettingModal = ({ isOpen, onClose }: RoomSettingModalProps) => {
  const { roomId } = useParams();
  const { categoryList } = useCategoryListQuery();
  const { mutate: applyRoomSetting } = useApplyRoomSetting(Number(roomId));

  const { roomSetting } = useGetRoomInfo();
  const { totalRound, handleClickRound } = useTotalRound(roomSetting?.totalRound);
  const { timerPerRound, handleClickTimer } = useTimerPerRound(roomSetting?.timeLimit);
  const { category, handleClickOption } = useCategoryDropdown(roomSetting?.category);

  const handleClickApply = () => {
    if (!category || !totalRound || !timerPerRound) return;

    applyRoomSetting({ category, totalRound, timeLimit: timerPerRound });
    onClose();
  };

  if (!categoryList || !category) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={roomSettingModalLayout}>
      <Modal.Header position="center">
        <Modal.Title css={roomSettingModalTitle}>방 설정</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <div css={roomSettingContainer}>
          <RoomSettingItem title="카테고리">
            <Dropdown text={category} optionList={categoryList} handleClick={handleClickOption} />
          </RoomSettingItem>
          <RoomSettingItem title="총 라운드">
            {TOTAL_ROUND_LIST.map((round) => (
              <button
                key={round}
                css={roomSettingButton(totalRound === round)}
                onClick={handleClickRound}
              >
                {round}
              </button>
            ))}
          </RoomSettingItem>
          <RoomSettingItem title="라운드 당 타이머">
            {TIMER_PER_ROUND_LIST.map((timer) => (
              <button
                key={timer}
                css={roomSettingButton(timerPerRound === timer)}
                onClick={handleClickTimer}
                value={timer}
              >
                {timer / 1000}초
              </button>
            ))}
          </RoomSettingItem>
        </div>
      </Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton onClick={handleClickApply}>적용</Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomSettingModal;
