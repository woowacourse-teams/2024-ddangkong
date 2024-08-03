import { useEffect } from 'react';

const useDisableBackgroundScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);
};

export default useDisableBackgroundScroll;
