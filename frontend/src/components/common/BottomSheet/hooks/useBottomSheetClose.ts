import { useEffect } from 'react';

interface UseBottomSheetCloseEventsProps {
  isOpen: boolean;
  onClose: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

export const useBottomSheetClose = ({ isOpen, onClose, ref }: UseBottomSheetCloseEventsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, ref]);
};
