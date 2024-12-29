import ModalContext from '@/contexts/ModalContext';
import { ModalProps, ModalState } from '@/types/modal';
import { PropsWithChildren, useMemo, useState } from 'react';

interface Modal extends ModalProps {
  Component: React.FC<ModalState> | null;
  isOpen: boolean;
}

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<Modal>({
    Component: null,
    isOpen: false,
  });

  const showModal = (Component: React.FC<ModalState> | null, props?: ModalProps) => {
    setModal({
      Component,
      title: props?.title,
      message: props?.message,
      onConfirm: props?.onConfirm,
      isOpen: true,
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
