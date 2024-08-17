import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { applyRoomSetting } from '@/apis/room';
import { RoomSetting } from '@/types/room';

const useApplyRoomSetting = () => {
  const { roomId } = useParams();

  return useMutation({
    mutationFn: async (roomSetting: RoomSetting) =>
      await applyRoomSetting(Number(roomId), roomSetting),
  });
};

export default useApplyRoomSetting;
