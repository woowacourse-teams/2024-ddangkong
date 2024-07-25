import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const gameResultLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  width: 100%;
`;

export const gameResultTitle = css`
  ${Theme.typography.slogan};
`;

export const rankListContainer = css`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
