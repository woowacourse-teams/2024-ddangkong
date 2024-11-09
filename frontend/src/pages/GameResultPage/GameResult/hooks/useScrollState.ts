import { useEffect, useRef, useState } from 'react';

const useScrollState = (initialDelay = 100) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const resultContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const container = resultContainerRef.current as HTMLDivElement;

    const { scrollTop, scrollHeight, clientHeight } = container;
    setIsAtTop(scrollTop === 0);
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
  };

  useEffect(() => {
    const container = resultContainerRef.current as HTMLDivElement;

    const checkInitialScrollState = () => {
      const { scrollHeight, clientHeight } = container;
      setIsAtBottom(scrollHeight <= clientHeight);
    };

    const timer = setTimeout(() => {
      checkInitialScrollState();
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    const container = resultContainerRef.current as HTMLDivElement;

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    resultContainerRef,
    isAtTop,
    isAtBottom,
  };
};

export default useScrollState;
