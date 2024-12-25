import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useGAInitializeGA = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.GA_MANAGEMENT_ID || '');
  }, []);
};

export default useGAInitializeGA;
