import { useState, useMemo, ReactNode, ComponentType } from 'react';

import { BottomSheetContext, BottomSheetComponentProps } from '@/contexts/BottomSheetContext';

interface BottomSheetProviderProps {
  children: ReactNode;
}

interface BottomSheetState {
  Component: ComponentType<BottomSheetComponentProps> | null;
  props: Omit<BottomSheetComponentProps, 'isOpen' | 'onClose'> | null;
  isOpen: boolean;
}

const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  const [bottomSheetState, setBottomSheetState] = useState<BottomSheetState>({
    Component: null,
    props: null,
    isOpen: false,
  });

  const showBottomSheet = <T extends BottomSheetComponentProps>(
    Component: ComponentType<T>,
    props?: Omit<T, 'isOpen' | 'onClose'>,
  ) => {
    setBottomSheetState({
      Component: Component as ComponentType<BottomSheetComponentProps>,
      props: props || null,
      isOpen: true,
    });
  };

  const closeBottomSheet = () => {
    setBottomSheetState((prev) => ({
      ...prev,
      isOpen: false,
      Component: null,
      props: null,
    }));
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
      {bottomSheetState.isOpen && bottomSheetState.Component && (
        <bottomSheetState.Component
          isOpen={bottomSheetState.isOpen}
          onClose={closeBottomSheet}
          {...bottomSheetState.props}
        />
      )}
    </BottomSheetContext.Provider>
  );
};

export default BottomSheetProvider;
