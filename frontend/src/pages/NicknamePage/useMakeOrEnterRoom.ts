import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { enterRoom, createRoom } from '@/apis/room';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { ROUTES } from '@/constants/routes';
import useModal from '@/hooks/useModal';
import { memberInfoState, roomUuidState } from '@/recoil/atom';
import { CreateOrEnterRoomResponse } from '@/types/room';
import { CustomError } from '@/utils/error';

const useMakeOrEnterRoom = () => {
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [{ isMaster }, setMemberInfo] = useRecoilState(memberInfoState);

  const [, setRoomUuidState] = useRecoilState(roomUuidState);
  const { roomUuid } = useParams();
  const { show: showModal } = useModal();

  const createRoomMutation = useMutation<CreateOrEnterRoomResponse, CustomError, string>({
    mutationFn: createRoom,
    onSuccess: (data) => {
      setMemberInfo((prev) => ({
        ...prev,
        memberId: data.member.memberId,
      }));
      setRoomUuidState(data.roomUuid || '');
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
    onError: (error) => {
      showModal(AlertModal, { title: '방 생성 에러', message: error.message });
    },
  });

  const enterRoomMutation = useMutation<
    CreateOrEnterRoomResponse,
    CustomError,
    { nickname: string; roomUuid: string }
  >({
    mutationFn: ({ nickname, roomUuid }) => enterRoom(roomUuid, nickname),
    onSuccess: (data) => {
      setMemberInfo((prev) => ({ ...prev, memberId: data.member.memberId }));
      setRoomUuidState(data.roomUuid || '');
      navigate(ROUTES.ready(Number(data.roomId)), { replace: true });
    },
    onError: (error: CustomError) => {
      showModal(AlertModal, { title: '방 참여 에러', message: error.message });
    },
  });

  const handleMakeOrEnterRoom = () => {
    const nickname = nicknameInputRef.current?.value || nicknameInputRef.current?.placeholder || '';
    if (isMaster) {
      createRoomMutation.mutate(nickname);
    } else {
      enterRoomMutation.mutate({ nickname, roomUuid: roomUuid || '' });
    }
  };

  return {
    nicknameInputRef,
    handleMakeOrEnterRoom,
    isLoading: isMaster ? createRoomMutation.isPending : enterRoomMutation.isPending,
  };
};

export default useMakeOrEnterRoom;
