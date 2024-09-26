import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface ModalProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
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
  show: (Component: React.FC<ModalState> | null, props?: ModalProps) => void;
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

  const show = (Component: React.FC<ModalState> | null, props?: ModalProps) => {
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

  const dispatch = useMemo(() => ({ show, close }), []);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      {children}
      {modal.isOpen && modal.Component && <modal.Component onClose={close} {...modal} />}
    </ModalDispatchContext.Provider>
  );
};

export default ModalProvider;
