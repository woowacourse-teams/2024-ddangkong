import { css } from '@emotion/react';

export const spinnerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 6.5rem;
`;

export const rotatingImage = (size: number) => css`
  width: ${size}rem;
  height: 20vh;

  animation: spin 2s linear infinite; /* 2초 동안 한 바퀴 회전하는 애니메이션 */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const spinnerText = css`
  margin-top: 1.6rem;

  font-size: 1.8rem;
  text-align: center;
`;
