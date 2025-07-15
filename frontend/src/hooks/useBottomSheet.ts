import { useContext } from 'react';

import { BottomSheetContext } from '@/providers/BottomSheetProvider/BottomSheetProvider';

export const useBottomSheet = () => {
  const bottomSheet = useContext(BottomSheetContext);

  if (!bottomSheet) {
    throw new Error('BottomSheetContext를 찾을 수 없습니다.');
  }

  return bottomSheet;
};
