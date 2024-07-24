import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

import GamePage from '@/pages/GamePage/GamePage';
import GameResultPage from '@/pages/GameResultPage/GameResultPage';
import MainPage from '@/pages/MainPage/MainPage';
import NicknamePage from '@/pages/NicknamePage/NicknamePage';
import RoundResultPage from '@/pages/RoundResultPage/RoundResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'nickname',
        element: <NicknamePage />,
      },
      {
        path: 'ready',
        element: <div>게임 대기 화면</div>,
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
