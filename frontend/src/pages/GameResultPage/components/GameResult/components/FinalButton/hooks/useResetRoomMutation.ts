import { useMutation } from '@tanstack/react-query';

import { resetRoom } from '@/apis/room';

const useResetRoomMutation = (roomId: number) => {
  return useMutation({
    mutationFn: async () => await resetRoom(roomId),
  });
};

export default useResetRoomMutation;
