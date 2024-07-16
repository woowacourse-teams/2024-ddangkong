import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

import GamePage from '@/pages/GamePage/GamePage';
import GameResultPage from '@/pages/GameResultPage/GameResultPage';
import RoundResultPage from '@/pages/RoundResultPage/RoundResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GamePage />,
      },
      {
        path: 'round-result',
        element: <RoundResultPage />,
      },
      {
        path: 'game-result',
        element: <GameResultPage />,
      },
    ],
  },
]);
