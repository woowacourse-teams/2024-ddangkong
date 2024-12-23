import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Outlet } from 'react-router-dom';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  useEffect(() => {
    ReactGA.initialize('G-3BFVVPQT0Z');
    ReactGA.send({ hitType: 'pageview', page: '/my-path', title: 'Custom Title' });
  });

  return (
    <RootErrorBoundary>
      <AsyncErrorBoundary>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </AsyncErrorBoundary>
    </RootErrorBoundary>
  );
};

export default MainLayout;
