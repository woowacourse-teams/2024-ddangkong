import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { BalanceContent, GameFinalResult, MyGameStatus } from '@/types/balanceContent';
import { RoundVoteResult } from '@/types/roundVoteResult';

interface ContentResultParams {
  contentId: number;
  roomId: number;
}

interface VoteParams extends ContentResultParams {
  optionId: number;
  memberId: number;
}

interface myGameStatusParams {
  roomId: number;
  currentRound: number;
}

interface RoundVoteIsFinished {
  isFinished: boolean;
}

// 밸런스 게임 컨텐츠 가져오기
export const fetchBalanceContent = async (roomId: number): Promise<BalanceContent> => {
  const res = await fetcher.get({ url: API_URL.balanceContent(roomId) });

  const data = await res.json();

  return data;
};

// 투표하기
export const voteBalanceContent = async ({ optionId, contentId, roomId, memberId }: VoteParams) => {
  const res = await fetcher.post({
    url: API_URL.vote(roomId, contentId),
    headers: {
      'Content-Type': `application/json`,
    },
    body: {
      memberId,
      optionId,
    },
  });

  const data = await res.json();

  return data;
};

// 라운드 통계 가져오기
export const fetchRoundVoteResult = async ({
  contentId,
  roomId,
}: ContentResultParams): Promise<RoundVoteResult> => {
  const res = await fetcher.get({
    url: API_URL.roundVoteResult(roomId, contentId),
  });

  const data = await res.json();

  return data;
};

// 나의 라운드 종료 및 게임 종료 확인
export const checkMyGameStatus = async ({
  roomId,
  currentRound,
}: myGameStatusParams): Promise<MyGameStatus> => {
  const res = await fetcher.get({
    url: API_URL.myGameStatus(roomId, currentRound),
    headers: {
      'Content-Type': `application/json`,
    },
  });

  const data = await res.json();
  return data;
};

// 다음 라운드로 이동하기
export const moveNextRound = async (roomId: number) => {
  const res = await fetcher.patch({
    url: API_URL.moveNextRound(roomId),
    headers: {
      'Content-Type': `application/json`,
    },
  });
};

// 최종 결과 가져오기
export const fetchFinalGameResult = async (roomId: number): Promise<GameFinalResult[]> => {
  const res = await fetcher.get({
    url: API_URL.finalResult(roomId),
  });

  const data = await res.json();

  return data;
};

// 현재 라운드가 끝났는지 여부 확인하기
export const fetchRoundVoteIsFinished = async ({
  contentId,
  roomId,
}: ContentResultParams): Promise<RoundVoteIsFinished> => {
  const res = await fetcher.get({
    url: API_URL.roundVoteIsFinished(roomId, contentId),
  });

  const data = await res.json();

  return data;
};
