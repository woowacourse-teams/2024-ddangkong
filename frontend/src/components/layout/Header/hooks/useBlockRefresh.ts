import { useEffect } from 'react';

export const useBlockRefresh = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      alert('페이지를 새로 고침하려고 합니다.');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup 이벤트 리스너
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};
