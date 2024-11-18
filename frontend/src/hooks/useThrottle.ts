import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useThrottle = (func: (...args: any[]) => void, delay = 1000) => {
  const isThrottle = useRef(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    if (!isThrottle.current) {
      func(...args);
      isThrottle.current = true;
      setTimeout(() => {
        isThrottle.current = false;
      }, delay);
    }
  };
};

export default useThrottle;
