import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

import ErrorPage from '@/pages/ErrorPage/ErrorPage';
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
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Layout />,
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
        path: ':roomId/game',
        element: <GamePage />,
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
    errorElement: <ErrorPage />,
  },
]);
