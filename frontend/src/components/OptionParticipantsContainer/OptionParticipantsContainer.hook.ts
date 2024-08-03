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

  useEffect(() => {
    if (isGameFinished) {
      navigate(ROUTES.gameResult);
    }
    if (isRoundFinished) {
      navigate(ROUTES.game);
    }
  }, [isRoundFinished, isGameFinished]);

  return {
    groupRoundResult,
  };
};

export default useOptionParticipants;
