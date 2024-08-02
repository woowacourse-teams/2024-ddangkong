import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

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
  },
  {
    path: 'round/result/status',
    element: <VoteStatusPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'nickname/:roomId?',
        element: <NicknamePage />,
      },
      {
        path: 'ready/:roomId',
        element: <ReadyPage />,
      },
      {
        path: 'game',
        element: <GamePage />,
      },
      {
        path: 'round/result',
        element: <RoundResultPage />,
      },
      {
        path: 'game/result',
        element: <GameResultPage />,
      },
    ],
  },
]);
