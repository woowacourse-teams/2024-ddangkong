import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useBalanceContentQuery from './useBalanceContentQuery';
import useMyGameStatusQuery from './useMyGameStatusQuery';

import { ROUTES } from '@/constants/routes';

interface UseMyGameStatusProps {
  roomId: number;
}

const useMyGameStatus = ({ roomId }: UseMyGameStatusProps) => {
  const navigate = useNavigate();
  const { balanceContent } = useBalanceContentQuery();

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({
    roomId: Number(roomId),
    currentRound: balanceContent?.currentRound,
  });

  useEffect(() => {
    if (isGameFinished) {
      navigate(ROUTES.gameResult(Number(roomId)));
    }
    if (isRoundFinished) {
      navigate(ROUTES.game(Number(roomId)));
    }
  }, [isRoundFinished, isGameFinished]);
};

export default useMyGameStatus;
