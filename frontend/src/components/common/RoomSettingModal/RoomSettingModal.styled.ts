import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const roomSettingModalLayout = css`
  width: 70vw;

  background-color: ${Theme.color.peanut300};
  max-width: 768px;
`;

export const roomSettingModalTitle = css`
  font-size: 1.6rem;
`;

export const roomSettingContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2.4rem;
  padding: 1.6rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: white;
`;

export const roomSettingButton = (isSelected: boolean) => css`
  width: 4rem;
  height: 4rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: ${isSelected ? Theme.color.peanut500 : Theme.color.peanut300};
  transition: background-color 0.3s;
`;
