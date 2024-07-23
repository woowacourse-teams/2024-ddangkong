import { buttonLayout } from './Button.styled';

interface ButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const Button = ({ text, active, onClick }: ButtonProps) => {
  return (
    <button disabled={!active} onClick={onClick} css={buttonLayout(active)}>
      {text}
    </button>
  );
};

export default Button;
