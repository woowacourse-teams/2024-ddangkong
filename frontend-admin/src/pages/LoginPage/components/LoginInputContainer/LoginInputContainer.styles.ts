import { css, Theme } from '@emotion/react';

export const loginButton = (theme: Theme) => css`
  width: 8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${theme.color.peanut400};
  font-size: 1.6rem;
  outline: none;

  &:focus {
    outline: 0.1rem solid black;
  }

  &:hover {
    background-color: ${theme.color.peanut500};
  }
`;
