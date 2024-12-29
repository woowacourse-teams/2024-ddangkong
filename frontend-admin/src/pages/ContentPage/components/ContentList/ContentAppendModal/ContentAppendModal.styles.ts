import { css, Theme } from '@emotion/react';

export const alertText = css`
  word-break: keep-all;
`;

export const appendButton = (theme: Theme) => css`
  &:hover {
    background-color: ${theme.color.peanut500};
    transition: all 0.2s;
  }
`;

export const closeButton = (theme: Theme) => css`
  border: 1px solid ${theme.color.black};

  &:hover {
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    transition: all 0.2s;
  }
`;
