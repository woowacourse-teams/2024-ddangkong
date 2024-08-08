import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchRoundVoteIsFinished } from '@/apis/balanceContent';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';

const POLLING_DELAY = 1000;

interface UseRoundIsFinishedQueryProps {
  contentId?: number;
}

export const useRoundIsFinishedQuery = ({ contentId }: UseRoundIsFinishedQueryProps) => {
  const { roomId } = useParams();

  const roundIsFinishedQuery = useQuery({
    queryKey: [QUERY_KEYS.roundIsFinished, roomId, contentId],
    queryFn: async () => {
      if (typeof contentId === 'undefined') {
        throw new Error('contentId 가 존재하지 않습니다.');
      }

      return await fetchRoundVoteIsFinished({ roomId: Number(roomId), contentId });
    },
    enabled: !!contentId,
    refetchInterval: POLLING_DELAY,
    refetchIntervalInBackground: true,
  });

  return { ...roundIsFinishedQuery, isFinished: roundIsFinishedQuery.data?.isFinished };
};

interface UseRoundIsFinishedProps {
  contentId?: number;
  isFetching: boolean;
  isFetched: boolean;
}

export const useRoundIsFinished = ({
  contentId,
  isFetching,
  isFetched,
}: UseRoundIsFinishedProps) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { isFinished } = useRoundIsFinishedQuery({
    contentId,
  });

  useEffect(() => {
    if (isFinished && !isFetching && isFetched) {
      navigate(ROUTES.roundResult(Number(roomId)), { replace: true });
    }
  }, [isFinished, navigate, roomId]);

  return { isFinished };
};

export const useSelectOption = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleSelectOption = (selectedId: number) => {
    setSelectedId(selectedId);
  };

  return { selectedId, handleSelectOption };
};
