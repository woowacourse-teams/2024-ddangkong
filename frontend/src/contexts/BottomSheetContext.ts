import { createContext, ReactNode } from 'react';

interface BottomSheetContext {
  showBottomSheet: (component: ReactNode) => void;
  closeBottomSheet: () => void;
}

export const BottomSheetContext = createContext<BottomSheetContext | null>(null);
