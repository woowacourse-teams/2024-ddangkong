import { Outlet } from 'react-router-dom';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import useGAInitialize from '@/lib/googleAnalytics/hooks/useGAInitialize';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  useGAInitialize();

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
