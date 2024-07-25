import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const nicknameListLayout = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
  row-gap: 1.2rem;
`;

export const nicknameContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;

export const verticalLine = css`
  width: 0.1rem;
  height: 100%;

  background-color: ${Theme.color.gray};
`;
