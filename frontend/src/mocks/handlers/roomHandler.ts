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

const applyRoomSettingHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  ROOM_INFO.roomSetting = body;

  return new HttpResponse(null, { status: 204 });
};

export const roomHandler = [
  http.get(MOCK_API_URL.roomMembers, getRoomMemberHandler),
  http.get(MOCK_API_URL.categoryList, getCategoryListHandler),
  http.patch(MOCK_API_URL.applyRoomSetting, applyRoomSettingHandler),
];
