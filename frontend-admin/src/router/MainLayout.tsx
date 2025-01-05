import ModalProvider from '@/providers/ModalProvider/ModalProvider';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
};

export default MainLayout;
