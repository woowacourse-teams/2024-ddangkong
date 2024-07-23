import React, { ButtonHTMLAttributes } from 'react';

import { buttonLayout } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  size = 'large',
  radius = 'none',
  fontSize = 'medium',
  ...props
}) => {
  return (
    <button onClick={onClick} css={buttonLayout({ disabled, size, radius, fontSize })} {...props}>
      {text}
    </button>
  );
};

export default Button;
