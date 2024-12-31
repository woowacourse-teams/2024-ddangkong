import { Outlet } from 'react-router-dom';

import { AsyncErrorBoundary, RootErrorBoundary } from '@/components/common';
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
