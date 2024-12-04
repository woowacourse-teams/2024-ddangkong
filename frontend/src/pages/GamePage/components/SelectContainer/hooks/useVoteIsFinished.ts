import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useVoteIsFinishedQuery from './useVoteIsFinishedQuery';

import { ROUTES } from '@/constants/routes';

interface UseRoundIsFinishedProps {
  isFetching: boolean;
  contentId?: number;
}

const useVoteIsFinished = ({ contentId, isFetching }: UseRoundIsFinishedProps) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { isFinished, memberCount, voteCount, isPending } = useVoteIsFinishedQuery({
    contentId,
    enabled: !!contentId && !isFetching,
  });

  useEffect(() => {
    if (isFinished && !isFetching) {
      navigate(ROUTES.roundResult(Number(roomId)), { replace: true });
    }
  }, [isFinished, navigate, roomId, isFetching]);

  return { memberCount, voteCount, isPending };
};

export default useVoteIsFinished;
