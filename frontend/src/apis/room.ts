import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import { RoomInfo, RoomIdAndMember, Category, RoomSetting } from '@/types/room';

interface CategoryResponse {
  categoryList: Category[];
}

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

// 방 설정 카테고리 리스트 받기
export const getCategoryList = async (): Promise<CategoryResponse> => {
  const res = await fetcher.get({
    url: API_URL.categoryList,
  });

  const data = await res.json();

  return data;
};

// 방 설정 적용
export const applyRoomSetting = async (roomId: number, roomSetting: RoomSetting): Promise<void> => {
  const { totalRound, timeLimit, category } = roomSetting;
  await fetcher.patch({
    url: API_URL.applyRoomSetting(roomId),
    body: { totalRound, timeLimit, category },
  });
};
