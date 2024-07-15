import { css } from '@emotion/react';
import { Theme } from '@/styles/Theme';

export const buttonLayout = (active: boolean) => css`
  padding: 1rem 4rem;

  background-color: ${active ? Theme.color.peanut500 : Theme.color.peanut300};

  font-weight: bold;
  font-size: 2rem;
  border-radius: 2.4rem;
`;
