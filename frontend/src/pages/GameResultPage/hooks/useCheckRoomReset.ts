import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { checkRoomReset } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useCheckRoomReset = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.roomReset, Number(roomId)],
    queryFn: async () => await checkRoomReset(Number(roomId)),
    refetchInterval: 1000,
  });

  useEffect(() => {
    if (data?.isReset) {
      navigate(`/${roomId}/ready`);
    }
  }, [data?.isReset, roomId, navigate]);
};
