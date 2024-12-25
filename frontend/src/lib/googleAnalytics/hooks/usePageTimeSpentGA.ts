import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

const useGAPageTimeSpentGA = (page: string) => {
  const startTimeRef = useRef(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startTimeRef.current = Date.now();
      } else if (document.visibilityState === 'hidden') {
        if (startTimeRef.current !== null) {
          const timeSpent = Date.now() - startTimeRef.current;
          ReactGA.event({
            category: 'User Engagement',
            action: 'time_spent_per_page',
            label: page,
            value: timeSpent / 1000,
          });
          startTimeRef.current = 0;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [page]);
};

export default useGAPageTimeSpentGA;
