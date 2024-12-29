import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const gridContainer = css`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 0.5fr 0.5fr 0.3fr;
  width: 100%;
  height: 65vh;
  font-size: 1.6rem;
  overflow: auto;
`;

export const gridHeader = css`
  padding: 1.2rem;
  border: 0.1rem solid ${theme.color.gray};
  background-color: ${theme.color.gray200};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const gridItem = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.8rem;
  padding: 3.2rem;
  border: 0.1rem solid ${theme.color.gray};
`;

export const detailText = css`
  display: flex;
  align-items: center;
  height: 2.4rem;
  font-size: 1.4rem;
  text-align: right;
  color: ${theme.color.gray400};
`;

export const deleteButton = css`
  border: 0.1rem solid ${theme.color.red300};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  white-space: nowrap;

  &:enabled {
    color: ${theme.color.red300};
  }

  &:hover {
    background-color: ${theme.color.red300};
    color: white;
    transition: all 0.2s;
  }
`;
