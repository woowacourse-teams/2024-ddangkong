import { css, keyframes } from '@emotion/react';

import { Theme } from '@/styles/Theme';

const slideUp = keyframes`
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, 0);
  }
`;

export const bottomSheetBackdropLayout = css`
  position: fixed;
  inset: 0;

  background-color: rgb(0 0 0 / 50%);
`;

export const bottomSheetContentWrapper = css`
  position: fixed;
  bottom: 0;
  left: 50%;

  width: 100%;
  padding: 1.2rem 1.6rem 3.2rem;

  background-color: white;

  animation: ${slideUp} 0.3s ease-out;
  transform: translateX(-50%);
  border-top-left-radius: ${Theme.borderRadius.radius10};
  border-top-right-radius: ${Theme.borderRadius.radius10};

  max-height: 70vh;
  overflow-y: auto;
`;

export const bottomSheetHeaderLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.6rem;
  margin-bottom: 2rem;
`;

export const bottomSheetHandle = css`
  width: 4rem;
  height: 0.4rem;
  padding: 0;
  border: none;
  border-radius: 0.2rem;

  background-color: ${Theme.color.gray300};
  cursor: pointer;
`;

export const bottomSheetContentLayout = css`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
