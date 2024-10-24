import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';
import getBorderRadius from '@/styles/utils/getBorderRadius';

export const roomSettingLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 1.6rem 0 2.4rem;
  border-radius: ${getBorderRadius('medium')};

  background-color: ${Theme.color.peanut400};
  cursor: pointer;
`;

export const bigTitle = css`
  width: 10rem;

  font-weight: 800;
  font-size: 2.8rem;
`;

export const smallTitle = css`
  width: 10rem;

  font-weight: 800;
  font-size: 2rem;
`;

export const roomSettingKey = css`
  width: 10rem;
`;

export const roomSettingKeyBox = css`
  display: flex;
  justify-content: space-between;
  width: 80%;

  font-weight: 600;
`;

export const roomSettingValueBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
