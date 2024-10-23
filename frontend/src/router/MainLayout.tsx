import { Outlet } from 'react-router-dom';

import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
};

export default MainLayout;
