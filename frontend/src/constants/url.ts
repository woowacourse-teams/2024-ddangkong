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
  roundVoteIsFinished: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-finished`,
  resetRoom: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/reset`,
};

export const MOCK_API_URL = {
  balanceContent: `${BASE_URL}/api/balances/rooms/:roomId/content`,
  vote: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/votes`,
  roundVoteResult: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-result`,
  myGameStatus: `${BASE_URL}/api/balances/rooms/:roomId/round-finished?round=:round`,
  moveNextRound: `${BASE_URL}/api/balances/rooms/:roomId/next-round`,
  finalResult: `${BASE_URL}/api/balances/rooms/:roomId/final`,
  room: `${BASE_URL}/api/balances/rooms`,
  roomMembers: `${BASE_URL}/api/balances/rooms/:roomId`,
  roundVoteIsFinished: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-finished`,
};
