import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const settingModalLayout = css`
  background-color: ${Theme.color.peanut300};
`;

export const settingModalTitle = css`
  font-size: 1.6rem;
`;

export const settingContentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const settingTitleWrapper = css`
  display: flex;
  justify-content: center;
`;

export const settingTitle = css`
  ${Theme.typography.headline3};
`;

export const settingButtonContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const settingButton = (isSelected: boolean) => css`
  width: 4rem;
  height: 4rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: ${isSelected ? Theme.color.peanut500 : Theme.color.peanut300};
  transition: background-color 0.3s;
`;
