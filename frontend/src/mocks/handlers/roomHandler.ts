import { http, HttpResponse } from 'msw';

import ROOM_INFO from '../data/roomInfo.json';

import { MOCK_API_URL } from '@/constants/url';

const getRoomInfo = () => {
  return HttpResponse.json(ROOM_INFO);
};

export const roomHandler = [http.get(MOCK_API_URL.getRoomInfo, getRoomInfo)];
