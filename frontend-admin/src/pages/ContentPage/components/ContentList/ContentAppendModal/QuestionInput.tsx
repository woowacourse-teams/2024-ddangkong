/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, ChangeEvent } from 'react';

interface QuestionInputProps {
  label: string; // 라벨 텍스트
  placeholder?: string; // 인풋의 placeholder
  maxLength?: number; // 최대 글자수
}

const QuestionInput = ({ label, placeholder = '', maxLength = 16 }: QuestionInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };

  return (
    <div css={container}>
      <label htmlFor="question-input" css={labelStyle}>
        {label}
      </label>
      <input
        id="question-input"
        type="text"
        css={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div css={charCountStyle}>
        {value.length}/{maxLength} 자
      </div>
    </div>
  );
};

export default QuestionInput;

const container = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 400px;
`;

const labelStyle = css`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const inputStyle = css`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const charCountStyle = css`
  font-size: 14px;
  color: #888;
  text-align: right;
`;
