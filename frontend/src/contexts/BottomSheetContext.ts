import { createContext, ComponentType } from 'react';

export interface BottomSheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BottomSheetContext {
  showBottomSheet: <T extends BottomSheetComponentProps>(
    Component: ComponentType<T>,
    props?: Omit<T, 'isOpen' | 'onClose'>,
  ) => void;
  closeBottomSheet: () => void;
}

export const BottomSheetContext = createContext<BottomSheetContext | null>(null);
