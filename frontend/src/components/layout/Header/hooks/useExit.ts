import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { exitRoom } from '@/apis/room';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import { deleteAllCookies } from '@/utils/cookie';

export const useExit = () => {
  const {
    member: { memberId },
  } = useGetUserInfo();
  const navigate = useNavigate();
  const { roomId } = useParams();

  const exitRoomMutation = useMutation<void, Error, { roomId: number; memberId: number }>({
    mutationFn: ({ roomId, memberId }) => exitRoom(roomId, memberId),
    onSettled: () => {
      deleteAllCookies();
      navigate('/');
    },
  });

  const handleExit = () => {
    exitRoomMutation.mutate({ roomId: Number(roomId), memberId: Number(memberId) });
  };

  return { handleExit };
};
