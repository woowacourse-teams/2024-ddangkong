import { useGameStart } from './hooks/useGameStart';
import getStartButtonText from './StartButton.utils';

import Button from '@/components/common/Button/Button';

const StartButton = () => {
  const { memberInfo, handleGameStart, isPending, isSuccess } = useGameStart();

  return (
    <Button
      text={getStartButtonText(memberInfo.isMaster, isPending || isSuccess)}
      disabled={!memberInfo.isMaster || isPending || isSuccess}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
