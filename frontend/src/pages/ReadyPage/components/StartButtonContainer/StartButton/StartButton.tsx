import useGameStart from './hooks/useGameStart';
import getStartButtonText from './StartButton.utils';

import Button from '@/components/common/Button/Button';

const StartButton = () => {
  const { isMaster, handleGameStart, isPending, isSuccess } = useGameStart();

  return (
    <Button
      text={getStartButtonText(isMaster, isPending || isSuccess)}
      disabled={!isMaster || isPending || isSuccess}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
