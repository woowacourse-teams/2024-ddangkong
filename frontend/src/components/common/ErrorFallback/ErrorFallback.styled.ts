import { css } from '@emotion/react';

export const errorFallbackLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 80vh;
  padding: 2.4rem;
`;

export const errorImage = css`
  width: 16rem;
  height: 16rem;
`;

export const errorText = css`
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  word-break: keep-all;
`;

export const fallbackButtonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
