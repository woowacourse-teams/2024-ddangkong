import { useGameStart } from './hooks/useGameStart';

import Button from '@/components/common/Button/Button';

const StartButton = () => {
  const { isMaster, handleGameStart } = useGameStart();

  return (
    <Button
      text={isMaster ? '시작' : '방장이 시작해 주세요'}
      disabled={!isMaster}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
