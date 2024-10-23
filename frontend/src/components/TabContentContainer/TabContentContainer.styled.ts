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

export const secondOption = css`
  text-align: right;
`;

export const barContainer = css`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: inherit;
  border-radius: 1.6rem;
`;

export const barWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;

  color: black;
  font-weight: bold;
  font-size: 1.6rem;
  transition: all 1s;
`;

export const firstBar = (percent: number, isBigFirstOption?: boolean) => css`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 1.6rem 0 0 1.6rem;

  background-color: ${isBigFirstOption ? Theme.color.peanut400 : Theme.color.gray};
  transform: translateX(5px);
  clip-path: ${percent === 100 ? 'none' : 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'};
`;

export const secondBar = (percent: number, isBigFirstOption?: boolean) => css`
  ${barWrapper}
  overflow: hidden;
  width: ${percent}%;
  border-radius: 0 1.6rem 1.6rem 0;

  background-color: ${isBigFirstOption ? Theme.color.gray : Theme.color.peanut400};
  transform: translateX(-5px);
  clip-path: ${percent === 100 ? 'none' : 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)'};
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
