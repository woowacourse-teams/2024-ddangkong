import { http, HttpResponse } from 'msw';

import CATEGORY_LIST from '../data/categoryList.json';
import MASTER_AND_RESET from '../data/masterAndReset.json';
import ROOM_INFO from '../data/roomInfo.json';

import { MOCK_API_URL } from '@/constants/url';

const getRoomInfoHandler = () => {
  return HttpResponse.json(ROOM_INFO);
};

const startGameHandler = async () => {
  ROOM_INFO.isGameStart = true;
  return HttpResponse.json(undefined, { status: 204 });
};

const resetRoomHandler = () => {
  MASTER_AND_RESET.isReset = true;
  return HttpResponse.json(undefined, { status: 204 });
};

const checkResetRoomHandler = () => {
  return HttpResponse.json(MASTER_AND_RESET);
};

const isRoomActivateHandler = () => {
  return HttpResponse.json({ isActivated: true });
};

const getCategoryListHandler = () => {
  return HttpResponse.json(CATEGORY_LIST);
};

const applyRoomSettingHandler = async ({ request }: { request: Request }) => {
  const body = await request.json();

  ROOM_INFO.roomSetting = body;

  return new HttpResponse(null, { status: 204 });
};

const deleteRoomHandler = () => {
  return HttpResponse.json(undefined, { status: 204 });
};

export const roomHandler = [
  http.get(MOCK_API_URL.getRoomInfo, getRoomInfoHandler),
  http.patch(MOCK_API_URL.startGame, startGameHandler),
  http.get(MOCK_API_URL.resetRoom, checkResetRoomHandler),
  http.patch(MOCK_API_URL.resetRoom, resetRoomHandler),
  http.patch(MOCK_API_URL.isRoomActivate, isRoomActivateHandler),
  http.get(MOCK_API_URL.categoryList, getCategoryListHandler),
  http.patch(MOCK_API_URL.applyRoomSetting, applyRoomSettingHandler),
  http.delete(MOCK_API_URL.deleteRoom, deleteRoomHandler),
];
