import { css, keyframes } from '@emotion/react';

import { Theme } from '@/styles/Theme';

// 텍스트 글로우 애니메이션
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px ${Theme.color.peanut200}, 0 0 20px ${Theme.color.peanut300}, 0 0 30px ${Theme.color.peanut300}, 0 0 40px ${Theme.color.peanut300}, 0 0 50px ${Theme.color.peanut400}, 0 0 60px ${Theme.color.peanut400}, 0 0 70px ${Theme.color.peanut500};
  }
  30% {
    text-shadow: 0 0 20px ${Theme.color.peanut200}, 0 0 30px ${Theme.color.peanut300}, 0 0 40px ${Theme.color.peanut300}, 0 0 50px ${Theme.color.peanut300}, 0 0 60px ${Theme.color.peanut400}, 0 0 70px ${Theme.color.peanut400}, 0 0 80px ${Theme.color.peanut500};
  }
  70% {
    text-shadow: 0 0 20px ${Theme.color.peanut200}, 0 0 30px ${Theme.color.peanut300}, 0 0 40px ${Theme.color.peanut300}, 0 0 50px ${Theme.color.peanut300}, 0 0 60px ${Theme.color.peanut400}, 0 0 70px ${Theme.color.peanut400}, 0 0 80px ${Theme.color.peanut500};
  }
  100% {
    text-shadow: 0 0 10px ${Theme.color.peanut200}, 0 0 20px ${Theme.color.peanut300}, 0 0 30px ${Theme.color.peanut300}, 0 0 40px ${Theme.color.peanut300}, 0 0 50px ${Theme.color.peanut400}, 0 0 60px ${Theme.color.peanut400}, 0 0 70px ${Theme.color.peanut500};
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
    transform: scale(1);
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
  height: 100vh;

  color: ${Theme.color.peanut500};
  inset: 0;
`;

export const countdown = css`
  font-weight: bold;
  font-size: 5.2rem;

  animation:
    ${countdownAnimation} 1s ease-in-out infinite,
    ${glowAnimation} 1s infinite;
`;

export const peanutWrapper = css`
  display: flex;
  gap: 1.6rem;
`;

export const peanut = css`
  width: 5.2rem;

  animation: ${peanutAnimation} 1s ease-in-out infinite;
`;
