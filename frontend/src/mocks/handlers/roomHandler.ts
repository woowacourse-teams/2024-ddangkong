import { http, HttpResponse } from 'msw';

import CATEGORY_LIST from '../data/categoryList.json';
import ROOM_INFO from '../data/roomInfo.json';

import { MOCK_API_URL } from '@/constants/url';

const getRoomMemberHandler = () => {
  return HttpResponse.json(ROOM_INFO);
};

const getCategoryListHandler = () => {
  return HttpResponse.json(CATEGORY_LIST);
};

export const roomHandler = [
  http.get(MOCK_API_URL.roomMembers, getRoomMemberHandler),
  http.get(MOCK_API_URL.categoryList, getCategoryListHandler),
];
