import { useDropdown, useTimerPerRound, useTotalRound } from './SettingModal.hook';
import {
  settingModalTitle,
  settingModalLayout,
  settingButton,
  settingTitle,
  settingTitleWrapper,
  settingButtonContainer,
  settingContentContainer,
} from './SettingModal.styled';
import Dropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';

import { Category } from '@/types/room';

const CATEGORY = ['음식', '연애', 'MBTI', '만약에'] as Category[];
const TOTAL_ROUND_LIST = [5, 7, 10];
const TIMER_PER_ROUND_LIST = [5, 10, 15];

interface SettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingModal = ({ isOpen, onClose }: SettingModalProps) => {
  const { category, handleClickOption } = useDropdown();
  const { totalRound, handleClickRound } = useTotalRound();
  const { timerPerRound, handleClickTimer } = useTimerPerRound();

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={settingModalLayout}>
      <Modal.Header position="center">
        <Modal.Title css={settingModalTitle}>방 설정</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <div css={settingContentContainer}>
          <div css={settingTitleWrapper}>
            <span css={settingTitle}>카테고리</span>
          </div>
          <Dropdown text={category} optionList={CATEGORY} handleClick={handleClickOption} />
          <div css={settingTitleWrapper}>
            <span css={settingTitle}>총 라운드</span>
          </div>
          <div css={settingButtonContainer}>
            {TOTAL_ROUND_LIST.map((round) => (
              <button
                key={round}
                css={settingButton(totalRound === round)}
                onClick={handleClickRound}
              >
                {round}
              </button>
            ))}
          </div>
          <div css={settingTitleWrapper}>
            <span css={settingTitle}>라운드 당 타이머</span>
          </div>
          <div css={settingButtonContainer}>
            {TIMER_PER_ROUND_LIST.map((timer) => (
              <button
                key={timer}
                css={settingButton(timerPerRound === timer)}
                onClick={handleClickTimer}
                value={timer}
              >
                {timer}초
              </button>
            ))}
          </div>
        </div>
      </Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton onClick={onClose}>적용</Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingModal;
