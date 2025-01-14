import { ChangeEvent, useState } from 'react';

interface UseInputProps {
  maxLength: number;
}

const useInput = ({ maxLength }: UseInputProps = { maxLength: 16 }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };
  return { value, handleChange };
};

export default useInput;
