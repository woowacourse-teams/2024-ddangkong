import { useEffect, useState } from 'react';

const INITIAL_BOTTOM_BUTTON_HEIGHT = 0;

const useKeyboardHeight = () => {
  const [bottomButtonHeight, setBottomButtonHeight] = useState(INITIAL_BOTTOM_BUTTON_HEIGHT);

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

export default useKeyboardHeight;
