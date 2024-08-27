import { useGameStart } from './hooks/useGameStart';

import Button from '@/components/common/Button/Button';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';

const StartButton = () => {
  const { master } = useGetRoomInfo();
  const { memberInfo, handleGameStart } = useGameStart();

  return (
    <Button
      text={master?.memberId === memberInfo.memberId ? '시작' : '방장이 시작해주세요'}
      disabled={master?.memberId !== memberInfo.memberId}
      onClick={handleGameStart}
      bottom
    />
  );
};

export default StartButton;
