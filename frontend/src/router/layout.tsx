import { Outlet } from 'react-router-dom';

import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import Header from '@/components/layout/Header/Header';

export const Layout = () => {
  return (
    <RootErrorBoundary>
      <Header />
      <Outlet />
    </RootErrorBoundary>
  );
};
