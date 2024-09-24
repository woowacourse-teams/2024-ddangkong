import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import FINAL_RESULT from '../data/finalResult.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import VOTE_RESULT from '../data/roundVoteResult.json';
import VOTE_IS_FINISHED from '../data/voteIsFinished.json';

import { MOCK_API_URL } from '@/constants/url';
import { RoundVoteResult } from '@/types/roundVoteResult';

const voteBalanceContentHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();
  VOTE_IS_FINISHED.isFinished = false;
  return HttpResponse.json(body, { status: 201 });
};

const fetchVoteResultHandler = async () => {
  return HttpResponse.json<RoundVoteResult>(VOTE_RESULT);
};

const goToNextRoundHandler = () => {
  BALANCE_CONTENT.currentRound += 1;
  MY_GAME_STATUS.isRoundFinished = true;
  VOTE_IS_FINISHED.isFinished = false;
  return HttpResponse.json({ state: 204 });
};

const fetchFinalResultHandler = async () => {
  return HttpResponse.json(FINAL_RESULT);
};

export const voteHandler = [
  http.post(MOCK_API_URL.vote, voteBalanceContentHandler),
  http.get(MOCK_API_URL.roundVoteResult, fetchVoteResultHandler),
  http.patch(MOCK_API_URL.moveNextRound, goToNextRoundHandler),
  http.get(MOCK_API_URL.matchingResult, fetchFinalResultHandler),
];
