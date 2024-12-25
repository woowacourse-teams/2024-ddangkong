import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useGAPageTimeSpent = (page: string, timeSpent: number) => {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page, timeSpent });
  });
};

export default useGAPageTimeSpent;
