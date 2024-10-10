import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';
import getBorderRadius from '@/styles/utils/getBorderRadius';

export const RoomSettingLayout = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 1.6rem 0 2.4rem;
  border-radius: ${getBorderRadius('medium')};

  background-color: ${Theme.color.peanut400};
  cursor: pointer;
`;

export const roomSettingBox = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const bigTitle = css`
  font-weight: 800;
  font-size: 2.8rem;
`;

export const smallTitle = css`
  font-weight: 800;
  font-size: 2rem;
`;

export const roomSettingLabel = css`
  font-weight: 600;
`;
