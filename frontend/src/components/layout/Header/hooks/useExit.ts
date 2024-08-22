import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { exitRoom } from '@/apis/room';
import { memberInfoState } from '@/recoil/atom';

export const useExit = () => {
  const { memberId } = useRecoilValue(memberInfoState);
  const navigate = useNavigate();
  const { roomId } = useParams();

  const exitRoomMutation = useMutation<void, Error, { roomId: number; memberId: number }>({
    mutationFn: ({ roomId, memberId }) => exitRoom(roomId, memberId),
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleExit = () => {
    exitRoomMutation.mutate({ roomId: Number(roomId), memberId: Number(memberId) });
  };

  return { handleExit };
};
