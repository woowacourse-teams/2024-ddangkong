import { useRef, useState } from 'react';

const useObserverBottom = () => {
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleReachBottom = () => {
    setIsBottomVisible(true);
  };

  const handleLeaveBottom = () => {
    setIsBottomVisible(false);
  };

  return { isBottomVisible, handleReachBottom, handleLeaveBottom, observerRef };
};

export default useObserverBottom;
