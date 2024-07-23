import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const tabLayout = css`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  width: 100%;
`;

export const tabWrapperStyle = css`
  display: flex;
  width: 40%;
  margin-left: 2.4rem;
`;

export const tabButtonStyle = (isActive: boolean) => css`
  flex: 1;
  padding: 0.8rem;
  border-radius: 1.2rem 1.2rem 0 0;

  background-color: ${isActive ? Theme.color.peanut400 : Theme.color.gray};

  color: black;
  font-weight: bold;
`;

export const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  border: 0.3rem solid ${Theme.color.peanut400};
  border-radius: 0.8rem;
`;

export const blankWrapper = css`
  width: 100%;
  height: 1.6rem;
`;

export const roundVoteResultContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const categoryContainer = css`
  display: flex;
  justify-content: space-between;

  font-weight: bold;
  font-size: 1.4rem;
`;

export const barWrapperStyle = css`
  display: flex;
  align-items: center;
  width: inherit;
`;

export const barStyle = (percentage: number, isBigFirstOption: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${percentage}%;
  height: 8vh;
  border-radius: 1.6rem 0 0 1.6rem;

  background-color: ${isBigFirstOption ? Theme.color.peanut400 : Theme.color.gray};

  color: black;
  font-weight: bold;
  font-size: 1.6rem;
  clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
  transition: all 1s;
  transform: translateX(5px);
`;

export const barBackgroundStyle = (percentage: number, isBigFirstOption: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${percentage}%;
  height: 8vh;
  border-radius: 0 1.6rem 1.6rem 0;

  background-color: ${isBigFirstOption ? Theme.color.gray : Theme.color.peanut400};

  color: black;
  font-weight: bold;
  font-size: 1.6rem;
  clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%);
  transition: all 1s;
  transform: translateX(-5px);
`;

export const resultTextStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  font-size: 1.2rem;
`;

export const currentVoteButtonWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const buttonStyle = css`
  color: black;
  font-weight: bold;

  &:active {
    opacity: 0.7;
  }
`;
