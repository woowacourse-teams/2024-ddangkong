import fetcher from './fetcher';

import { API_URL } from '@/constants/url';
import {
  RoomInfo,
  CreateOrEnterRoomResponse,
  Category,
  RoomSettingApply,
  RoomAndMember,
} from '@/types/room';

interface CategoryResponse {
  categories: Category[];
}

// 방 만들기
export const createRoom = async (nickname: string): Promise<CreateOrEnterRoomResponse> => {
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
export const enterRoom = async (
  roomUuid: string,
  nickname: string,
): Promise<CreateOrEnterRoomResponse> => {
  const res = await fetcher.post({
    url: API_URL.enterRoom(roomUuid),
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

// 방 활성화 여부 확인
export const isRoomActivate = async (roomId: number) => {
  const res = await fetcher.get({
    url: API_URL.isRoomActivate(roomId),
  });
  const data = await res.json();
  return data;
};

// 방 설정 카테고리 리스트 받기
export const getCategoryList = async (): Promise<CategoryResponse> => {
  const res = await fetcher.get({
    url: API_URL.categoryList,
  });

  const data = await res.json();

  return data;
};

// 방 초기화 여부 확인
export const isRoomInitial = async (roomId: number) => {
  const res = await fetcher.get({
    url: API_URL.isRoomInitial(roomId),
  });

  const data = await res.json();

  return data;
};

// 방 설정 적용
export const applyRoomSetting = async (
  roomId: number,
  roomSetting: RoomSettingApply,
): Promise<void> => {
  const { totalRound, timeLimit, category } = roomSetting;
  await fetcher.patch({
    url: API_URL.applyRoomSetting(roomId),
    headers: {
      'Content-Type': `application/json`,
    },
    body: { totalRound, timeLimit, category },
  });
};

// 방에서 나가기
export const exitRoom = async (roomId: number, memberId: number) => {
  await fetcher.delete({
    url: API_URL.deleteRoom(roomId, memberId),
  });
};

// 방 참여여부 확인
export const isJoinableRoom = async (roomUuid: string): Promise<{ isJoinable: boolean }> => {
  const res = await fetcher.get({
    url: API_URL.isJoinableRoom(roomUuid),
  });

  const data = await res.json();

  return data;
};

// 방 재접속 (새로고침 후 유저정보 가져올 때 사용)
export const rejoinRoom = async (): Promise<RoomAndMember> => {
  const res = await fetcher.get({
    url: API_URL.rejoinRoom,
  });
  const data = await res.json();
  return data;
};
