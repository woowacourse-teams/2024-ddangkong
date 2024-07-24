import { css } from '@emotion/react';

const getSizeStyles = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return css`
        width: 6.8rem;
        padding: 0.8rem 0;
      `;
    case 'medium':
      return css`
        width: 12rem;
        padding: 1.6rem 0;
      `;
    case 'large':
      return css`
        width: 32rem;
        padding: 2rem 0;
      `;
    default:
      return css`
        width: 32rem;
        padding: 2rem 0;
      `;
  }
};

export default getSizeStyles;
