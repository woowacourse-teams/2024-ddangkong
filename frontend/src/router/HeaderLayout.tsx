import { Outlet } from 'react-router-dom';

import QueryClientDefaultOptionProvider from '@/components/common/QueryClientDefaultOptionProvider/QueryClientDefaultOptionProvider';
import Header from '@/components/layout/Header/Header';

const HeaderLayout = () => {
  return (
    <QueryClientDefaultOptionProvider>
      <Header />
      <Outlet />
    </QueryClientDefaultOptionProvider>
  );
};

export default HeaderLayout;
