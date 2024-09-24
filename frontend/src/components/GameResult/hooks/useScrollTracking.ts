import { useEffect, useRef, useState } from 'react';

import { MemberMatchingInfo } from '@/types/balanceContent';

const useScrollTracking = (matchedMembers: MemberMatchingInfo[] | undefined) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const resultContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = resultContainerRef.current;
    if (!container) return;

    setTimeout(() => {
      const { scrollHeight, clientHeight } = container;

      if (scrollHeight > clientHeight) {
        setIsAtBottom(false);
      } else {
        setIsAtBottom(true);
      }
    }, 100);
  }, [matchedMembers]);

  useEffect(() => {
    const handleScroll = () => {
      const container = resultContainerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      setIsAtTop(scrollTop === 0);

      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
    };

    const container = resultContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollTo({
        top: resultContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return {
    resultContainerRef,
    isAtTop,
    isAtBottom,
    scrollToTop,
    scrollToBottom,
  };
};

export default useScrollTracking;
