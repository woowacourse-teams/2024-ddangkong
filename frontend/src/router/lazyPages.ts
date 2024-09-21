import { lazy } from 'react';

export const GamePage = lazy(() => import('@/pages/GamePage/GamePage'));
export const GameResultPage = lazy(() => import('@/pages/GameResultPage/GameResultPage'));
export const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
export const NicknamePage = lazy(() => import('@/pages/NicknamePage/NicknamePage'));
export const ReadyPage = lazy(() => import('@/pages/ReadyPage/ReadyPage'));
export const RoundResultPage = lazy(() => import('@/pages/RoundResultPage/RoundResultPage'));
export const VoteStatusPage = lazy(() => import('@/pages/VoteStatusPage/VoteStatusPage'));
