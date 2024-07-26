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
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  size,
  radius,
  fontSize,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      css={buttonLayout({ disabled, size, radius, fontSize })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
