import { buttonLayout } from './Button.styled';

interface ButtonProps {
  text: '선택' | '확인' | '다음';
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
