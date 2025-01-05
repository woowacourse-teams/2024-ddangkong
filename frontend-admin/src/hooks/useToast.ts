import { useContext } from 'react';

import ToastContext from '@/contexts/ToastContext';

const useToast = () => {
  const toast = useContext(ToastContext);

  if (toast === null) {
    throw new Error('ToastContext가 존재하지 않습니다.');
  }

  return toast;
};

export default useToast;
