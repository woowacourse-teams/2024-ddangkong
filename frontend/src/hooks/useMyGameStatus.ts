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
  const { balanceContent } = useBalanceContentQuery(Number(roomId));

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({
    roomId: Number(roomId),
    currentRound: balanceContent?.currentRound,
  });

  useEffect(() => {
    // 게임 중단
    if (isGameFinished && isRoundFinished) {
      navigate(ROUTES.gameResult(Number(roomId)));
      return;
    }
    // 라운드 종료
    if (isRoundFinished) {
      navigate(ROUTES.game(Number(roomId)));
      return;
    }
    // 게임 종료
    if (isGameFinished) {
      navigate(ROUTES.gameResult(Number(roomId)));
      return;
    }
  }, [isRoundFinished, isGameFinished, navigate, roomId]);
};

export default useMyGameStatus;
