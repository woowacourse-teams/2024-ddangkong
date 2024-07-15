const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : '';

export const API_URL = {
  question: (roomId: number) => `${BASE_URL}/api/balances/rooms/${roomId}/question`,
  vote: (roomId: number, questionId: number) =>
    `${BASE_URL}/api/balances/rooms/${roomId}/questions/${questionId}/votes`,
};

export const MOCK_API_URL = {
  question: '/api/balances/rooms/:roomId/question',
  vote: '/api/balances/rooms/:roomId/questions/:questionId/votes',
};
