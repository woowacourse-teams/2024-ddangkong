import { css } from '@emotion/react';

export const title = css`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const imageList = css`
  display: grid;
  gap: 1rem;
  padding: 3rem 0;
  grid-template-columns: repeat(4, 1fr);
`;

export const imageWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid;
  border-radius: 10%;
  cursor: pointer;
`;

export const imageStyle = css`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const closeButton = css`
  width: 100%;
  border: 50%;
`;
