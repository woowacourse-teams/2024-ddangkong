import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const imageListWrapper = css`
  display: flex;
  justify-content: center;
`;

export const title = css`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const imageList = css`
  display: grid;
  gap: 1rem;
  padding: 3rem 0;
  max-width: 40rem;
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
  border-radius: ${Theme.borderRadius.radius10};
`;
