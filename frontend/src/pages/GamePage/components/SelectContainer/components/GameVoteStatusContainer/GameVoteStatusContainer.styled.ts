import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const gameVoteStatusLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  height: 4rem;
`;

export const voteStatusMessage = (theme: Theme, isPending: boolean) => css`
  font-weight: bold;
  font-size: 1.6rem;
  opacity: ${isPending ? theme.opacity.invisible : theme.opacity.default};
  transition: 1s;
`;

export const voteAnnounceMessage = (theme: Theme) => css`
  color: ${theme.color.gray500};
  font-weight: bold;
  font-size: 1.2rem;
`;
