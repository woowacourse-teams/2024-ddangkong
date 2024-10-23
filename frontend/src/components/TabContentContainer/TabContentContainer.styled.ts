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

export const roundVoteResultContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const optionContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;

  font-weight: bold;
  font-size: 1.4rem;
  word-break: keep-all;
`;

export const secondOptionName = css`
  text-align: right;
`;

export const noVoteTextContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const noVoteText = css`
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

export const resultTextStyle = (isActiveGroupTab: boolean) => css`
  display: flex;
  visibility: ${isActiveGroupTab ? 'visible' : 'hidden'};
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;

  font-weight: bold;
  font-size: 1.2rem;
`;

export const totalResultInfoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const totalResultInfoText = css`
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;
  word-break: keep-all;
`;

export const emphasizeText = css`
  font-weight: bold;
`;
