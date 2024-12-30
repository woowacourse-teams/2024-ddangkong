import { css, Theme } from '@emotion/react';

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  height: 4rem;
  width: 100%;
`;

export const leftHeader = css`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  height: 100%;
`;

export const image = css`
  width: 100%;
  height: 100%;
`;

export const loginTitle = css`
  font-size: 2.4rem;
  font-weight: bold;
`;

export const rightHeader = css`
  display: flex;
  align-items: center;
`;

export const logoutButton = (theme: Theme) => css`
  height: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: ${theme.color.gray};
  }
`;
