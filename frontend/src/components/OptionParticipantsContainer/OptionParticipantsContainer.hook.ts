import { useLocation } from 'react-router-dom';

import useBalanceContentQuery from '@/hooks/useBalanceContentQuery';
import useMyGameStatusQuery from '@/hooks/useMyGameStatusQuery';
import useRoundVoteResultQuery from '@/hooks/useRoundVoteResultQuery';

const useOptionParticipants = () => {
  const { search } = useLocation();
  const roomId = Number(new URLSearchParams(search).get('roomId'));

  const { balanceContent } = useBalanceContentQuery();

  const { groupRoundResult } = useRoundVoteResultQuery({
    contentId: balanceContent?.contentId,
    roomId: roomId,
  });

  const { isRoundFinished, isGameFinished } = useMyGameStatusQuery({ balanceContent, roomId });

  return {
    groupRoundResult,
  };
};

export default useOptionParticipants;
