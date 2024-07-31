import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const readyMembersContainerLayout = css`
  height: 25rem;
  padding: 2rem 3rem 0;

  background-color: ${Theme.color.peanut300};

  position: relative;

  border-radius: 2rem;

  overflow-y: scroll;

  font-weight: 600;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const totalNumber = css`
  font-weight: 900;
  font-size: 1.2rem;
  padding-left: 2rem;
`;

export const memberList = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const memberItem = css`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const profileBox = css`
  width: 3.6rem;
  height: 3.6rem;
  background-color: white;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const memberStatus = css`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
