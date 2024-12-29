import { css, Theme } from "@emotion/react";

export const gridContainer = css`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr 0.5fr 0.5fr 0.3fr;
  width: 100%;
  height: 75vh;
  font-size: 1.6rem;
  overflow: auto;
`;

export const gridHeader = (theme: Theme) => css`
  padding: 1.2rem;
  border: 0.1rem solid ${theme.color.gray};
  background-color: ${theme.color.gray200};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const gridItem = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.8rem;
  padding: 3.2rem;
  border: 0.1rem solid ${theme.color.gray};
`;

export const detailText = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 2.4rem;
  font-size: 1.4rem;
  text-align: right;
  color: ${theme.color.gray400};
`;

export const gradientOverlay = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8)
  );
  pointer-events: none;
`;
