import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useCreateRoom from './useCreateRoom';
import useEnterRoom from './useEnterRoom';

const useCreateOrEnterRoom = () => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const { roomUuid } = useParams();

  // roomUuId가 없다 -> 초대링크를 받지 않은 master이다.
  const isMaster = !roomUuid;

  const { createRoomMutation, handleCreateRoom } = useCreateRoom({ nicknameInputRef });
  const { enterRoomMutation, handleEnterRoom } = useEnterRoom({ nicknameInputRef });

  const handleCreateOrEnterRoom = () => {
    if (isMaster) {
      handleCreateRoom();
    } else {
      handleEnterRoom();
    }
  };

  return {
    nicknameInputRef,
    handleCreateOrEnterRoom,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
  };
};

export default useCreateOrEnterRoom;
