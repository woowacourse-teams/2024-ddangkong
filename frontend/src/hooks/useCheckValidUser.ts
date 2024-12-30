import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getUserInfo } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';

const USER_INFO_STALE_TIME = 2 * 60 * 60 * 1000;

const useCheckValidUser = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.getUserInfo, roomId],
    queryFn: getUserInfo,
    staleTime: USER_INFO_STALE_TIME,
  });

  useEffect(() => {
    if (roomId && data?.roomId && Number(roomId) !== data?.roomId) {
      navigate('/', { replace: true });
    }
  }, [location.pathname, data]);
};

export default useCheckValidUser;
