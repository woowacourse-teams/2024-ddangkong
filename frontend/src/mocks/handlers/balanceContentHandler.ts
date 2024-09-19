import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import VOTE_IS_FINISHED from '../data/voteIsFinished.json';

import { POLLING_DELAY } from '@/constants/config';
import { MOCK_API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';

const fetchBalanceContentHandler = () => {
  return HttpResponse.json<BalanceContent>(BALANCE_CONTENT);
};

const fetchVoteIsFinishedHandler = () => {
  setTimeout(() => {
    VOTE_IS_FINISHED.isFinished = true;
  }, 10 * POLLING_DELAY);
  setTimeout(() => {
    VOTE_IS_FINISHED.isFinished = false;
  }, 12 * POLLING_DELAY);

  return HttpResponse.json(VOTE_IS_FINISHED);
};

const getMyGameStatus = ({ request }: { request: Request }) => {
  return HttpResponse.json(MY_GAME_STATUS);
};

export const contentHandler = [
  http.get(MOCK_API_URL.balanceContent, fetchBalanceContentHandler),
  http.get(MOCK_API_URL.voteIsFinished, fetchVoteIsFinishedHandler),
  http.get(MOCK_API_URL.myGameStatus, getMyGameStatus),
];
