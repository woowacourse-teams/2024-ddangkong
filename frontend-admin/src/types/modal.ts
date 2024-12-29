export interface ModalProps {
  title?: string;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConfirm?: (arg?: any) => void;
}

export interface ModalState extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
