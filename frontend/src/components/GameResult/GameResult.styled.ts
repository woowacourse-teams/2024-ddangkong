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

export const gameResultHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const gameResultTitle = css`
  ${Theme.typography.slogan};
`;

export const gameResultCaption = css`
  ${Theme.typography.caption};
`;

export const rankListContainer = css`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const noMatchingLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 3.5rem;
`;

export const noMatchingImg = css`
  width: 18rem;
`;

export const noMatchingText = css`
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  white-space: pre-line;
`;
