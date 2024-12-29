import { css, Theme } from "@emotion/react";

export const alertModalTitle = css`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const alertText = css`
  word-break: keep-all;
`;

export const deleteButton = (theme: Theme) => css`
  border: 1px solid ${theme.color.red300};

  &:hover {
    background-color: ${theme.color.red300};
    color: ${theme.color.white};
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
