import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import useCreateRoom from './useCreateRoom';
import useEnterRoom from './useEnterRoom';

const DEFAULT_IMAGE_URL = 'https://storage.googleapis.com/ddangkong-images/image1.png';

const useAccessRoom = () => {
  const { roomUuid } = useParams();
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL);
  // roomUuId가 없다 -> 초대링크를 받지 않은 master이다.
  const isMaster = !roomUuid;

  const { createRoomMutation, handleCreateRoom } = useCreateRoom({ nicknameInputRef, imageUrl });
  const { enterRoomMutation, handleEnterRoom } = useEnterRoom({ nicknameInputRef, imageUrl });

  const changeImageUrl = (newImageUrl: string) => {
    setImageUrl(newImageUrl);
  };

  return {
    nicknameInputRef,
    handleCreateRoom,
    handleEnterRoom,
    changeImageUrl,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
    isSuccess: isMaster ? createRoomMutation.isSuccess : enterRoomMutation.isSuccess,
    imageUrl,
  };
};

export default useAccessRoom;
