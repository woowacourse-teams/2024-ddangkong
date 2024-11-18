import { useQuery } from '@tanstack/react-query';

import { isJoinableRoom } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

interface useIsJoinableRoomQueryProps {
  roomUuid?: string;
}

const useIsJoinableRoomQuery = ({ roomUuid }: useIsJoinableRoomQueryProps) => {
  const isJoinableRoomQuery = useQuery({
    queryKey: [QUERY_KEYS.isJoinable, roomUuid],
    queryFn: async () => isJoinableRoom(roomUuid || ''),
    enabled: !!roomUuid,
  });

  return {
    ...isJoinableRoomQuery,
    isJoinable: isJoinableRoomQuery.data,
  };
};

export default useIsJoinableRoomQuery;
