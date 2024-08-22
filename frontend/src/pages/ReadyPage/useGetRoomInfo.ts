import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getRoomInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ONE_SECOND } from '@/constants/time';

export const useGetRoomInfo = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.roomMembers, Number(roomId)],
    queryFn: ({ queryKey: [, roomId] }) => getRoomInfo(Number(roomId)),
    refetchInterval: ONE_SECOND,
  });

  useEffect(() => {
    if (data?.isGameStart) {
      navigate(`/${roomId}/game`);
    }
  }, [data?.isGameStart, roomId, navigate]);

  return { members: data?.members, roomSetting: data?.roomSetting, isLoading, isError };
};
