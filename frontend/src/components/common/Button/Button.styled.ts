import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';
import getBorderRadius from '@/styles/utils/getBorderRadius';
import getFontSize from '@/styles/utils/getFontSize';
import getSizeStyles from '@/styles/utils/getSizeStyles';

interface ButtonLayoutProps {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  radius?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

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

export const bottomButtonLayout = css`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
