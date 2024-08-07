import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useMyGameStatusQuery from './useMyGameStatusQuery';

import { ROUTES } from '@/constants/routes';
import { BalanceContent } from '@/types/balanceContent';

interface UseMyGameStatusProps {
  roomId: number;
  balanceContent: BalanceContent | undefined;
}

const useMyGameStatus = ({ roomId, balanceContent }: UseMyGameStatusProps) => {
  const navigate = useNavigate();

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({
    roomId,
    balanceContent,
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
