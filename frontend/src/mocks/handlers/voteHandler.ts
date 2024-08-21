import { http, HttpResponse, PathParams } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';
import FINAL_RESULT from '../data/finalResult.json';
import MY_GAME_STATUS from '../data/myGameStatus.json';
import VOTE_RESULT from '../data/roundVoteResult.json';

import { MOCK_API_URL } from '@/constants/url';
import { RoundVoteResult } from '@/types/roundVoteResult';

const voteBalanceContentHandler = async ({
  params,
  request,
}: {
  params: PathParams;
  request: Request;
}) => {
  const { roomId } = params;
  if (typeof roomId === 'string' && roomId !== '1') {
    return new HttpResponse(null, { status: 400 });
  }
  const body = await request.json();

  return HttpResponse.json(
    {
      choiceId: body.optionId,
    },
    { status: 201 },
  );
};

const fetchVoteResultHandler = async () => {
  return HttpResponse.json<RoundVoteResult>(VOTE_RESULT);
};

const goToNextRoundHandler = () => {
  BALANCE_CONTENT.currentRound += 1;
  MY_GAME_STATUS.isRoundFinished = true;
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
