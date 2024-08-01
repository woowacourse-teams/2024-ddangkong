import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const timerLayout = css`
  display: flex;
  position: relative;
  flex-basis: 5%;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding: 0 1rem;
  border-radius: ${Theme.borderRadius.radius30};

  background-color: ${Theme.color.peanut200};
  box-sizing: border-box;
`;

export const timerInnerLayout = (width: number) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}%;
  height: 60%;
  border-radius: ${Theme.borderRadius.radius30};

  background-color: ${Theme.color.peanut500};
  transition: width 1s linear;
`;

export const timerWrapper = (width: number) => css`
  display: flex;
  position: absolute;
  right: ${100 - width}%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 4rem;
  transition: all 1s linear;
`;

export const timerIcon = css`
  position: absolute;
`;

export const timerText = css`
  position: absolute;
  top: 5.2rem;

  font-weight: bold;
  font-size: 1.6rem;
`;
