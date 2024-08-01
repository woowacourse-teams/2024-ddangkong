import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { RoomInfo, RoomMembers, RoomAndMember } from '@/types/room';

// 방 만들기
export const makeRoom = async (nickname: string): Promise<RoomAndMember> => {
  const res = await fetcher.post({
    url: API_URL.room,
    headers: {
      'Content-Type': `application/json`,
    },
    body: {
      nickname,
    },
  });

  if (!res.ok) {
    throw new Error('방 생성에 실패하였습니다');
  }

  const data = await res.json();

  return data;
};

// 방 참여하기
export const enterRoom = async (roomId: number, nickname: string): Promise<RoomInfo> => {
  const res = await fetcher.post({
    url: API_URL.enterRoom(roomId),
    headers: {
      'Content-Type': `application/json`,
    },
    body: {
      nickname,
    },
  });

  if (!res.ok) {
    throw new Error('방 참여에 실패하였습니다');
  }

  const data = await res.json();

  return data;
};

// 방 전체 멤버 조회
export const getRoomMembers = async (roomId: number): Promise<RoomMembers> => {
  const res = await fetcher.get({
    url: API_URL.roomMembers(roomId),
  });

  if (!res.ok) {
    throw new Error('방 멤버 가져오기에 실패하였습니다');
  }

  const data = await res.json();

  return data;
};
