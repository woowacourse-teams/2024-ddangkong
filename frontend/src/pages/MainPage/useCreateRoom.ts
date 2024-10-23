import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ROUTES } from '@/constants/routes';
import { memberInfoState } from '@/recoil/atom';

export const useCreateRoom = () => {
  const navigate = useNavigate();
  const setMemberInfo = useSetRecoilState(memberInfoState);

  const goToNicknamePage = () => {
    navigate(ROUTES.nickname);
  };

  const handleRoomCreate = () => {
    goToNicknamePage();
    setMemberInfo((memberInfo) => ({ ...memberInfo, isMaster: true }));
  };

  return { handleRoomCreate };
};
