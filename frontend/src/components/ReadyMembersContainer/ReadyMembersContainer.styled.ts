import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';
import getBorderRadius from '@/styles/utils/getBorderRadius';

export const readyMembersContainerLayout = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const membersContainer = css`
  position: relative;
  height: 25rem;
  padding: 2rem 3rem 0;
  border-radius: 2rem;

  background-color: ${Theme.color.peanut300};

  font-weight: 600;
  font-size: 1rem;

  overflow-y: scroll;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const totalNumber = css`
  padding-left: 2rem;

  font-weight: 900;
  font-size: 1.6rem;
`;

export const memberList = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const inviteButton = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  border-radius: ${getBorderRadius('medium')};

  background-color: ${Theme.color.peanut400};

  font-size: 1rem;
`;

export const memberItem = css`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const profileBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;

  background-color: white;
`;

export const profileImage = css`
  width: 60%;
`;

export const memberStatus = css`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
