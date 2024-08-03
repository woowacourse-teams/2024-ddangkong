import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import FINAL_RESULT from '../data/finalResult.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import VOTE_RESULT from '../data/roundVoteResult.json';

import { MOCK_API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';
import { RoundVoteResult } from '@/types/roundVoteResult';

const voteBalanceContentHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  return HttpResponse.json(
    {
      choiceId: 1,
    },
    { status: 201 },
  );
};

const fetchVoteResultHandler = async () => {
  return HttpResponse.json<RoundVoteResult>(VOTE_RESULT);
};

const goToNextRoundHandler = () => {
  BALANCE_CONTENT.currentRound += 1;

  return HttpResponse.json<BalanceContent>(BALANCE_CONTENT, { status: 201 });
};

const fetchFinalResultHandler = async () => {
  return HttpResponse.json(FINAL_RESULT);
};

const checkMyGameStatusHandler = () => {
  setTimeout(() => {
    MY_GAME_STATUS.isRoundFinished = true;
  }, 5 * 1000);

  return HttpResponse.json(MY_GAME_STATUS);
};

export const voteHandler = [
  http.post(MOCK_API_URL.vote, voteBalanceContentHandler),
  http.get(MOCK_API_URL.roundVoteResult, fetchVoteResultHandler),
  http.get(MOCK_API_URL.myGameStatus, checkMyGameStatusHandler),
  http.post(MOCK_API_URL.moveNextRound, goToNextRoundHandler),
  http.get(MOCK_API_URL.finalResult, fetchFinalResultHandler),
];
