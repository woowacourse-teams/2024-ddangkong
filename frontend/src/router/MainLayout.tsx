import { Outlet } from 'react-router-dom';

import AsyncErrorBoundary from '@/components/common/ErrorBoundary/AsyncErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
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
