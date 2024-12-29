import { css, Theme } from "@emotion/react";

export const dropdownLayout = css`
  display: flex;
  position: relative;
  align-items: center;

  width: 16rem;
  height: 3.6rem;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 0.8rem;

  background-color: white;

  cursor: pointer;
`;

export const dropdownTextContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  user-select: none;
`;

export const emptyWrapper = css`
  width: 1.2rem;
  height: 1.2rem;
`;

export const arrowImage = css`
  width: 1.2rem;
  height: 1.2rem;
`;

export const dropdownText = css`
  text-align: center;

  user-select: none;
  cursor: pointer;
`;

export const selectOptionList = css`
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 3.6rem;
  left: 0;
  flex-direction: column;

  width: 100%;

  border-radius: 0.8rem;

  background-color: white;

  color: black;

  list-style: none;
  transition: height 0.3s;
  user-select: none;
`;

export const optionButton = (theme: Theme) => css`
  width: 100%;
  height: 3.6rem;

  color: black;

  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${theme.color.gray200};
  }
`;
