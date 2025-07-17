import { useRef } from 'react';
import { createPortal } from 'react-dom';

import {
  bottomSheetBackdropLayout,
  bottomSheetContentWrapper,
  bottomSheetHandle,
  bottomSheetHeaderLayout,
} from './BottomSheet.styled';
import { useBottomSheetClose } from './hooks/useBottomSheetClose';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ children, isOpen, onClose }: BottomSheetProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useBottomSheetClose({ isOpen, onClose, ref: contentRef });

  if (!isOpen) return null;

  const bottomSheetContent = (
    <div css={bottomSheetBackdropLayout}>
      <div ref={contentRef} css={bottomSheetContentWrapper}>
        <div css={bottomSheetHeaderLayout}>
          <button type="button" css={bottomSheetHandle} />
        </div>
        {children}
      </div>
    </div>
  );

  return createPortal(bottomSheetContent, document.body);
};

export default BottomSheet;
