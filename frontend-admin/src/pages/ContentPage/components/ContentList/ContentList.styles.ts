import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const editButton = css`
  border: 0.1rem solid ${theme.color.peanut300};
  background-color: ${theme.color.peanut300};
  padding: 0.4rem 1.2rem;
  border-radius: 0.8rem;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.color.peanut400};
    transition: all 0.2s;
  }
`;

export const detailContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const detailText = css`
  font-size: 1.6rem;
  color: ${theme.color.gray400};
`;

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
  font-size: 2rem;
  gap: 0.8rem;
  padding: 4rem;
  border: 0.1rem solid ${theme.color.gray};
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
