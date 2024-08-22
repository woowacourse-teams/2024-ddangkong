import React, { ButtonHTMLAttributes } from 'react';

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

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  size,
  radius,
  fontSize,
  bottom,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      css={buttonLayout({ disabled, size, radius, fontSize, bottom })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
