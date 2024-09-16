import useCountdown from './hooks/useCountdown';
import StartButton from './StartButton/StartButton';
import AlertModal from '../common/AlertModal/AlertModal';

import useModal from '@/hooks/useModal';
import Countdown from '@/pages/ReadyPage/Countdown/Countdown';

const StartButtonContainer = () => {
  const { isOpen, show, close } = useModal();
  const { isCountdownStart, startCountdown, goToGame } = useCountdown();

  return (
    <>
      {isCountdownStart && <Countdown goToGame={goToGame} />}
      <StartButton show={show} startCountdown={startCountdown} />
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
