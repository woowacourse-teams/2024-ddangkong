import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getRoomInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGetRoomInfo = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.roomMembers, Number(roomId)],
    queryFn: ({ queryKey: [_, roomId] }) => getRoomInfo(Number(roomId)),
    refetchInterval: 1000,
  });

  useEffect(() => {
    if (data?.isGameStart) {
      navigate(`/${roomId}/game`);
    }
  }, [data?.isGameStart, roomId, navigate]);

  return { members: data?.members, roomSetting: data?.roomSetting, isLoading, isError };
};
