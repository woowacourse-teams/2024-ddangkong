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
  width: 100%;
`;

export const bottomSheetHandle = css`
  width: 4rem;
  height: 0.4rem;
  margin: 0 auto 1.6rem;
  border-radius: 0.2rem;

  background-color: ${Theme.color.gray300};
`;

export const bottomSheetContentLayout = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
