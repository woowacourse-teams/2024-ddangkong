import { css, Theme } from '@emotion/react';

export const inputLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

export const inputLabel = css`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const contentInput = (theme: Theme) => css`
  width: 100%;
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  border: 0.1rem solid ${theme.color.black};
  border-radius: 0.8rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${theme.color.peanut400};
  }
`;

export const errorBorder = (theme: Theme) => css`
  border: 0.1rem solid ${theme.color.red300};
`;

export const count = (theme: Theme) => css`
  font-size: 1.4rem;
  text-align: right;
  color: ${theme.color.gray400};
`;
