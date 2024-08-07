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

  const data = await res.json();

  return data;
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

  const data = await res.json();

  return data;
};

// 방 정보 조회
export const getRoomInfo = async (roomId: number): Promise<RoomInfo> => {
  const res = await fetcher.get({
    url: API_URL.getRoomInfo(roomId),
  });

  const data = await res.json();

  return data;
};

// 게임 시작
export const startGame = async (roomId: number): Promise<void> => {
  await fetcher.patch({
    url: API_URL.startGame(roomId),
  });
};
