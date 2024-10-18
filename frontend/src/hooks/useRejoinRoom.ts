import { useQuery } from '@tanstack/react-query';

import { rejoinRoom } from '@/apis/room';
import { RoomAndMember } from '@/types/room';

const useRejoinRoom = (): RoomAndMember => {
  const { data } = useQuery({
    queryKey: ['rejoinRoom'],
    queryFn: rejoinRoom,
  });

  return {
    roomId: data?.roomId || 0,
    roomUuid: data?.roomUuid || '',
    member: {
      memberId: data?.member?.memberId || 0,
      nickname: data?.member?.nickname || '',
      isMaster: data?.member?.isMaster || false,
    },
  };
};

export default useRejoinRoom;
