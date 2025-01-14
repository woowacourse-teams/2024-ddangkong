import { css } from '@emotion/react';

export const a11yOnlyLayout = css`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;

  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
`;
