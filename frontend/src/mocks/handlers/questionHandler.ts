import { http, HttpResponse } from 'msw';

import QUESTION from '../data/question.json';

import { MOCK_API_URL } from '@/constants/url';

const fetchQuestionHandler = () => {
  return HttpResponse.json(QUESTION);
};

export const questionHandler = [http.get(MOCK_API_URL.question, fetchQuestionHandler)];
