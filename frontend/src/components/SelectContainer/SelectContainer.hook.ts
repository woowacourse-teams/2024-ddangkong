import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchRoundVoteIsFinished } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';
import { POLLING_DELAY } from '@/constants/time';

interface UseRoundIsFinishedQueryProps {
  contentId?: number;
  enabled: boolean;
}

export const useRoundIsFinishedQuery = ({ contentId, enabled }: UseRoundIsFinishedQueryProps) => {
  const { roomId } = useParams();

  const roundIsFinishedQuery = useQuery({
    queryKey: [QUERY_KEYS.roundIsFinished, Number(roomId), contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await fetchRoundVoteIsFinished({ roomId: Number(roomId), contentId });
    },
    enabled,
    refetchInterval: POLLING_DELAY,
    refetchIntervalInBackground: true,
  });

  return { ...roundIsFinishedQuery, isFinished: roundIsFinishedQuery.data?.isFinished };
};

interface UseRoundIsFinishedProps {
  contentId?: number;
  isFetching: boolean;
}

export const useRoundIsFinished = ({ contentId, isFetching }: UseRoundIsFinishedProps) => {
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

export const useSelectOption = () => {
  const [selectedOption, setSelectedOption] = useState({
    id: 0,
    isCompleted: false,
  });

  const handleClickOption = (selectedId: number) => {
    setSelectedOption((prev) => ({ ...prev, id: selectedId }));
  };

  const completeSelection = () => {
    setSelectedOption((prev) => ({ ...prev, isCompleted: true }));
  };

  return { selectedOption, handleClickOption, completeSelection };
};
