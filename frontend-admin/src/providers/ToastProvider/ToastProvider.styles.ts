import { theme } from '@/styles/theme';
import { css, keyframes, Theme } from '@emotion/react';

export const toastLayout = (theme: Theme, isVisible: boolean) => css`
  position: fixed;
  top: 4.4rem;
  left: 50%;
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;

  background-color: ${theme.color.peanut400};

  color: ${theme.color.black};
  font-size: 1.6rem;
  text-align: center;

  animation: ${isVisible ? fadeIn : fadeOut} 0.5s ease forwards;
  word-break: keep-all;
  transform: translateX(-50%);
  box-shadow: 0 0.2rem 0.4rem rgb(0 0 0 / 20%);
  transition: opacity 0.5s ease-in-out;
`;

const fadeIn = keyframes`
  from {
    opacity: ${theme.opacity.invisible};
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: ${theme.opacity.default};
    transform: translateX(-50%) translateY(1rem);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: ${theme.opacity.invisible};
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: ${theme.opacity.default};
    transform: translateX(-50%) translateY(1rem);
  }
`;
