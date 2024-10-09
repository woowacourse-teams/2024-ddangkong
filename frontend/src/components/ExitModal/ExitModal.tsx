import { title } from './ExitModal.styled';

import Modal from '@/components/common/Modal/Modal';
import { useExit } from '@/components/layout/Header/hooks/useExit';

interface ExitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitModal = ({ isOpen, onClose }: ExitModalProps) => {
  const { handleExit } = useExit();

  const handleClickConfirm = () => {
    handleExit();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header position="center">
        <Modal.Title css={title}>방 나가기</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>정말로 방을 나가시겠습니까?</Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton buttonWidth="100%" onClick={handleClickConfirm}>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ExitModal;
