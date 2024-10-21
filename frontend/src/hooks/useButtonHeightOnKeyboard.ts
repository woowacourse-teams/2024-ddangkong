import { useEffect, useState } from 'react';

const INITIAL_BOTTOM_BUTTON_HEIGHT = 0;

const useButtonHeightOnKeyboard = () => {
  const [bottomButtonHeight, setBottomButtonHeight] = useState(INITIAL_BOTTOM_BUTTON_HEIGHT);

  useEffect(() => {
    const handleLockScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.body.addEventListener('touchmove', handleLockScroll, { passive: false });
    return () => {
      document.body.removeEventListener('touchmove', handleLockScroll);
    };
  }, []);

  useEffect(() => {
    const handleResizeScreen = () => {
      if (!visualViewport) return;

      setBottomButtonHeight(window.innerHeight - visualViewport.height);
    };

    visualViewport?.addEventListener('resize', handleResizeScreen);

    return () => {
      visualViewport?.removeEventListener('resize', handleResizeScreen);
    };
  }, []);

  return { bottomButtonHeight };
};

export default useButtonHeightOnKeyboard;
