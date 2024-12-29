import { ChangeEvent } from 'react';
import { contentInput, count, inputLabel, inputLayout } from './ContentInput.styles';

interface ContentInputProps {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const ContentInput = ({
  label,
  value,
  handleChange,
  placeholder = '',
  maxLength = 16,
}: ContentInputProps) => {
  return (
    <div css={inputLayout}>
      <label htmlFor="content-input" css={inputLabel}>
        {label}
      </label>
      <input
        id="content-input"
        css={contentInput}
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
