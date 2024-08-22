import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import ROUND_VOTE_IS_FINISHED from '../data/roundVoteIsFinished.json';

import { ONE_SECOND } from '@/constants/time';
import { MOCK_API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';

const fetchBalanceContentHandler = () => {
  return HttpResponse.json<BalanceContent>(BALANCE_CONTENT);
};

const fetchIsFinishedHandler = () => {
  setTimeout(() => {
    ROUND_VOTE_IS_FINISHED.isFinished = true;
  }, 10 * ONE_SECOND);
  setTimeout(() => {
    ROUND_VOTE_IS_FINISHED.isFinished = false;
  }, 12 * ONE_SECOND);

  return HttpResponse.json(ROUND_VOTE_IS_FINISHED);
};

const getMyGameStatus = ({ request }: { request: Request }) => {
  return HttpResponse.json(MY_GAME_STATUS);
};

export const contentHandler = [
  http.get(MOCK_API_URL.balanceContent, fetchBalanceContentHandler),
  http.get(MOCK_API_URL.roundVoteIsFinished, fetchIsFinishedHandler),
  http.get(MOCK_API_URL.myGameStatus, getMyGameStatus),
];
