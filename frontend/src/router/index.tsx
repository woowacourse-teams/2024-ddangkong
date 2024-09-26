import { createBrowserRouter } from 'react-router-dom';

import HeaderLayout from './HeaderLayout';
import MainLayout from './MainLayout';

import RouterErrorFallback from '@/components/common/ErrorFallback/RouterErrorFallback/RouterErrorFallback';
import GamePage from '@/pages/GamePage/GamePage';
import GameResultPage from '@/pages/GameResultPage/GameResultPage';
import MainPage from '@/pages/MainPage/MainPage';
import NicknamePage from '@/pages/NicknamePage/NicknamePage';
import ReadyPage from '@/pages/ReadyPage/ReadyPage';
import RoundResultPage from '@/pages/RoundResultPage/RoundResultPage';
import VoteStatusPage from '@/pages/VoteStatusPage/VoteStatusPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouterErrorFallback />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: ':roomId/game',
        element: <GamePage />,
      },
      {
        path: '/',
        element: <HeaderLayout />,
        children: [
          {
            path: 'nickname/:roomUuid?',
            element: <NicknamePage />,
          },
          {
            path: ':roomId/ready',
            element: <ReadyPage />,
          },
          {
            path: ':roomId/round/result',
            element: <RoundResultPage />,
          },
          {
            path: ':roomId/round/result/status',
            element: <VoteStatusPage />,
          },
          {
            path: ':roomId/game/result',
            element: <GameResultPage />,
          },
        ],
      },
    ],
  },
]);
