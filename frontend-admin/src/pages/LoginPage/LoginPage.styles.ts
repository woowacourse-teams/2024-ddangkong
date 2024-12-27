import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const loginLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${theme.color.peanut300};
`;

export const loginContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem 3.6rem;
  background-color: white;
  border-radius: 2.4rem;
`;

export const loginHeaderContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const passwordInput = css`
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

export const loginButton = css`
  width: 8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${theme.color.peanut400};
  font-size: 1.6rem;
  outline: none;

  &:focus {
    outline: 0.1rem solid black;
  }
`;
