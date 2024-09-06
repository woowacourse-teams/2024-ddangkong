import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useRoundIsFinishedQuery from './useRoundIsFinishedQuery';

import { ROUTES } from '@/constants/routes';

interface UseRoundIsFinishedProps {
  isFetching: boolean;
  contentId?: number;
}

const useRoundIsFinished = ({ contentId, isFetching }: UseRoundIsFinishedProps) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { isFinished } = useRoundIsFinishedQuery({
    contentId,
    enabled: !!contentId && !isFetching,
  });

  useEffect(() => {
    if (isFinished && !isFetching) {
      navigate(ROUTES.roundResult(Number(roomId)), { replace: true });
    }
  }, [isFinished, navigate, roomId, isFetching]);

  return { isFinished };
};

export default useRoundIsFinished;
