import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const tabButtonStyle = (isActive: boolean) => css`
  flex: 1;
  padding: 0.8rem;
  border-radius: 1.2rem 1.2rem 0 0;

  background-color: ${isActive ? Theme.color.peanut400 : Theme.color.gray};

  color: black;
  font-weight: bold;
  transition: all 0.5s;
`;
