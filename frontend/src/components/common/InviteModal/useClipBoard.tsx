import { useState } from 'react';

const useClipBoard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return { isCopied, copyToClipboard };
};

export default useClipBoard;
