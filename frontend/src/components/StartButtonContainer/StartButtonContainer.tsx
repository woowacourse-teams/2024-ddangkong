import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import StartButton from './StartButton/StartButton';
import AlertModal from '../common/AlertModal/AlertModal';

import { ROUTES } from '@/constants/routes';
import useModal from '@/hooks/useModal';
import Countdown from '@/pages/ReadyPage/Countdown/Countdown';

const StartButtonContainer = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { isOpen, show, close } = useModal();

  const [isCountdownStart, setIsCountdownStart] = useState(false);

  const startCountdown = () => {
    setIsCountdownStart(true);
  };

  const goToGame = () => {
    navigate(ROUTES.game(Number(roomId)));
  };

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
