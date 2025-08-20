import useGameStart from './hooks/useGameStart';
import getStartButtonText from './StartButton.utils';

import Button from '@/components/common/Button/Button';
import { collectGameMemberNumberGA } from '@/lib/googleAnalytics/room';

import { useGetRoomInfo } from '@/hooks';

const StartButton = () => {
  const { isMaster, handleGameStart, isPending, isSuccess } = useGameStart();
  const { members } = useGetRoomInfo();

  const handleClick = () => {
    handleGameStart();
    collectGameMemberNumberGA(members.length);
  };

  return (
    <Button
      text={getStartButtonText(isMaster, isPending || isSuccess)}
      disabled={!isMaster || isPending || isSuccess}
      onClick={handleClick}
      bottom
    />
  );
};

export default StartButton;
