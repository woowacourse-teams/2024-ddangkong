const BASE_URL = process.env.API_BASE_URL;

export const API_URL = {
  balanceContent: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/content`,
  vote: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/votes`,
  roundVoteResult: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-result`,
  moveNextRound: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/next-round`,
  myGameStatus: (roomId: number, round: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/round-finished?round=${round}`,
  finalResult: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/final`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/members`,
  getRoomInfo: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}`,
  categoryList: `${BASE_URL}/api/balances/categories`,
  startGame: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/start`,
  roundVoteIsFinished: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-finished`,
  resetRoom: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/reset`,
  isRoomActivate: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/activate`,
  isRoomReset: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/reset`,
  applyRoomSetting: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}`,
};

type API_URL_KEYS = keyof typeof API_URL;

export const MOCK_API_URL: Record<API_URL_KEYS, string> = {
  balanceContent: `${BASE_URL}/api/balances/rooms/:roomId/content`,
  vote: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/votes`,
  roundVoteResult: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-result`,
  myGameStatus: `${BASE_URL}/api/balances/rooms/:roomId/round-finished`,
  moveNextRound: `${BASE_URL}/api/balances/rooms/:roomId/next-round`,
  finalResult: `${BASE_URL}/api/balances/rooms/:roomId/final`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: `${BASE_URL}/api/balances/rooms/:roomId/members`,
  getRoomInfo: `${BASE_URL}/api/balances/rooms/:roomId`,
  startGame: `${BASE_URL}/api/balances/rooms/:roomId/start`,
  roundVoteIsFinished: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-finished`,
  resetRoom: `${BASE_URL}/api/balances/rooms/:roomId/reset`,
  isRoomActivate: `${BASE_URL}/api/balances/rooms/:roomId/activate`,
  isRoomReset: `${BASE_URL}/api/balances/rooms/:roomId/reset`,
  categoryList: `${BASE_URL}/api/balances/categories`,
  applyRoomSetting: `${BASE_URL}/api/balances/rooms/:roomId`,
};
