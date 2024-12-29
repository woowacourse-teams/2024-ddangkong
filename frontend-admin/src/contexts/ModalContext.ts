import { ModalProps, ModalState } from '@/types/modal';
import { createContext } from 'react';

interface ModalContextProps {
  showModal: (Component: React.FC<ModalState> | null, props?: ModalProps) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;
