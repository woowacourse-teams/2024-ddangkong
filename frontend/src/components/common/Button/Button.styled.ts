import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

interface ButtonLayoutProps {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

export const buttonLayout = ({ disabled, size, radius, fontSize }: ButtonLayoutProps) => css`
  display: flex;
  justify-content: center;
  width: ${size === 'small' ? '6.9rem' : size === 'medium' ? '12rem' : '32rem'};
  padding: ${size === 'small' ? '0.8rem' : size === 'medium' ? '1.6rem' : '2rem'} 0;

  background-color: ${disabled ? Theme.color.peanut300 : Theme.color.peanut400};

  font-weight: bold;
  font-size: ${fontSize === 'small'
    ? Theme.typography.caption.fontSize
    : size === 'medium'
      ? Theme.typography.headline2.fontSize
      : Theme.typography.headline1.fontSize};
  border-radius: ${radius === 'small'
    ? Theme.borderRadius.radius10
    : radius === 'medium'
      ? Theme.borderRadius.radius20
      : radius === 'large'
        ? Theme.borderRadius.radius30
        : Theme.borderRadius.none};
`;
