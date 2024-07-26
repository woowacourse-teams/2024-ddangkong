import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const optionParticipantsContainerLayout = css`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const dividerLine = css`
  width: 100%;
  height: 1px;
  margin: 1.5rem 0;

  background-color: ${Theme.color.gray300};
`;
