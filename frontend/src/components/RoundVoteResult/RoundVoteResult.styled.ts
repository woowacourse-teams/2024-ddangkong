import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

interface RoundVoteResultLayoutProps {
  percentage: number;
}

export const roundVoteResultLayout = ({ percentage }: RoundVoteResultLayoutProps) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 24.5rem;
  height: 11rem;

  font-size: 1.2rem;
  background: linear-gradient(
    to right,
    ${Theme.color.peanut500} 0%,
    ${Theme.color.peanut500} ${percentage - 20}%,
    ${Theme.color.peanut300} ${percentage}%,
    white 100%
  );

  border-radius: 1.7rem;
`;

export const voteContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const fontBold = css`
  font-weight: bold;
`;
