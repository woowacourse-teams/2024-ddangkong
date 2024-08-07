import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useMyGameStatusQuery from './useMyGameStatusQuery';

import { ROUTES } from '@/constants/routes';

interface UseMyGameStatusProps {
  roomId: number;
  currentRound: number | undefined;
}

const useMyGameStatus = ({ roomId, currentRound }: UseMyGameStatusProps) => {
  const navigate = useNavigate();

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({
    roomId,
    currentRound,
  });

  const goToGameResult = () => {
    navigate(ROUTES.gameResult);
  };

  const goToNextRound = () => {
    navigate(ROUTES.game(Number(roomId)));
  };

  useEffect(() => {
    if (isGameFinished) {
      goToGameResult();
    }
    if (isRoundFinished) {
      goToNextRound();
    }
  }, [isRoundFinished, isGameFinished]);
};

export default useMyGameStatus;
