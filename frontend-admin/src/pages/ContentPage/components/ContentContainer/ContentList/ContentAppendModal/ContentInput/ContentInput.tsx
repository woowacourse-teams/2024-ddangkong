import { ChangeEvent } from 'react';
import { count, inputLayout } from './ContentInput.styles';
import Input from '@/components/Input/Input';

interface ContentInputProps {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
  error?: string;
}

const ContentInput = ({
  placeholder = '',
  maxLength = 16,
  hasError = false,
  ...inputProps
}: ContentInputProps) => {
  return (
    <div css={inputLayout}>
      <Input
        {...inputProps}
        placeholder={placeholder}
        maxLength={maxLength}
        hasError={hasError || Boolean(inputProps.error)}
      />
      <div css={count}>
        {inputProps.value.length}/{maxLength} 자
      </div>
    </div>
  );
};

export default ContentInput;
