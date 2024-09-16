import { css, keyframes } from '@emotion/react';

import { Theme } from '@/styles/Theme';

// 텍스트 글로우 애니메이션
const glowAnimation = keyframes`
0% {
    text-shadow: 0 0 5px ${Theme.color.peanut200}, 
                 0 0 15px ${Theme.color.peanut300}, 
                 0 0 25px ${Theme.color.peanut300}, 
                 0 0 35px ${Theme.color.peanut300}, 
                 0 0 45px ${Theme.color.peanut400}, 
                 0 0 55px ${Theme.color.peanut400}, 
                 0 0 65px ${Theme.color.peanut500};
  }
  30% {
    text-shadow: 0 0 10px ${Theme.color.peanut200}, 
                 0 0 20px ${Theme.color.peanut300}, 
                 0 0 30px ${Theme.color.peanut300}, 
                 0 0 40px ${Theme.color.peanut300}, 
                 0 0 50px ${Theme.color.peanut400}, 
                 0 0 60px ${Theme.color.peanut400}, 
                 0 0 70px ${Theme.color.peanut500};
  }
  70% {
    text-shadow: 0 0 10px ${Theme.color.peanut200}, 
                 0 0 20px ${Theme.color.peanut300}, 
                 0 0 60px ${Theme.color.peanut400}, 
                 0 0 70px ${Theme.color.peanut500};
  }
  100% {
    text-shadow: 0 0 10px ${Theme.color.peanut200}, 
                 0 0 20px ${Theme.color.peanut300},  
                 0 0 60px ${Theme.color.peanut400}, 
                 0 0 70px ${Theme.color.peanut500};
  }
`;

export const countdownAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1.5);
    opacity: 1;
  }
  70% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const peanutAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1) rotate(20deg);
    opacity: 1;
  }
  70% {
    transform: scale(1) rotate(-20deg);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const countdownLayout = css`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  inset: 0;

  color: ${Theme.color.peanut500};
`;

export const dimmed = css`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: rgb(0 0 0 / 50%);
`;

export const countdown = css`
  ${Theme.typography.countdown};
  animation:
    ${countdownAnimation} 1s ease-in-out infinite,
    ${glowAnimation} 1s infinite;
`;

export const peanutWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  height: 10.8rem;
`;

export const peanut = (idx: number) => css`
  width: ${2.4 * idx}rem;
  height: ${3.6 * idx}rem;

  animation: ${peanutAnimation} 1s ease-in-out infinite;
`;
