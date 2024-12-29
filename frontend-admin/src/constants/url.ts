const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_URL = {
  login: `${BASE_URL}/api/admin/login`,
  logout: `${BASE_URL}/api/admin/logout`,
  balanceContent: (category: string) =>
    `${BASE_URL}/api/admin/balances/contents?category=${category}`,
  contents: `${BASE_URL}/api/admin/balances/contents`,
  options: `${BASE_URL}/api/admin/balances/options`,
  deleteContent: (contentId: number) => `${BASE_URL}/api/admin/balances/contents/${contentId}`,
  categoryList: `${BASE_URL}/api/admin/balances/categories`,
};

export const MOCK_API_URL = {
  login: `${BASE_URL}/api/admin/login`,
  logout: `${BASE_URL}/api/admin/logout`,
  balanceContent: `${BASE_URL}/api/admin/balances/contents?category=:category`,
  contents: `${BASE_URL}/api/admin/balances/contents`,
  options: `${BASE_URL}/api/admin/balances/options`,
  deleteContent: `${BASE_URL}/api/admin/balances/contents/:contentId`,
  categoryList: `${BASE_URL}/api/admin/balances/categories`,
};
