import { PropsWithChildren, useCallback, useEffect, useRef, useState, createContext } from 'react';
import { createPortal } from 'react-dom';

import { toastLayout } from './ToastProvider.styled';

interface ToastContext {
  show: (message: string) => void;
}

export const ToastContext = createContext<ToastContext | null>(null);

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastMessage, setToastMessage] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback((message: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setToastMessage('');
    }, 2000);

    setToastMessage(message);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toastMessage &&
        createPortal(
          <div css={toastLayout(Boolean(toastMessage))}>{toastMessage}</div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
