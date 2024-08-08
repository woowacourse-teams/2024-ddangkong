import { useState } from 'react';

const useClipBoard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        // TODO: 에러처리
      });
  };

  return { isCopied, copyToClipboard };
};

export default useClipBoard;
