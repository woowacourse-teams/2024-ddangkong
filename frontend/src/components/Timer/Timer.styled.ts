import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const timerLayout = css`
  display: flex;
  flex-basis: 5%;
  justify-content: center;
  width: 100%;
  height: 3.2rem;
  border: none;

  background: linear-gradient(to right, ${Theme.color.peanut500}, ${Theme.color.peanut300});
  border-radius: 1.7rem;
`;
