import { useEffect } from 'react';

const useDisableBackgroundScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);
};

export default useDisableBackgroundScroll;
