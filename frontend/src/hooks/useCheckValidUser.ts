import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getUserInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';

const USER_INFO_STALE_TIME = 2 * 60 * 60 * 1000;

// 게임 중 잘못된 유저가 들어오는 것을 방지하기 위한 hook
const useCheckValidUser = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const navigate = useNavigate();

  const NOT_IN_GAME_PATH =
    location.pathname === ROUTES.main || location.pathname === ROUTES.nickname;

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getUserInfo, roomId],
    queryFn: getUserInfo,
    staleTime: USER_INFO_STALE_TIME,
    enabled: !NOT_IN_GAME_PATH,
  });

  useEffect(() => {
    if (roomId && data?.roomId && Number(roomId) !== data?.roomId) {
      navigate('/', { replace: true });
    }
  }, [location.pathname, data]);
};

export default useCheckValidUser;
