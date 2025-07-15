import { useContext } from 'react';

import { ModalContext } from '@/providers/ModalProvider/ModalProvider';

const useModal = () => {
  const modal = useContext(ModalContext);

  if (modal === null) {
    throw new Error('modal가 존재하지 않습니다.');
  }
  return modal;
};
export default useModal;
