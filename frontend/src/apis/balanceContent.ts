import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { BalanceContent, GameFinalResult } from '@/types/balanceContent';
import { RoundVoteResult } from '@/types/roundVoteResult';

interface ContentResultParams {
  contentId: number;
  roomId: number;
}

interface VoteParams extends ContentResultParams {
  optionId: number;
}

interface RoundVoteIsFinished {
  finished: boolean;
}

// 밸런스 게임 컨텐츠 가져오기
export const fetchBalanceContent = async (roomId: number): Promise<BalanceContent> => {
  const res = await fetcher.get({ url: API_URL.balanceContent(roomId) });

  const data = await res.json();

  return data;
};

// 투표하기
export const voteBalanceContent = async ({ optionId, contentId, roomId }: VoteParams) => {
  const res = await fetcher.post({
    url: API_URL.vote(roomId, contentId),
    headers: {
      'Content-Type': `application/json`,
    },
    body: {
      memberId: 1,
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

// 다음 라운드로 이동하기
export const moveNextRound = async (roomId = 1): Promise<RoundVoteResult> => {
  const res = await fetcher.post({
    url: API_URL.moveNextRound(roomId),
    headers: {
      'Content-Type': `application/json`,
    },
  });

  const data = await res.json();

  return data;
};

// 최종 결과 가져오기
export const fetchFinalGameResult = async (roomId = 1): Promise<GameFinalResult[]> => {
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
