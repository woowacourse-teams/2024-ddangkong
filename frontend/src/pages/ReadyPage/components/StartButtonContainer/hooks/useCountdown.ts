import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

interface UseCountdownProps {
  isGameStart: boolean;
}

const useCountdown = ({ isGameStart }: UseCountdownProps) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [isCountdownStart, setIsCountdownStart] = useState(false);

  const startCountdown = () => {
    setIsCountdownStart(true);
  };

  const goToGame = () => {
    navigate(ROUTES.game(Number(roomId)), { replace: true });
  };

  useEffect(() => {
    if (isGameStart) {
      startCountdown();
    }
  }, [isGameStart]);

  return { isCountdownStart, goToGame };
};

export default useCountdown;
