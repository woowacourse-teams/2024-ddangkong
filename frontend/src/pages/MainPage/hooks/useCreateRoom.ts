import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

const useCreateRoom = () => {
  const navigate = useNavigate();

  const handleRoomCreate = () => {
    navigate(ROUTES.nickname);
  };

  return { handleRoomCreate };
};

export default useCreateRoom;
