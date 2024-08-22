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
      alert('새로고침 시 게임에서 나가질 수 있습니다');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup 이벤트 리스너
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};
