import { Outlet } from 'react-router-dom';

import { AsyncErrorBoundary, RootErrorBoundary } from '@/components/common';
import useCheckValidUser from '@/hooks/useCheckValidUser';
import useGAInitializeGA from '@/lib/googleAnalytics/hooks/useInitializeGA';
import BottomSheetProvider from '@/providers/BottomSheetProvider/BottomSheetProvider';
import ModalProvider from '@/providers/ModalProvider/ModalProvider';

const MainLayout = () => {
  useGAInitializeGA();
  useCheckValidUser();

  return (
    <RootErrorBoundary>
      <AsyncErrorBoundary>
        <ModalProvider>
          <BottomSheetProvider>
            <Outlet />
          </BottomSheetProvider>
        </ModalProvider>
      </AsyncErrorBoundary>
    </RootErrorBoundary>
  );
};

export default MainLayout;
