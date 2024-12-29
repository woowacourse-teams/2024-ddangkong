import { css, Theme } from '@emotion/react';

export const modalLayout = css`
  padding: 4rem 8rem;
`;

export const header = css`
  gap: 1.6rem;
`;

export const contentContainer = css`
  gap: 1.6rem;
`;

export const dropdownWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 1.4rem;
`;

export const dropdownLabel = css`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const footerContainer = css`
  height: 3.6rem;
`;

export const appendButton = (theme: Theme) => css`
  &:hover {
    background-color: ${theme.color.peanut500};
    transition: all 0.2s;
  }
`;

export const closeButton = (theme: Theme) => css`
  border: 1px solid ${theme.color.black};

  &:hover {
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    transition: all 0.2s;
  }
`;
