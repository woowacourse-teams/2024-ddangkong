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
  color: #000;
`;

export const contentInput = css`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

export const count = (theme: Theme) => css`
  font-size: 1.4rem;
  color: #888;
  text-align: right;
  color: ${theme.color.gray400};
`;
