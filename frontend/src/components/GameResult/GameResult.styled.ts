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

export const rankItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Theme.typography.headline3};
`;

export const rankInfoContainer = css`
  display: flex;
  flex-basis: 85%;
  align-items: center;
  gap: 1.2rem;
`;

export const rankNumber = css`
  ${Theme.typography.headline1}
`;

export const nicknameContainer = (percent: number) => css`
  display: flex;
  overflow: visible;
  gap: 1rem;
  width: ${percent > 5 ? percent - 5 : percent}%;
  height: 100%;
  padding: 1.2rem;
  border-radius: ${Theme.borderRadius.radius20};

  background-color: ${Theme.color.peanut400};
  transition: all 2s;
`;

export const rankPercent = css`
  ${Theme.typography.headline3}
`;

export const nickname = css`
  min-width: 5.6rem;
`;
