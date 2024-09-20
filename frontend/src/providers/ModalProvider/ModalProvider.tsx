import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface ModalContent {
  title: string;
  message: string;
}

interface ModalState extends ModalContent {
  isOpen: boolean;
  onClose: () => void;
}

interface Modal extends ModalContent {
  Component: React.FC<ModalState> | null;
  isOpen: boolean;
}

interface ModalDispatchContextProps {
  show: (Component: React.FC<ModalState> | null, { title, message }: ModalContent) => void;
  close: () => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextProps | null>(null);

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<Modal>({
    Component: null,
    isOpen: false,
    title: '',
    message: '',
  });

  const show = (Component: React.FC<ModalState> | null, { title, message }: ModalContent) => {
    setModal({
      Component,
      title,
      message,
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
