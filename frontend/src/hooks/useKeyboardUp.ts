import { useEffect, useState } from 'react';

export const useKeyboardUp = () => {
  const [isKeyboardUp, setIsKeyboardUp] = useState(false);

  useEffect(() => {
    const initialHeight = window.visualViewport?.height;

    const handleResize = () => {
      const currentHeight = window.visualViewport?.height;
      if (initialHeight && currentHeight && currentHeight < initialHeight) {
        setIsKeyboardUp(true);
      } else {
        setIsKeyboardUp(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('remove', handleResize);
    };
  }, []);
  return { isKeyboardUp };
};
