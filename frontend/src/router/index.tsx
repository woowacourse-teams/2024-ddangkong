import { createBrowserRouter } from 'react-router-dom';

import GamePage from '@/pages/GamePage/GamePage';
import GameResultPage from '@/pages/GameResultPage/GameResultPage';
import RoundResultPage from '@/pages/RoundResultPage/RoundResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
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
