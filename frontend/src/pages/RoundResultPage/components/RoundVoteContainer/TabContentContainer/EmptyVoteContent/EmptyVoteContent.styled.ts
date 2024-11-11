import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const emptyVoteTextContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const emptyVoteText = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  ${Theme.typography.headline3}
`;

export const angryImage = css`
  width: 16rem;
  height: 14rem;
`;
