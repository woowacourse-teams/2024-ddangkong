import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const layout = (selected: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.4rem;
  height: 16.8rem;
  padding: 1.6rem;

  background-color: ${selected ? Theme.color.peanut400 : Theme.color.peanut300};

  color: #000; /* 텍스트 색상 */
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  word-break: keep-all;
  border-radius: 3rem; /* 둥근 모서리 */

  transition: all 0.5s;
  scale: ${selected ? 1.1 : 1};
`;
