import { useRef } from 'react';
import { createPortal } from 'react-dom';

import {
  bottomSheetBackdropLayout,
  bottomSheetContentWrapper,
  bottomSheetHandle,
  bottomSheetHeaderLayout,
} from './BottomSheet.styled';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ children, isOpen }: BottomSheetProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const bottomSheetContent = (
    <div css={bottomSheetBackdropLayout}>
      <div ref={contentRef} css={bottomSheetContentWrapper}>
        <div css={bottomSheetHeaderLayout}>
          <div css={bottomSheetHandle} />
        </div>
        {children}
      </div>
    </div>
  );

  return createPortal(bottomSheetContent, document.body);
};

export default BottomSheet;
