import Countdown from './Countdown/Countdown';
import useCountdown from './hooks/useCountdown';
import StartButton from './StartButton/StartButton';

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
