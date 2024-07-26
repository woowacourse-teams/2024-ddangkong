import { http, HttpResponse } from 'msw';

import BALANCE_CONTENT from '../data/balanceContent.json';

import { MOCK_API_URL } from '@/constants/url';
import { BalanceContent } from '@/types/balanceContent';

const fetchBalanceContentHandler = () => {
  return HttpResponse.json<BalanceContent>(BALANCE_CONTENT);
};

export const contentHandler = [http.get(MOCK_API_URL.balanceContent, fetchBalanceContentHandler)];
