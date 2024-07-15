import { http, HttpResponse } from 'msw';

const voteQuestionHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  return HttpResponse.json(
    {
      choiceId: 1,
    },
    { status: 201 },
  );
};

export const voteHandler = [
  http.post('/api/balances/rooms/:roomId/questions/:questionId/votes', voteQuestionHandler),
];
