import { http, HttpResponse } from "msw";

import { MOCK_API_URL } from "@/constants/url";

const loginHandler = () => {
  return new HttpResponse(null, { status: 200 });
};

const logoutHandler = () => {
  return new HttpResponse(null, { status: 200 });
};

export const loginHandlers = [
  http.post(MOCK_API_URL.login, loginHandler),
  http.post(MOCK_API_URL.logout, logoutHandler),
];
