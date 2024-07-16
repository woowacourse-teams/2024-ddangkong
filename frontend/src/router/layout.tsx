import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header title="밸런스 게임" />
      <Outlet />
    </>
  );
};
