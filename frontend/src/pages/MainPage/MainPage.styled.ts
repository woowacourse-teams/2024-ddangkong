import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const mainPageLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;

  background-color: ${Theme.color.peanut200};
`;

export const logoWrapper = css`
  width: 16rem;
  height: 16rem;

  background-color: white;
`;

export const title = css`
  font-size: 4.8rem;
`;

export const intro = css`
  color: ${Theme.color.gray400};
  font-size: 1.6rem;
`;
