import { createContext, PropsWithChildren, RefObject, useMemo, useState } from 'react';

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

interface ModalDispatchContextProps {
  showModal: (Component: React.FC<ModalState> | null, props?: ModalProps) => void;
  close: () => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextProps | null>(null);

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
    <ModalDispatchContext.Provider value={dispatch}>
      {children}
      {modal.isOpen && modal.Component && <modal.Component onClose={close} {...modal} />}
    </ModalDispatchContext.Provider>
  );
};

export default ModalProvider;
