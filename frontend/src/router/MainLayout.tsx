import { Outlet } from 'react-router-dom';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import useCheckValidUser from '@/hooks/useCheckValidUser';
import useGAInitializeGA from '@/lib/googleAnalytics/hooks/useInitializeGA';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  useGAInitializeGA();
  useCheckValidUser();

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
