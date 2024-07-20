import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const layout = (selected: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.4rem;
  height: 16.8rem;
  padding: 1.6rem;

  background-color: ${selected ? Theme.color.peanut500 : Theme.color.peanut300};

  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  word-break: keep-all;
  border-radius: 3rem;

  transition: all 0.5s;
  scale: ${selected ? 1.1 : 1};
`;
