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

import {
  AsyncErrorBoundary,
  RouterErrorFallback,
  GameSkeleton,
  ReadySkeleton,
} from '@/components/common';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouterErrorFallback />,
    children: [
      {
        path: '/',
        element: (
          <AsyncErrorBoundary>
            <MainPage />
          </AsyncErrorBoundary>
        ),
      },
      {
        path: '/',
        element: <HeaderLayout />,
        children: [
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
            path: ':roomId/game',
            element: (
              <AsyncErrorBoundary pendingFallback={<GameSkeleton />}>
                <GamePage />
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
