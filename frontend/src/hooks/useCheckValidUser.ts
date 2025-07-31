import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getUserInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ROUTES } from '@/constants/routes';

const USER_INFO_STALE_TIME = 2 * 60 * 60 * 1000;

const useCheckValidUser = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const navigate = useNavigate();

  const shouldSkipQuery =
    location.pathname === ROUTES.main || location.pathname === ROUTES.nickname;

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getUserInfo, roomId],
    queryFn: getUserInfo,
    staleTime: USER_INFO_STALE_TIME,
    enabled: !shouldSkipQuery,
  });

  useEffect(() => {
    if (roomId && data?.roomId && Number(roomId) !== data?.roomId) {
      navigate('/', { replace: true });
    }
  }, [location.pathname, data]);
};

export default useCheckValidUser;
