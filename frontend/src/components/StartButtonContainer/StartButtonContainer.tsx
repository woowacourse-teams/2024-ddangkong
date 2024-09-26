import Countdown from './Countdown/Countdown';
import StartButton from './StartButton/StartButton';
import useCountdown from '../hooks/useCountdown';

import { useGetRoomInfo } from '@/hooks/useGetRoomInfo';

const StartButtonContainer = () => {
  const { isGameStart } = useGetRoomInfo();
  const { isCountdownStart, goToGame } = useCountdown({ isGameStart });

  return (
    <>
      {isCountdownStart && <Countdown goToGame={goToGame} />}
      <StartButton />
    </>
  );
};

export default StartButtonContainer;
