import { useContext } from 'react';

import ModalContext from '@/contexts/ModalContext';

const useModal = () => {
  const dispatch = useContext(ModalContext);

  if (dispatch === null) {
    throw new Error('ModalContext 존재하지 않습니다.');
  }
  return dispatch;
};
export default useModal;
