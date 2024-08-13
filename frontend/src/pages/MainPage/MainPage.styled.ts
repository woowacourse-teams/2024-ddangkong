import { css, keyframes } from '@emotion/react';

import { Theme } from '@/styles/Theme';

const bounce = keyframes`
  to{
      transform: translateY(-30px);
  }
`;

export const mainPageLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;
  padding-top: 10rem;

  background-color: ${Theme.color.peanut200};
`;

export const logoWrapper = css`
  width: 24rem;
  height: 24rem;
`;

export const logoIcon = css`
  width: 100%;
  height: 100%;

  animation: ${bounce} 0.6s 0.5s cubic-bezier(0, 0, 0.18, 0.99) infinite alternate;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const title = css`
  font-weight: bold;
  font-size: 4.8rem;
`;

export const intro = css`
  color: ${Theme.color.gray400};
  font-size: 1.6rem;
`;

export const buttonText = css`
  ${Theme.typography.headline1}
`;
