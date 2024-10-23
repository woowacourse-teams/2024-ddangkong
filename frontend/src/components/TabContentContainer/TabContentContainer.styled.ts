import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const tabContentContainerLayout = (isVoteStatisticsTabActive: boolean) => css`
  display: flex;
  flex-direction: column;
  gap: 15%;
  height: 55vh;
  overflow-y: ${isVoteStatisticsTabActive ? 'visible' : 'auto'};
  padding: 2.4rem;
  border: 0.3rem solid ${Theme.color.peanut400};
  border-radius: 0.8rem;
`;
