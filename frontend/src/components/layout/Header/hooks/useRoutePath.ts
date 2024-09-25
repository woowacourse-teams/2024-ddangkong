import { useLocation, useParams } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

const useRoutePath = () => {
  const location = useLocation();
  const { roomId } = useParams();

  const currentPath = {
    isNicknamePage: location.pathname.startsWith(ROUTES.nickname),
    isReadyPage: location.pathname === ROUTES.ready(Number(roomId)),
    isRoundResultPage: location.pathname === ROUTES.roundResult(Number(roomId)),
    isFinalResultPage: location.pathname === ROUTES.gameResult(Number(roomId)),
    isRoundResultStatusPage: location.pathname === ROUTES.roundResultStatus(Number(roomId)),
  };

  return {
    isNicknamePage: currentPath.isNicknamePage,
    isReadyPage: currentPath.isReadyPage,
    isRoundResultPage: currentPath.isRoundResultPage,
    isRoundResultStatusPage: currentPath.isRoundResultStatusPage,
    isFinalResultPage: currentPath.isFinalResultPage,
  };
};

export default useRoutePath;
