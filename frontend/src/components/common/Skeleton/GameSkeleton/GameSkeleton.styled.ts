import { css } from '@emotion/react';

export const skeletonLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
  border-radius: 8px;
`;

export const skeletonCategory = css`
  width: 100%;
  height: 15vh;
  border-radius: 0.8rem 0.8rem 0 0;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const skeletonText = css`
  width: 100%;
  height: 3.6rem;
  border-radius: 0.4rem;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const skeletonOptionContainer = css`
  width: 100%;
  height: 35vh;
  border-radius: 4px;

  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);
  background-size: 400%;

  animation: skeleton-animation 5s ease infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;
