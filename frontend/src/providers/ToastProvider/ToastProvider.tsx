import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import ToastContext from './ToastContext';
import { toastLayout } from './ToastProvider.styled';

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastMessage, setToastMessage] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string) => {
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
    <ToastContext.Provider value={{ showToast }}>
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
