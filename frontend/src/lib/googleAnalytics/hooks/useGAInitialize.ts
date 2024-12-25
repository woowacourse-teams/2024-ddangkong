import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useGAInitialize = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.GA_MANAGEMENT_ID || '');
  }, []);
};

export default useGAInitialize;
