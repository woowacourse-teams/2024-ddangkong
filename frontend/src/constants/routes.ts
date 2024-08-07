export const ROUTES = {
  main: '/',
  nickname: '/nickname',
  ready: '/ready',
  game: (roomId: number) => `/${roomId}/game`,
  roundResult: (roomId: number) => `/${roomId}/round/result`,
  roundResultVote: '/round/result/vote',
  gameResult: (roomId: number) => `/${roomId}/game/result`,
  roundResultStatus: (roomId: number) => `/${roomId}/round/result/status`,
} as const;
