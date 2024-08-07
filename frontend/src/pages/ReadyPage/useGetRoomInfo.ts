import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getRoomInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGetRoomInfo = () => {
  const { roomId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.roomMembers, Number(roomId)],
    queryFn: ({ queryKey: [_, roomId] }) => getRoomInfo(Number(roomId)),
    refetchInterval: 1000,
  });

  return { data, isLoading, isError };
};
