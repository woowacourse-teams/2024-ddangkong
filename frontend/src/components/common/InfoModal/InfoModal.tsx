import { UseMutateFunction } from '@tanstack/react-query';

import { infoModalText } from './InfoModal.styled';
import Modal, { ModalProps } from '../Modal/Modal';

interface InfoModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
  text: string;
  onConfirm: UseMutateFunction<void, Error, void, unknown>;
}

const InfoModal = ({ isOpen, onClose, onConfirm, text }: InfoModalProps) => {
  const handleClick = () => {
    onClose();
    onConfirm();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm}>
      <Modal.Header position="center">
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <span css={infoModalText}>{text}</span>
      </Modal.Content>
      <Modal.Footer>
        <Modal.TextButton buttonWidth="100%" onClick={handleClick}>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
