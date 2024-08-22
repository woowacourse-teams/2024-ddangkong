import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import ROUND_VOTE_IS_FINISHED from '../data/roundVoteIsFinished.json';

import { ONE_MINUTE } from '@/constants/time';
import { MOCK_API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';

const fetchBalanceContentHandler = () => {
  return HttpResponse.json<BalanceContent>(BALANCE_CONTENT);
};

const fetchIsFinishedHandler = () => {
  setTimeout(() => {
    ROUND_VOTE_IS_FINISHED.isFinished = true;
  }, 17 * ONE_MINUTE);

  return HttpResponse.json(ROUND_VOTE_IS_FINISHED);
};

const getMyGameStatus = ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const round = url.searchParams.get('round');

  return HttpResponse.json(MY_GAME_STATUS);
};

export const contentHandler = [
  http.get(MOCK_API_URL.balanceContent, fetchBalanceContentHandler),
  http.get(MOCK_API_URL.roundVoteIsFinished, fetchIsFinishedHandler),
  http.get(MOCK_API_URL.myGameStatus, getMyGameStatus),
];
