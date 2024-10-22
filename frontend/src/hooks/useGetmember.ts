import { useQuery } from '@tanstack/react-query';

import { getMember } from '@/apis/room';
import { RoomAndMember } from '@/types/room';

const useGetmember = (): RoomAndMember => {
  const { data } = useQuery({
    queryKey: ['getMember'],
    queryFn: getMember,
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

export default useGetmember;
