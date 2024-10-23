import { useEffect, useRef } from 'react';

const useFocus = <T extends HTMLElement>() => {
  const focusRef = useRef<T>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return focusRef;
};

export default useFocus;
