import { flexCenter } from '@/styles/common';
import { css, Theme } from '@emotion/react';

export const contentLayout = (theme: Theme) => css`
  ${flexCenter}
  height: 100%;
  background-color: ${theme.color.peanut300};
`;

export const contentContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 95%;
  gap: 2.8rem;
  padding: 2.4rem 3.6rem;
  background-color: white;
  border-radius: 2.4rem;
`;
