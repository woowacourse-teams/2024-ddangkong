import { css, keyframes } from '@emotion/react';

import { Theme } from '@/styles/Theme';

const shake = keyframes`
  0%{
      transform: rotate(0deg);
    }
    10%{
      transform: scale(1.5) rotate(45deg);
    }
    20%{
      transform: scale(1.5) rotate(-45deg);
    }
    30%{
      transform:  rotate(30deg);
    }
    40%{
      transform:  rotate(-30deg);
    }
    50%{
      transform: rotate(10deg);
    }
    60%{
      transform: rotate(-10deg);
    }
    100%{
      transform: rotate(0deg);
    }
`;

const progress = keyframes`
  0% {
      transform: scaleX(1);
  }
  100% {
      transform: scaleX(0);
    }
`;

const timerTransition = keyframes`
  0% {
      transform: translateX(0);
  }
  100%{
      transform: translateX(-95%);
  }
`;

export const timerLayout = css`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding: 0 1rem;
  border-radius: ${Theme.borderRadius.radius30};

  background-color: ${Theme.color.peanut200};
  box-sizing: border-box;
`;

export const timerInnerLayout = (timeLimit: number) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60%;
  border-radius: ${Theme.borderRadius.radius30};

  background-color: ${Theme.color.peanut500};

  transform-origin: left;

  animation: ${progress} ${timeLimit + 1}s linear;
`;

export const timerWrapper = (timeLimit: number) => css`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 4rem;

  animation: ${timerTransition} ${timeLimit + 1}s linear;
`;

export const timerIcon = css`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
`;

export const timerIconShake = css`
  animation: ${shake} 1s linear infinite;
`;

export const timerText = (isAlmostFinished: boolean) => css`
  position: absolute;
  top: 5.2rem;

  color: ${isAlmostFinished ? 'red' : 'black'};
  font-weight: bold;
  font-size: 1.6rem;
`;
