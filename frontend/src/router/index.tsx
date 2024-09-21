import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';
import {
  GamePage,
  GameResultPage,
  MainPage,
  NicknamePage,
  ReadyPage,
  RoundResultPage,
  VoteStatusPage,
} from './lazyPages';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import RouterErrorFallback from '@/components/common/ErrorFallback/RouterErrorFallback/RouterErrorFallback';
import GameSkeleton from '@/components/common/Skeleton/GameSkeleton/GameSkeleton';
import ReadySkeleton from '@/components/common/Skeleton/ReadySkeleton/ReadySkeleton';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <RouterErrorFallback />,
  },
  {
    path: ':roomId/game',
    element: (
      <RootErrorBoundary>
        <AsyncErrorBoundary pendingFallback={<GameSkeleton />}>
          <GamePage />
        </AsyncErrorBoundary>
      </RootErrorBoundary>
    ),
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'nickname/:roomUuid?',
        element: (
          <AsyncErrorBoundary>
            <NicknamePage />,
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
        path: ':roomId/round/result/status',
        element: (
          <AsyncErrorBoundary>
            <VoteStatusPage />
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
    errorElement: <RouterErrorFallback />,
  },
]);
