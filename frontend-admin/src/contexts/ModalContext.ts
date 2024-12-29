import { createContext, RefObject } from 'react';

interface ModalProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
  returnFocusRef?: RefObject<HTMLElement>;
}

interface ModalState extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalContextProps {
  showModal: (Component: React.FC<ModalState> | null, props?: ModalProps) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;
