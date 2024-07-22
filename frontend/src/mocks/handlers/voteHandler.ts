import { http, HttpResponse } from 'msw';

import { MOCK_API_URL } from '@/constants/url';

const voteBalanceContentHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  return HttpResponse.json(
    {
      choiceId: 1,
    },
    { status: 201 },
  );
};

export const voteHandler = [http.post(MOCK_API_URL.vote, voteBalanceContentHandler)];
