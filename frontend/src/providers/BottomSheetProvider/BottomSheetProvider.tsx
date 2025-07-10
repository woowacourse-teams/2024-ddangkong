import { useState, useMemo, ReactNode } from 'react';

import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import { BottomSheetContext } from '@/contexts/BottomSheetContext';

interface BottomSheetProviderProps {
  children: ReactNode;
}

interface BottomSheetState {
  isOpen: boolean;
  content: ReactNode | null;
}

const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  const [bottomSheetState, setBottomSheetState] = useState<BottomSheetState>({
    isOpen: false,
    content: null,
  });

  const showBottomSheet = (content: ReactNode) => {
    setBottomSheetState({
      isOpen: true,
      content,
    });
  };

  const closeBottomSheet = () => {
    setBottomSheetState({
      isOpen: false,
      content: null,
    });
  };

  const context = useMemo(
    () => ({
      showBottomSheet,
      closeBottomSheet,
    }),
    [],
  );

  return (
    <BottomSheetContext.Provider value={context}>
      {children}
      {bottomSheetState.isOpen && (
        <BottomSheet isOpen={bottomSheetState.isOpen} onClose={closeBottomSheet}>
          {bottomSheetState.content}
        </BottomSheet>
      )}
    </BottomSheetContext.Provider>
  );
};

export default BottomSheetProvider;
