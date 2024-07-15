import { http, HttpResponse } from 'msw';

import QUESTION from '../data/question.json';

const fetchQuestionHandler = () => {
  return HttpResponse.json(QUESTION);
};

export const questionHandler = [
  http.get('/api/balances/rooms/:roomId/question', fetchQuestionHandler),
];
