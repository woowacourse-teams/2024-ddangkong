const BASE_URL = process.env.API_BASE_URL;

export const API_URL = {
  balanceContent: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/content`,
  vote: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/votes`,
  roundVoteResult: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-result`,
  moveNextRound: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/contents`,
  finalResult: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/final`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/members`,
  getRoomInfo: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}`,
  startGame: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/start`,
  roundVoteIsFinished: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-finished`,
};

export const MOCK_API_URL = {
  balanceContent: `${BASE_URL}/api/balances/rooms/:roomId/content`,
  vote: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/votes`,
  roundVoteResult: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-result`,
  moveNextRound: `${BASE_URL}/api/balances/rooms/:roomId/contents`,
  finalResult: `${BASE_URL}/api/balances/rooms/:roomId/final`,
  room: `${BASE_URL}/api/balances/rooms`,
  enterRoom: `${BASE_URL}/api/balances/rooms/:roomId/members`,
  getRoomInfo: `${BASE_URL}/api/balances/rooms/:roomId`,
  startGame: `${BASE_URL}/api/balances/rooms/:roomId/start`,
  roundVoteIsFinished: `${BASE_URL}/api/balances/rooms/:roomId/contents/:contentId/vote-finished`,
};
