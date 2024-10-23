import { css } from '@emotion/react';

export const topicContainerLayout = css`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const categoryText = css`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const topicText = css`
  width: 85%;

  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;
  word-break: keep-all;
`;
