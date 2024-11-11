import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const profileWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  background-color: ${Theme.color.gray300};
`;

export const profileImg = css`
  width: 60%;
`;

export const nicknameContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 26.8rem;
  margin-bottom: 2rem;
`;

export const nicknameTitle = css`
  font-weight: 600;
  font-size: 1.6rem;
`;

export const nicknameInputWrapper = css`
  display: flex;
  align-items: center;
  width: 26.8rem;
  height: 4.8rem;
  padding: 0 1rem;
  border-radius: 1rem;

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

export const noVoteTextContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const noVoteText = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  ${Theme.typography.headline3}
`;

export const angryImage = css`
  width: 16rem;
  height: 14rem;
`;
