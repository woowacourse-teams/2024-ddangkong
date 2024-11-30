import { useRef } from 'react';

const useThrottle = <T extends (...args: Parameters<T>) => void>(
  func: T,
  delay = 3000,
): ((...args: Parameters<T>) => void) => {
  const isThrottledRef = useRef(false);

  return (...args: Parameters<T>) => {
    if (!isThrottledRef.current) {
      func(...args);
      isThrottledRef.current = true;
      setTimeout(() => {
        isThrottledRef.current = false;
      }, delay);
    }
  };
};

export default useThrottle;
