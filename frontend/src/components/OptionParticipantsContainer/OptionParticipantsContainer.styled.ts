import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const optionParticipantsContainerLayout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.2rem;
`;

export const horizontalDivider = css`
  width: 100%;
  height: 1px;
  margin: 1.4rem 0;

  background-color: ${Theme.color.gray300};
`;
