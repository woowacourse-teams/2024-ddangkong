import { Outlet } from 'react-router-dom';

import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  return (
    <RootErrorBoundary>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </RootErrorBoundary>
  );
};

export default MainLayout;
