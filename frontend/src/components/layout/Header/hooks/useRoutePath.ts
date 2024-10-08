import { useLocation, useParams } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

const useRoutePath = () => {
  const location = useLocation();
  const { roomId } = useParams();

  const currentPath = {
    isNicknamePage: location.pathname.startsWith(ROUTES.nickname),
    isReadyPage: location.pathname === ROUTES.ready(Number(roomId)),
    isRoundResultPage: location.pathname === ROUTES.roundResult(Number(roomId)),
    isMatchingResultPage: location.pathname === ROUTES.gameResult(Number(roomId)),
  };

  return {
    isNicknamePage: currentPath.isNicknamePage,
    isReadyPage: currentPath.isReadyPage,
    isRoundResultPage: currentPath.isRoundResultPage,
    isMatchingResultPage: currentPath.isMatchingResultPage,
  };
};

export default useRoutePath;
