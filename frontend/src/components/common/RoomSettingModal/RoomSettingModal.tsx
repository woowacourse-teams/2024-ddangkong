import CategoryDropdown from './CategoryDropdown/CategoryDropdown';
import useRoomSetting from './hooks/useRoomSetting';
import RoomSettingContainer from './RoomSettingContainer/RoomSettingContainer';
import {
  roomSettingButton,
  roomSettingContainer,
  roomSettingModalLayout,
  roomSettingModalTitle,
} from './RoomSettingModal.styled';
import Modal from '../Modal/Modal';

import { ONE_SECOND } from '@/constants/time';

const TOTAL_ROUND_LIST = [5, 7, 10];
const TIMER_PER_ROUND_LIST = [5000, 10000, 15000];

interface RoomSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoomSettingModal = ({ isOpen, onClose }: RoomSettingModalProps) => {
  const {
    roomSetting,
    handleClickOption,
    handleClickRound,
    handleClickTimeLimit,
    handleClickApply,
  } = useRoomSetting({ onClose });

  const { category, totalRound, timeLimitPerRound } = roomSetting;

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={roomSettingModalLayout}>
      <Modal.Header position="center">
        <Modal.Title css={roomSettingModalTitle}>방 설정</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <div css={roomSettingContainer}>
          <RoomSettingContainer title="카테고리">
            <CategoryDropdown category={category?.label} handleClickOption={handleClickOption} />
          </RoomSettingContainer>
          <RoomSettingContainer title="총 라운드">
            {TOTAL_ROUND_LIST.map((round) => (
              <li key={round}>
                <button css={roomSettingButton(totalRound === round)} onClick={handleClickRound}>
                  {round}
                </button>
              </li>
            ))}
          </RoomSettingContainer>
          <RoomSettingContainer title="라운드 당 타이머">
            {TIMER_PER_ROUND_LIST.map((timeLimit) => (
              <li key={timeLimit}>
                <button
                  css={roomSettingButton(timeLimitPerRound === timeLimit)}
                  onClick={handleClickTimeLimit}
                  value={timeLimit}
                >
                  {timeLimit / ONE_SECOND}초
                </button>
              </li>
            ))}
          </RoomSettingContainer>
        </div>
      </Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton onClick={handleClickApply}>적용</Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default RoomSettingModal;
