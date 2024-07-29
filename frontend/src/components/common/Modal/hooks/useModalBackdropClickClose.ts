import { useEffect } from 'react';

const useModalBackdropClickClose = (
  isOpen: boolean,
  modalRef: React.MutableRefObject<HTMLElement | null>,
  onClose: () => void,
) => {
  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleBackdropClick);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener('mousedown', handleBackdropClick);
      }
    };
  }, [isOpen, onClose, modalRef]);
};

export default useModalBackdropClickClose;
