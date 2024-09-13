import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { isRoomInitial } from '@/apis/room';
import { POLLING_DELAY } from '@/constants/config';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';

export const useIsRoomInitial = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.isRoomInitial, Number(roomId)],
    queryFn: async () => await isRoomInitial(Number(roomId)),
    refetchInterval: POLLING_DELAY,
    gcTime: 0,
  });

  useEffect(() => {
    if (data?.isInitial) {
      navigate(ROUTES.ready(Number(roomId)));
    }
  }, [data?.isInitial, roomId, navigate]);
};
