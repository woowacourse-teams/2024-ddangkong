import { useQuery } from '@tanstack/react-query';

import { isJoinableRoom } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { CustomError } from '@/utils/error';

interface useIsJoinableRoomQueryProps {
  roomUuid?: string;
}

const useIsJoinableRoomQuery = ({ roomUuid }: useIsJoinableRoomQueryProps) => {
  const isJoinableRoomQuery = useQuery({
    queryKey: [QUERY_KEYS.isJoinable, roomUuid],
    queryFn: async () => isJoinableRoom(roomUuid || ''),
    select: ({ isJoinable }) => {
      if (isJoinable === false) {
        throw new CustomError({ errorCode: 'CAN_NOT_JOIN_ROOM', status: 400 });
      }
    },
    enabled: !!roomUuid,
  });

  return {
    ...isJoinableRoomQuery,
    isJoinable: isJoinableRoomQuery.data,
  };
};

export default useIsJoinableRoomQuery;
