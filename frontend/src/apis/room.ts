import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { RoomInfo, RoomIdAndMember } from '@/types/room';

// 방 만들기
export const createRoom = async (nickname: string): Promise<RoomIdAndMember> => {
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

// 방 초기화하기
export const resetRoom = async (roomId: number) => {
  const res = await fetcher.patch({
    url: API_URL.resetRoom(roomId),
    headers: {
      'Content-Type': `application/json`,
    },
  });
  return res;
};

// 방 참여하기
export const enterRoom = async (roomId: number, nickname: string): Promise<RoomIdAndMember> => {
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

// 방 정보 조회
export const getRoomInfo = async (roomId: number): Promise<RoomInfo> => {
  const res = await fetcher.get({
    url: API_URL.getRoomInfo(roomId),
  });

  if (!res.ok) {
    throw new Error('방 정보 가져오기에 실패하였습니다');
  }

  const data = await res.json();

  return data;
};
