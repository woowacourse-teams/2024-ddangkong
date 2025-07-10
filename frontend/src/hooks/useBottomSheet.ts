import { useContext } from 'react';

import { BottomSheetContext } from '@/contexts/BottomSheetContext';

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw new Error('BottomSheetContext를 찾을 수 없습니다.');
  }

  return context;
};
