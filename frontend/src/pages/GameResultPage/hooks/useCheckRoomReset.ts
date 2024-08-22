import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { checkRoomReset } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ONE_MINUTE } from '@/constants/time';

export const useCheckRoomReset = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.roomReset, Number(roomId)],
    queryFn: async () => await checkRoomReset(Number(roomId)),
    refetchInterval: ONE_MINUTE,
  });

  useEffect(() => {
    if (data?.isReset) {
      navigate(`/${roomId}/ready`);
    }
  }, [data?.isReset, roomId, navigate]);
};
