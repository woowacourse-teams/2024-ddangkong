import { css } from '@emotion/react';

export const optionParticipantsLayout = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const optionInfo = css`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const participantsListWrapper = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.4rem;
`;
