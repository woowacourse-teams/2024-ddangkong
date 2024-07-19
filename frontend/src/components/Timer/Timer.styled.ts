import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const layout = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.2rem;
  flex-basis: 5%;

  background: linear-gradient(to right, ${Theme.color.peanut500}, ${Theme.color.peanut300});
  border: none;
  border-radius: 1.7rem;
`;
