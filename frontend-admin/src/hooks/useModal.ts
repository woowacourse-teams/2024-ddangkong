import { useContext } from 'react';

import ModalContext from '@/contexts/ModalContext';

const useModal = () => {
  const modal = useContext(ModalContext);

  if (modal === null) {
    throw new Error('ModalContext가 존재하지 않습니다.');
  }

  return modal;
};

export default useModal;
