import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { getUserInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { RoomAndMember } from '@/types/room';

const USER_INFO_STALE_TIME = 2 * 60 * 60 * 1000;

const useGetUserInfo = (): RoomAndMember => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getUserInfo, roomId],
    queryFn: getUserInfo,
    staleTime: USER_INFO_STALE_TIME,
  });

  if (Number(roomId) !== data?.roomId) {
    navigate('/', { replace: true });
  }

  return {
    roomId: data?.roomId || 0,
    roomUuid: data?.roomUuid || '',
    member: {
      memberId: data?.member.memberId || 0,
      nickname: data?.member.nickname || '',
      isMaster: Boolean(data?.member.isMaster && Number(roomId) === data?.roomId),
    },
  };
};

export default useGetUserInfo;
