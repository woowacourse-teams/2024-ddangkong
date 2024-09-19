import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { isRoomInitial } from '@/apis/room';
import { POLLING_DELAY, POLLING_ERROR_FAILURE_COUNT } from '@/constants/config';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';

export const useIsRoomInitial = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.isRoomInitial, Number(roomId)],
    queryFn: async () => await isRoomInitial(Number(roomId)),
    refetchInterval: (query) => {
      if (query.state.error && query.state.fetchFailureCount >= POLLING_ERROR_FAILURE_COUNT) {
        return false;
      }
      return POLLING_DELAY;
    },
    refetchIntervalInBackground: true,
    gcTime: 0,
  });

  useEffect(() => {
    if (data?.isInitial) {
      navigate(ROUTES.ready(Number(roomId)));
    }
  }, [data?.isInitial, roomId, navigate]);
};
