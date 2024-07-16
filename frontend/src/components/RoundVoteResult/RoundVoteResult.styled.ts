import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

interface LayoutProps {
  percentage: number;
}

export const layout = ({ percentage }: LayoutProps) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 24.5rem;
  height: 11rem;

  font-size: 1.2rem;
  background: linear-gradient(
    to right,
    ${Theme.color.peanut400} 0%,
    ${Theme.color.peanut400} ${percentage}%,
    #fff4df ${percentage}%,
    #fff4df 100%
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
