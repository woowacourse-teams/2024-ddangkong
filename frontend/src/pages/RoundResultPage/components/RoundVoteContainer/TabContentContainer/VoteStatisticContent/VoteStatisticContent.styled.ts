import { css } from '@emotion/react';

export const roundVoteResultContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const optionContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  font-weight: bold;
  font-size: 1.4rem;
  word-break: keep-all;
`;

export const secondOptionName = css`
  text-align: right;
`;

export const memberCountWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;

  font-weight: bold;
  font-size: 1.2rem;
`;

export const totalResultInfoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const totalResultInfoText = css`
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  word-break: keep-all;
`;

export const emphasizeText = css`
  font-weight: bold;
`;
