import fetcher from './fetcher';

import { nickname } from '@/components/GameResultItem/GameResultItem.styled';
import { API_URL } from '@/constants/url';

// 방 만들기
export const makeRoom = async (nickname: string) => {
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
export const enterRoom = async (roomId: number, nickname: string) => {
  const res = await fetcher.post({
    url: API_URL.roomMembers(roomId),
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

// 방 전체 멤버 조회
export const getMembers = async (roomId: number) => {
  const res = await fetcher.get({
    url: API_URL.roomMembers(roomId),
  });

  const data = await res.json();

  return data;
};
