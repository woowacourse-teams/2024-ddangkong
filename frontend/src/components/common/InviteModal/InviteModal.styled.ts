import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const inviteModalHeader = css`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const inviteModalTitle = css`
  position: absolute;
  left: 50%;

  font-size: 1.6rem;
  text-align: center;
  transform: translateX(-50%);
`;

export const inviteModalIconButton = css`
  margin-left: auto;
`;

export const inviteModalUl = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const inviteModalLi = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: ${Theme.color.gray200};
`;

export const inviteModalLinkButton = css`
  width: 100%;
  padding: 2rem 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const inviteModalLinkButtonInfoWrapper = css`
  display: flex;
  justify-content: space-between;
`;

export const inviteModalCopyIcon = css`
  width: 10%;
`;
