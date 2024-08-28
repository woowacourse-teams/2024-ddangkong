import { css, keyframes } from '@emotion/react';

import { Theme } from '../../styles/Theme';

export const toastLayout = (isVisible: boolean) => css`
  position: fixed;
  bottom: 4.4rem;
  left: 50%;
  padding: 1rem 2rem;
  border-radius: ${Theme.borderRadius.radius20};

  background-color: rgb(0 0 0 / 80%);

  color: white;
  font-size: 1.2rem;
  text-align: center;

  animation: ${isVisible ? fadeIn : fadeOut} 0.5s ease forwards;
  word-break: keep-all;
  transform: translateX(-50%);
  box-shadow: 0 0.2rem 0.4rem rgb(0 0 0 / 20%);
  transition: opacity 0.3s ease-in-out;
`;

const fadeIn = keyframes`
  from {
    opacity: ${Theme.opacity.invisible};
    transform: translateX(-50%) translateY(1rem);
  }
  to {
    opacity: ${Theme.opacity.default};
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: ${Theme.opacity.invisible};
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: ${Theme.opacity.default};
    transform: translateX(-50%) translateY(1rem);
  }
`;
