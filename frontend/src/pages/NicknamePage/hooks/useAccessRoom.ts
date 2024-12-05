import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useCreateRoom from './useCreateRoom';
import useEnterRoom from './useEnterRoom';

const useAccessRoom = () => {
  const { roomUuid } = useParams();
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  // roomUuId가 없다 -> 초대링크를 받지 않은 master이다.
  const isMaster = !roomUuid;

  const { createRoomMutation, handleCreateRoom } = useCreateRoom({ nicknameInputRef });
  const { enterRoomMutation, handleEnterRoom } = useEnterRoom({ nicknameInputRef });

  return {
    nicknameInputRef,
    handleCreateRoom,
    handleEnterRoom,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
    isSuccess: isMaster ? createRoomMutation.isSuccess : enterRoomMutation.isSuccess,
  };
};

export default useAccessRoom;
