import { useMutation, useQueryClient } from '@tanstack/react-query';

import { applyRoomSetting } from '@/apis/room';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { RoomSetting } from '@/types/room';

const useApplyRoomSetting = (roomId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (roomSetting: RoomSetting) => await applyRoomSetting(roomId, roomSetting),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.roomMembers, Number(roomId)] });
    },
  });
};

export default useApplyRoomSetting;
