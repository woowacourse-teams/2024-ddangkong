import { useState } from 'react';

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

interface SettingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const useDropdown = () => {
  const [category, setCategory] = useState('연애');

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const clickedCategory = target.value;

    if (!clickedCategory) return;
    setCategory(clickedCategory);
  };

  return { category, handleClickOption };
};

const SettingModal = ({ isOpen, onClose }: SettingModalProps) => {
  const { category, handleClickOption } = useDropdown();
  const [totalRound, setTotalRound] = useState(5);
  const [timerPerRound, setTimerPerRound] = useState(10);

  const handleClickRound = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTotalRound(Number(target.textContent));
  };

  const handleClickTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    setTimerPerRound(Number(target.value));
  };

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
            <button css={settingButton(totalRound === 5)} onClick={handleClickRound}>
              5
            </button>
            <button css={settingButton(totalRound === 7)} onClick={handleClickRound}>
              7
            </button>
            <button css={settingButton(totalRound === 10)} onClick={handleClickRound}>
              10
            </button>
          </div>
          <div css={settingTitleWrapper}>
            <span css={settingTitle}>라운드 당 타이머</span>
          </div>
          <div css={settingButtonContainer}>
            <button css={settingButton(timerPerRound === 5)} onClick={handleClickTimer} value={5}>
              5초
            </button>
            <button css={settingButton(timerPerRound === 10)} onClick={handleClickTimer} value={10}>
              10초
            </button>
            <button css={settingButton(timerPerRound === 15)} onClick={handleClickTimer} value={15}>
              15초
            </button>
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
