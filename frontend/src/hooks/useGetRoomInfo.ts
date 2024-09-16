import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getRoomInfo } from '@/apis/room';
import { POLLING_DELAY } from '@/constants/config';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGetRoomInfo = () => {
  const { roomId } = useParams();

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.roomMembers, Number(roomId)],
    queryFn: () => getRoomInfo(Number(roomId)),
    refetchInterval: (query) => {
      if (query.state.error && query.state.fetchFailureCount >= 3) {
        return false;
      }
      return POLLING_DELAY;
    },

    gcTime: 0,
  });

  return {
    members: data?.members,
    roomSetting: data?.roomSetting,
    master: data?.master,
  };
};
