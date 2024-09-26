import { css } from '@emotion/react';

export const skeletonLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const skeletonCategory = css`
  width: 85%;
  height: 20vh;
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

export const skeletonBody = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 85%;
  height: 100%;
`;

export const skeletonInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const skeletonText = css`
  width: 100%;
  height: 1.6rem;
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

export const skeletonMemberContainer = css`
  width: 100%;
  height: 40vh;
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
