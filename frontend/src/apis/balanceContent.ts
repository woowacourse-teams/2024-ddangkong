import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { BalanceContent, GameResult } from '@/types/balanceContent';
import { RoundVoteResult } from '@/types/roundVoteResult';

export const fetchBalanceContent = async (roomId = 1): Promise<BalanceContent> => {
  const res = await fetcher.get({ url: API_URL.balanceContent(roomId) });

  const data = await res.json();

  return data;
};

export const voteBalanceContent = async (optionId: number, roomId = 1, contentId = 1) => {
  const res = await fetcher.post({
    url: API_URL.vote(roomId, contentId),
    body: {
      memberId: 1,
      optionId,
    },
  });

  const data = await res.json();

  return data;
};

export const fetchRoundVoteResult = async (roomId = 1, contentId = 1): Promise<RoundVoteResult> => {
  const res = await fetcher.get({
    url: API_URL.roundVoteResult(roomId, contentId),
  });

  const data = await res.json();

  return data;
};

export const moveNextRound = async (roomId = 1): Promise<RoundVoteResult> => {
  const res = await fetcher.post({
    url: API_URL.moveNextRound(roomId),
  });

  const data = await res.json();

  return data;
};

export const fetchFinalGameResult = async (roomId = 1): Promise<GameResult[]> => {
  const res = await fetcher.get({
    url: API_URL.finalResult(roomId),
  });

  const data = await res.json();

  return data;
};
