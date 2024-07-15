import fetcher from './fetcher';

import { API_URL } from '@/constants/url';

export const fetchQuestion = async (roomId = 1) => {
  const res = await fetcher.get({ url: API_URL.question(roomId) });

  const data = await res.json();

  return data;
};

export const voteQuestion = async (choiceId: number, roomId = 1, questionId = 1) => {
  const res = await fetcher.post({
    url: API_URL.vote(roomId, questionId),
    body: {
      memberId: 1,
      choiceId,
    },
  });

  const data = await res.json();

  return data;
};
