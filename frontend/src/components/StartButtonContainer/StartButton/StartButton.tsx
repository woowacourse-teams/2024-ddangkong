import { useGameStart } from './hooks/useGameStart';

import Button from '@/components/common/Button/Button';

interface StartButtonProps {
  show: () => void;
}

const StartButton = ({ show }: StartButtonProps) => {
  const { memberInfo, handleGameStart } = useGameStart({ showModal: show });

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
