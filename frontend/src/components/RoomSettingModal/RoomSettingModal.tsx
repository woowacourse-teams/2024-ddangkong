import { RefObject } from 'react';

import CategoryDropdown from './CategoryDropdown/CategoryDropdown';
import useRoomSetting from './hooks/useRoomSetting';
import RoomSettingContainer from './RoomSettingContainer/RoomSettingContainer';
import {
  roomSettingButton,
  roomSettingContainer,
  roomSettingModalLayout,
  roomSettingModalTitle,
} from './RoomSettingModal.styled';
import Modal from '../common/Modal/Modal';

import { POLLING_DELAY } from '@/constants/config';

const TOTAL_ROUND_LIST = [5, 7, 10];
const TIMER_PER_ROUND_LIST = [10000, 15000, 30000, 60000];

interface RoomSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement>;
}

const RoomSettingModal = ({ isOpen, onClose, returnFocusRef }: RoomSettingModalProps) => {
  const {
    roomSetting,
    handleClickOption,
    handleClickRound,
    handleClickTimeLimit,
    handleClickApply,
  } = useRoomSetting({ onClose });

  const { category, totalRound, timeLimitPerRound } = roomSetting;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      returnFocusRef={returnFocusRef}
      css={roomSettingModalLayout}
    >
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
                <button
                  role="radio"
                  onClick={handleClickRound}
                  aria-checked={totalRound === round}
                  css={roomSettingButton(totalRound === round)}
                >
                  {round}
                </button>
              </li>
            ))}
          </RoomSettingContainer>
          <RoomSettingContainer title="제한 시간">
            {TIMER_PER_ROUND_LIST.map((timeLimit) => (
              <li key={timeLimit}>
                <button
                  role="radio"
                  onClick={handleClickTimeLimit}
                  value={timeLimit}
                  aria-checked={timeLimitPerRound === timeLimit}
                  css={roomSettingButton(timeLimitPerRound === timeLimit)}
                >
                  {timeLimit / POLLING_DELAY}초
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
