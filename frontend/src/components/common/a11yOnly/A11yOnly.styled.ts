import { css } from '@emotion/react';

export const a11yOnlyContainer = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0, 0, 0, 0)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});
