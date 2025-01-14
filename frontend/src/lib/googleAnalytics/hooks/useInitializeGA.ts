import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useGAInitializeGA = () => {
  useEffect(() => {
    ReactGA.initialize('G-3BFVVPQT0Z');
  }, []);
};

export default useGAInitializeGA;
