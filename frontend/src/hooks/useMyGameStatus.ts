import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useBalanceContentQuery from './useBalanceContentQuery';
import useMyGameStatusQuery from './useMyGameStatusQuery';
import useRoundVoteResultQuery from './useRoundVoteResultQuery';

import { ROUTES } from '@/constants/routes';

const useMyGameStatus = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { balanceContent } = useBalanceContentQuery();

  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: Number(roomId),
    contentId: balanceContent?.contentId,
  });

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({
    roomId: Number(roomId),
    balanceContent,
  });

  const goToGameResult = () => {
    navigate(ROUTES.gameResult);
  };

  const goToNextRound = async () => {
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

  return {
    groupRoundResult,
    totalResult,
  };
};

export default useMyGameStatus;
