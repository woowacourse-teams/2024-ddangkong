import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';

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
