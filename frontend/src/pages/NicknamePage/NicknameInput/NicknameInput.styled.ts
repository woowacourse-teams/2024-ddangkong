import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const nicknameInputContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  padding: 0 1rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: ${Theme.color.gray200};
`;

export const nicknameInput = css`
  width: 100%;
  border: 0;

  background-color: ${Theme.color.gray200};
  outline: none;
`;

export const nicknameLengthText = css`
  color: ${Theme.color.gray500};
`;
