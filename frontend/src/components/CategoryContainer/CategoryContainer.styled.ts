import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const categoryContainerLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 1.6rem 0 2.4rem;
  border-radius: 2rem;

  background-color: ${Theme.color.peanut400};
`;

export const title = css`
  font-weight: 800;
  font-size: 2.8rem;
`;

export const subtitle = css`
  font-weight: 600;
`;
