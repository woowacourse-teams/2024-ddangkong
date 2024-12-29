import { css, Theme } from "@emotion/react";

export const deleteButton = (theme: Theme) => css`
  border: 0.1rem solid ${theme.color.red300};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  white-space: nowrap;

  &:enabled {
    color: ${theme.color.red300};
  }

  &:hover {
    background-color: ${theme.color.red300};
    color: white;
    transition: all 0.2s;
  }
`;
