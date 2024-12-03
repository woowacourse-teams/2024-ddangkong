import AlertModal from '@/components/AlertModal/AlertModal';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { CustomError, NetworkError } from '@/utils/error';

const useDefaultMutationErrorHandler = () => {
  const { showToast } = useToast();
  const { showModal } = useModal();

  return (error: unknown) => {
    if (error instanceof NetworkError) {
      showToast(error.message);
      return;
    }
    if (error instanceof CustomError) {
      showModal(AlertModal, { title: '에러', message: error.message });
    }
  };
};

export default useDefaultMutationErrorHandler;
