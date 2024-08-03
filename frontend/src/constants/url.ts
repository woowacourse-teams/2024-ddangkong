const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : '';

export const API_URL = {
  balanceContent: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/content`,
  vote: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/votes`,
  roundVoteResult: (roomId: number, contentId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/contents/${contentId}/vote-result`,
  moveNextRound: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/contents`,
  myGameStatus: (roomId: number, round: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}?round=${round}`,
  finalResult: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/final`,
};

export const MOCK_API_URL = {
  balanceContent: '/api/balances/rooms/:roomId/content',
  vote: '/api/balances/rooms/:roomId/contents/:contentId/votes',
  roundVoteResult: '/api/balances/rooms/:roomId/contents/:contentId/vote-result',
  myGameStatus: '/api/balances/rooms/:roomId?myRound=:myRound',
  moveNextRound: '/api/balances/rooms/:roomId/contents',
  finalResult: '/api/balances/rooms/:roomId/final',
};
