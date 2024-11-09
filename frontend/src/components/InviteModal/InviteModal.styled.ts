import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const inviteModalLayout = css`
  background-color: ${Theme.color.peanut300};
`;

export const inviteModalTitle = css`
  font-size: 1.6rem;
  text-align: center;
`;

export const inviteModalUl = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const qrcodeWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: white;
`;

export const inviteModalLi = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: #ffff;
`;

export const inviteModalLinkButton = css`
  width: 100%;
  padding: 1.6rem 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const inviteModalLinkButtonInfoWrapper = css`
  display: flex;
  justify-content: space-between;
`;

export const inviteModalText = css`
  overflow: hidden;
  width: 95%;

  font-size: 1.4rem;
  text-overflow: ellipsis;
`;

export const inviteModalCopyIcon = css`
  width: 10%;
`;
