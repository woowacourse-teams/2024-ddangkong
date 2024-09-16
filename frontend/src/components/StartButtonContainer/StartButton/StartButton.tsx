import { useGameStart } from './hooks/useGameStart';

import Button from '@/components/common/Button/Button';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';

interface StartButtonProps {
  show: () => void;
  startCountdown: () => void;
}

const StartButton = ({ show, startCountdown }: StartButtonProps) => {
  const { master } = useGetRoomInfo();
  const { memberInfo, handleGameStart } = useGameStart({ showModal: show, startCountdown });

  return (
    <Button
      text={master?.memberId === memberInfo.memberId ? '시작' : '방장이 시작해 주세요'}
      disabled={master?.memberId !== memberInfo.memberId}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
