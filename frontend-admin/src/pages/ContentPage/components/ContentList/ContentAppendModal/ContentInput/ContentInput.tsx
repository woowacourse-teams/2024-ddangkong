import { ChangeEvent } from 'react';
import { contentInput, count, errorBorder, inputLabel, inputLayout } from './ContentInput.styles';

interface ContentInputProps {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
}

const ContentInput = ({
  label,
  value,
  handleChange,
  placeholder = '',
  maxLength = 16,
  hasError = false,
}: ContentInputProps) => {
  return (
    <div css={inputLayout}>
      <label htmlFor="content-input" css={inputLabel}>
        {label}
      </label>
      <input
        id="content-input"
        css={[contentInput, hasError && errorBorder]}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <div css={count}>
        {value.length}/{maxLength} 자
      </div>
    </div>
  );
};

export default ContentInput;
