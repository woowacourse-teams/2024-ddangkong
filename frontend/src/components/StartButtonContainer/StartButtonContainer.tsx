import { useNavigate, useParams } from 'react-router-dom';

import StartButton from './StartButton/StartButton';
import AlertModal from '../common/AlertModal/AlertModal';

import { ROUTES } from '@/constants/routes';
import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';
import useModal from '@/hooks/useModal';
import Countdown from '@/pages/ReadyPage/Countdown/Countdown';

const StartButtonContainer = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { isOpen, show, close } = useModal();
  const { isCountdownStart, startCountdown } = useGetRoomInfo();

  const goToGame = () => {
    navigate(ROUTES.game(Number(roomId)));
  };

  return (
    <>
      <StartButton show={show} startCountdown={startCountdown} />
      {isCountdownStart && <Countdown goToGame={goToGame} />}
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
