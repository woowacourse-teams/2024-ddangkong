import Countdown from './Countdown/Countdown';
import useCountdown from './hooks/useCountdown';
import StartButton from './StartButton/StartButton';
import AlertModal from '../common/AlertModal/AlertModal';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';

const StartButtonContainer = () => {
  const { isOpen, show, close } = useModal();
  const { isGameStart } = useGetRoomInfo();
  const { isCountdownStart, goToGame } = useCountdown({ isGameStart });

  return (
    <>
      {isCountdownStart && <Countdown goToGame={goToGame} />}
      <StartButton show={show} />
      <AlertModal
        isOpen={isOpen}
        onClose={close}
        title="게임 시작 에러"
        message="게임을 시작할 수 없습니다."
      />
    </>
  );
};

export default StartButtonContainer;
