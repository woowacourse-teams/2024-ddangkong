import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatusQuery from '@/hooks/useMyGameStatusQuery';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const useOptionParticipants = () => {
  const { search } = useLocation();
  const roomId = Number(new URLSearchParams(search).get('roomId'));
  const navigate = useNavigate();

  const { balanceContent } = useBalanceContentQuery();

  const { groupRoundResult } = useRoundVoteResultQuery({
    contentId: balanceContent?.contentId,
    roomId: roomId,
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
  };
};

export default useOptionParticipants;
