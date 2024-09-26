import { useContext } from 'react';

import { ModalDispatchContext } from '@/providers/ModalProvider/ModalProvider';

const useModal = () => {
  const dispatch = useContext(ModalDispatchContext);

  if (dispatch === null) {
    throw new Error('ModalDispatchContext가 존재하지 않습니다.');
  }
  return dispatch;
};
export default useModal;
