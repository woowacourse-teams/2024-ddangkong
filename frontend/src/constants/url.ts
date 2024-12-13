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
  matchingResult: (roomId: number, memberId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/members/${memberId}/matching`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: (roomUuid: string) => `${BASE_URL}/api/balances/rooms/${roomUuid}/members`,
  getRoomInfo: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}`,
  categoryList: `${BASE_URL}/api/balances/categories`,
  startGame: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/start`,
  voteIsFinished: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-finished`,
  resetRoom: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/reset`,
  isRoomActivate: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/activate`,
  isRoomInitial: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/initial`,
  applyRoomSetting: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}`,
  deleteRoom: (roomId: number, memberId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/members/${memberId}`,
  isJoinableRoom: (roomUuid: string) => `${BASE_URL}/api/balances/rooms/${roomUuid}/status`,
  getUserInfo: `${BASE_URL}/api/balances/rooms/member`,
};

type API_URL_KEYS = keyof typeof API_URL;

export const MOCK_API_URL: Record<API_URL_KEYS, string> = {
  getUserInfo: `${BASE_URL}/api/balances/rooms/member`,
  getRoomInfo: `${BASE_URL}/api/balances/rooms/:roomId`,
  balanceContent: `${BASE_URL}/api/balances/rooms/:roomId/content`,
  vote: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/votes`,
  roundVoteResult: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-result`,
  myGameStatus: `${BASE_URL}/api/balances/rooms/:roomId/round-finished`,
  moveNextRound: `${BASE_URL}/api/balances/rooms/:roomId/next-round`,
  matchingResult: `${BASE_URL}/api/balances/rooms/:roomId/members/:memberId/matching`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: `${BASE_URL}/api/balances/rooms/:roomUuid/members`,
  startGame: `${BASE_URL}/api/balances/rooms/:roomId/start`,
  voteIsFinished: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-finished`,
  resetRoom: `${BASE_URL}/api/balances/rooms/:roomId/reset`,
  isRoomActivate: `${BASE_URL}/api/balances/rooms/:roomId/activate`,
  isRoomInitial: `${BASE_URL}/api/balances/rooms/:roomId/initial`,
  categoryList: `${BASE_URL}/api/balances/categories`,
  applyRoomSetting: `${BASE_URL}/api/balances/rooms/:roomId`,
  deleteRoom: `${BASE_URL}/api/balances/rooms/:roomId/members/:memberId`,
  isJoinableRoom: `${BASE_URL}/api/balances/rooms/:roomUuid/status`,
};

export const INVITE_URL = (roomUuid: string) => {
  return `${window.location.origin}${`/nickname/${roomUuid}`}`;
};
