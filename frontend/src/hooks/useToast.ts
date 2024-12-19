import { useContext } from 'react';

import ToastContext from '@/providers/ToastProvider/ToastProviderContext';

const useToast = () => {
  const toast = useContext(ToastContext);

  if (!toast) {
    throw new Error('ToastContext를 찾을 수 없습니다.');
  }

  return toast;
};

export default useToast;
