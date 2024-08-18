import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const roomSettingTitleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const roomSettingTitleWrapper = css`
  display: flex;
  justify-content: center;
`;

export const roomSettingTitle = css`
  ${Theme.typography.body2};
  font-weight: 700;
`;

export const roomSettingButtonContainer = css`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;
