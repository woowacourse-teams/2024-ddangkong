import { PropsWithChildren, RefObject, useMemo, useState } from 'react';

import ModalContext from './ModalContext';

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

interface Modal extends ModalProps {
  Component: React.FC<ModalState> | null;
  isOpen: boolean;
}

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<Modal>({
    Component: null,
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const showModal = (Component: React.FC<ModalState> | null, props?: ModalProps) => {
    setModal({
      Component,
      title: props?.title,
      message: props?.message,
      onConfirm: props?.onConfirm,
      isOpen: true,
      returnFocusRef: props?.returnFocusRef,
    });
  };

  const close = () => {
    setModal((prev) => ({
      ...prev,
      Component: null,
      isOpen: false,
    }));
  };

  const dispatch = useMemo(() => ({ showModal, close }), []);

  return (
    <ModalContext.Provider value={dispatch}>
      {children}
      {modal.isOpen && modal.Component && <modal.Component onClose={close} {...modal} />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
