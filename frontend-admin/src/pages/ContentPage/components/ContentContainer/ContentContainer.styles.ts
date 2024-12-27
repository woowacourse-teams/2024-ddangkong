import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const dropdownWrapper = css`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const questionAppendButton = css`
  font-size: 1.6rem;

  padding: 1.2rem 2rem;
  border-radius: 1.6rem;
  background-color: ${theme.color.peanut400};

  &:hover {
    background-color: ${theme.color.peanut500};
  }
`;
