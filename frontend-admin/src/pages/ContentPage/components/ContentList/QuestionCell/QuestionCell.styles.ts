import { css, Theme } from "@emotion/react";

export const gridItem = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.8rem;
  padding: 3.2rem;
  border: 0.1rem solid ${theme.color.gray};
`;

export const questionInput = css`
  font-size: 1.6rem;
  width: 100%;
  height: 4rem;
  text-align: right;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  outline: none;
`;

export const questionText = css`
  font-size: 2rem;

  height: 4rem;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const detailContainer = css`
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const editButton = (theme: Theme) => css`
  border: 0.1rem solid ${theme.color.peanut300};
  background-color: ${theme.color.peanut300};
  padding: 0.4rem 1.2rem;
  border-radius: 0.8rem;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.color.peanut400};
    transition: all 0.2s;
  }
`;

export const detailText = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 2.4rem;
  font-size: 1.4rem;
  text-align: right;
  color: ${theme.color.gray400};
`;
