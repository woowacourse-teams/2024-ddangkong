import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

interface ButtonLayoutProps {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  radius?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

const getSizeStyles = (size: 'small' | 'medium' | 'large' | undefined) => {
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

const getFontSize = (fontSize: 'small' | 'medium' | 'large' | undefined) => {
  switch (fontSize) {
    case 'small':
      return Theme.typography.caption.fontSize;
    case 'medium':
      return Theme.typography.headline2.fontSize;
    case 'large':
      return Theme.typography.headline1.fontSize;
    default:
      return Theme.typography.headline2.fontSize;
  }
};

const getBorderRadius = (radius: 'small' | 'medium' | 'large' | undefined) => {
  switch (radius) {
    case 'small':
      return Theme.borderRadius.radius10;
    case 'medium':
      return Theme.borderRadius.radius20;
    case 'large':
      return Theme.borderRadius.radius30;
    default:
      return '0';
  }
};

export const buttonLayout = ({ disabled, size, radius, fontSize }: ButtonLayoutProps) => css`
  display: flex;
  justify-content: center;

  ${getSizeStyles(size)};

  border: none;
  border-radius: ${getBorderRadius(radius)};

  background-color: ${disabled ? Theme.color.peanut300 : Theme.color.peanut400};

  font-weight: bold;
  font-size: ${getFontSize(fontSize)};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};

  &:disabled {
    background-color: ${Theme.color.peanut300};
  }
`;
