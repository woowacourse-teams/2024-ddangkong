import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { RoomAndMember } from '@/types/room';

const USER_INFO_STALE_TIME = 2 * 60 * 60 * 1000;

const useGetUserInfo = (): RoomAndMember => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getUserInfo],
    queryFn: getUserInfo,
    staleTime: USER_INFO_STALE_TIME,
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

export default useGetUserInfo;
