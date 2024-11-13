import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import QueryClientDefaultOptionProvider from '@/providers/QueryClientDefaultOptionProvider/QueryClientDefaultOptionProvider';

const HeaderLayout = () => {
  return (
    <QueryClientDefaultOptionProvider>
      <Header />
      <Outlet />
    </QueryClientDefaultOptionProvider>
  );
};

export default HeaderLayout;
