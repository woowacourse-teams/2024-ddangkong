import { http, HttpResponse } from 'msw';

// import ROOM_AND_MEMBER from '../data/RoomInfo.json';
import ROOM_MEMBERS from '../data/roomMembers.json';

import { MOCK_API_URL } from '@/constants/url';
import { RoomMembers } from '@/types/room';

export const roomHandler = [
  //   http.get(MOCK_API_URL.roomMembers, () => HttpResponse.json<RoomMembers>(ROOM_MEMBERS)),
];
