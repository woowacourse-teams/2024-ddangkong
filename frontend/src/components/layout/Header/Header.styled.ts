import { css } from '@emotion/react';

export const headerLayout = (isCenter?: boolean) => css`
  display: flex;
  justify-content: ${isCenter ? 'center' : 'space-between'};
  align-items: center;
  height: 8rem;
  padding: 0 2.4rem;
`;

export const roundText = css`
  display: flex;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;

  font-weight: bold;
  font-size: 1.6rem;
`;

export const emptyBox = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const buttonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
`;

export const gameTitle = css`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const settingImage = css`
  display: flex;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
`;
