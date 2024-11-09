import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const barContainer = css`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: inherit;
  border-radius: 1.6rem;
`;

export const barWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;

  color: black;
  font-weight: bold;
  font-size: 1.6rem;
  transition: all 1s;
`;

export const firstBar = (percent: number, isBigFirstOption: boolean) => css`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 1.6rem 0 0 1.6rem;

  background-color: ${isBigFirstOption ? Theme.color.peanut400 : Theme.color.gray};
  transform: translateX(5px);
  clip-path: ${percent === 100 ? 'none' : 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'};
`;

export const secondBar = (percent: number, isBigFirstOption: boolean) => css`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 0 1.6rem 1.6rem 0;

  background-color: ${isBigFirstOption ? Theme.color.gray : Theme.color.peanut400};
  transform: translateX(-5px);
  clip-path: ${percent === 100 ? 'none' : 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)'};
`;
