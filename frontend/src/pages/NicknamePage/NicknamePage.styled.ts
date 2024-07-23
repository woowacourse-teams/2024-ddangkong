import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const profile = css`
  width: 8rem;
  height: 8rem;
  margin-top: 4rem;

  background-color: ${Theme.color.gray300};
  border-radius: 50%;
`;

export const nickname = css`
  width: 26.8rem;
  margin: 2rem 0;

  font-weight: 600;
  font-size: 1.6rem;
`;

export const nicknameInputWrapper = css`
  display: flex;
  align-items: center;
  width: 26.8rem;
  height: 4.9rem;
  padding: 0 1rem;

  background-color: ${Theme.color.gray200};
  border-radius: 1rem;
`;

export const nicknameInput = css`
  width: 100%;
  border: 0;

  background-color: ${Theme.color.gray200};
  outline: none;
`;
