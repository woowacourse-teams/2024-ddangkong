import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const rankItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  width: 100%;

  ${Theme.typography.headline3};

  :focus {
    outline: none;
  }
`;

export const rankNicknameWrapper = css`
  display: flex;
  align-items: center;
  width: 85%;
`;

export const rankNumberContainer = css`
  display: flex;
  justify-content: center;
  width: 15%;
`;

export const rankNumber = css`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const nicknameContainer = (percent: number) => css`
  display: flex;
  overflow: visible;
  position: relative;
  align-items: center;
  gap: 1rem;

  width: ${percent > 15 ? percent - 15 : percent}%;
  height: 100%;
  padding: 2rem 1.2rem;
  border-radius: ${Theme.borderRadius.radius20};

  background-color: ${Theme.color.peanut400};
  transition: all 1s;
`;

export const useInfoWrapper = css`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 0.8rem;
  width: 55vw;
`;

export const rankPercentWrapper = css`
  display: flex;
  justify-content: center;
  width: 15%;
`;

export const rankPercent = css`
  ${Theme.typography.headline3};
`;

export const nickname = css`
  white-space: nowrap;
  min-width: 5.6rem;
`;

export const profileImage = css`
  width: 1.8rem;
  height: 1.8rem;
`;
