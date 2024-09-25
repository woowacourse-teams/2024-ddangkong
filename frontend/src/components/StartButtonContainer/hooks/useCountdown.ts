import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

const useCountdown = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [isCountdownStart, setIsCountdownStart] = useState(false);

  const startCountdown = () => {
    setIsCountdownStart(true);
  };

  const goToGame = () => {
    navigate(ROUTES.game(Number(roomId)));
  };

  return { isCountdownStart, startCountdown, goToGame };
};

export default useCountdown;
