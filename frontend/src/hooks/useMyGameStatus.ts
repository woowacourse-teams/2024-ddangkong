import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useBalanceContentQuery from './useBalanceContentQuery';
import useMyGameStatusQuery from './useMyGameStatusQuery';
import useRoundVoteResultQuery from './useRoundVoteResultQuery';

import { ROUTES } from '@/constants/routes';

const useMyGameStatus = () => {
  const { search } = useLocation();
  const roomId = Number(new URLSearchParams(search).get('roomId'));
  const navigate = useNavigate();

  const { balanceContent } = useBalanceContentQuery();

  const { groupRoundResult, totalResult } = useRoundVoteResultQuery({
    roomId: roomId,
    contentId: balanceContent?.contentId,
  });

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({ balanceContent, roomId });

  const goToGameResult = () => {
    navigate(ROUTES.gameResult);
  };

  const goToNextRound = async () => {
    navigate(ROUTES.game);
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
