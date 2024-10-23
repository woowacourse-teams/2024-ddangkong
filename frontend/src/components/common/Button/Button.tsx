import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { buttonLayout } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  radius?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
  bottom?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, disabled, size, radius, fontSize, bottom, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        css={buttonLayout({ disabled, size, radius, fontSize, bottom })}
        {...props}
      >
        {text}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
