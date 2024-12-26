import { API_URL } from "@/constants/url";
import fetcher from "./fetcher";

interface LoginParams {
  password: string;
}

// 로그인
export const login = async ({ password }: LoginParams) => {
  const res = await fetcher.post(API_URL.login, {
    body: {
      password,
    },
  });

  return await res.json();
};

// 로그아웃
export const logout = async () => {
  return await fetcher.post(API_URL.logout);
};
