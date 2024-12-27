import { flexCenter } from "@/styles/common";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const contentLayout = css`
  ${flexCenter}
  height: 100%;
  background-color: ${theme.color.peanut300};
`;

export const contentContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 95%;
  gap: 2.8rem;
  padding: 2.4rem 3.6rem;
  background-color: white;
  border-radius: 2.4rem;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  height: 4rem;
  width: 100%;
`;

export const leftHeader = css`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  height: 100%;
`;

export const image = css`
  width: 100%;
  height: 100%;
`;

export const loginTitle = css`
  font-size: 2.4rem;
  font-weight: bold;
`;

export const rightHeader = css`
  display: flex;
  align-items: center;
`;

export const logoutButton = css`
  height: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: ${theme.color.gray};
  }
`;
