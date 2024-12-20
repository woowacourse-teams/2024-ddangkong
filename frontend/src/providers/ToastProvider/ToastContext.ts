import { createContext } from 'react';

interface ToastContext {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContext | null>(null);

export default ToastContext;
