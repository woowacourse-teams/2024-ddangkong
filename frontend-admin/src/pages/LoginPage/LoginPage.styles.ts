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

export const passwordInput = (theme: Theme) => css`
  width: 32rem;
  border: 0.1rem solid ${theme.color.gray};
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: white;
  font-size: 1.6rem;
  outline: none;

  &:focus {
    outline: 0.1rem solid black;
  }
`;

export const errorMessage = (isError: boolean) => css`
  visibility: ${isError ? 'visible' : 'hidden'};
  color: red;
  font-size: 1.2rem;
  min-height: 1.2rem;
  margin-top: 0.8rem;
  margin: 0.8rem 0 0 1.2rem;
`;

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
