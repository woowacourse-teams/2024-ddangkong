import { flexCenter } from '@/styles/common';
import { css, Theme } from '@emotion/react';

export const loginLayout = (theme: Theme) => css`
  ${flexCenter}
  height: 100%;
  background-color: ${theme.color.peanut300};
`;

export const loginContainer = css`
  width: 45rem;
  ${flexCenter}
  flex-direction: column;
  gap: 2.8rem;
  padding: 3.6rem 4.8rem;
  background-color: white;
  border-radius: 2.4rem;
`;

export const loginHeaderContainer = css`
  ${flexCenter}
  gap: 2.4rem;
  height: 6rem;
`;

export const image = css`
  width: 100%;
  height: 100%;
`;

export const loginTitle = css`
  font-size: 3.6rem;
  font-weight: bold;
`;
