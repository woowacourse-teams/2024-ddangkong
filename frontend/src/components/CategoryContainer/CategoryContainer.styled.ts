import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const categoryContainerLayout = css`
  background-color: ${Theme.color.peanut400};
  height: 10rem;
  border-radius: 2rem;
  padding: 1.6rem 0 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const title = css`
  font-weight: 800;
  font-size: 2.8rem;
`;

export const subtitle = css`
  font-weight: 600;
`;
