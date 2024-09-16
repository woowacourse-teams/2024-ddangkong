import { useGameStart } from './hooks/useGameStart';

import Button from '@/components/common/Button/Button';

interface StartButtonProps {
  show: () => void;
  startCountdown: () => void;
}

const StartButton = ({ show, startCountdown }: StartButtonProps) => {
  const { memberInfo, handleGameStart } = useGameStart({ showModal: show, startCountdown });

  return (
    <Button
      text={memberInfo.isMaster ? '시작' : '방장이 시작해 주세요'}
      disabled={!memberInfo.isMaster}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
