import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
