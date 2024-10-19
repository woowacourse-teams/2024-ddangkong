import { createBrowserRouter } from 'react-router-dom';

import HeaderLayout from './HeaderLayout';
import {
  GamePage,
  GameResultPage,
  MainPage,
  NicknamePage,
  ReadyPage,
  RoundResultPage,
} from './lazyPages';
import MainLayout from './MainLayout';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RouterErrorFallback from '@/components/common/ErrorFallback/RouterErrorFallback/RouterErrorFallback';
import GameSkeleton from '@/components/common/Skeleton/GameSkeleton/GameSkeleton';
import ReadySkeleton from '@/components/common/Skeleton/ReadySkeleton/ReadySkeleton';

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
        path: '/',
        element: <HeaderLayout />,
        children: [
          {
            path: ':roomId/game',
            element: (
              <AsyncErrorBoundary pendingFallback={<GameSkeleton />}>
                <GamePage />
              </AsyncErrorBoundary>
            ),
          },
          {
            path: 'nickname/:roomUuid?',
            element: (
              <AsyncErrorBoundary>
                <NicknamePage />
              </AsyncErrorBoundary>
            ),
          },
          {
            path: ':roomId/ready',
            element: (
              <AsyncErrorBoundary pendingFallback={<ReadySkeleton />}>
                <ReadyPage />
              </AsyncErrorBoundary>
            ),
          },
          {
            path: ':roomId/round/result',
            element: (
              <AsyncErrorBoundary>
                <RoundResultPage />
              </AsyncErrorBoundary>
            ),
          },
          {
            path: ':roomId/game/result',
            element: (
              <AsyncErrorBoundary>
                <GameResultPage />
              </AsyncErrorBoundary>
            ),
          },
        ],
      },
    ],
  },
]);
