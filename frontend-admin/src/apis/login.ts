import { API_URL } from '@/constants/url';
import fetcher from './fetcher';

interface LoginParams {
  nickname: string;
  password: string;
}

// 로그인
export const login = async ({ nickname, password }: LoginParams) => {
  return await fetcher.post(API_URL.login, {
    body: {
      nickname,
      password,
    },
    auth: false,
  });
};

// 로그아웃
export const logout = async () => {
  return await fetcher.post(API_URL.logout);
};
