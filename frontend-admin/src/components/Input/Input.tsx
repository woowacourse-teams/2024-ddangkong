import { ChangeEvent } from 'react';
import { contentInput, errorBorder, errorLabel, inputLabel, inputLayout } from './Input.styles';

interface InputProps {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  error?: string;
}

const Input = ({
  label,
  value,
  handleChange,
  handleKeyDown,
  placeholder,
  maxLength,
  hasError,
  error,
}: InputProps) => {
  return (
    <div css={inputLayout}>
      <label htmlFor="input" css={inputLabel}>
        {label} &nbsp;
        {hasError && <span css={errorLabel}>{error || '*입력해주세요'}</span>}
      </label>
      <input
        id="input"
        css={[contentInput, hasError && errorBorder]}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
