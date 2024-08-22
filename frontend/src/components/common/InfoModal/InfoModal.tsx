import { infoModalText } from './InfoModal.styled';
import Modal, { ModalProps } from '../Modal/Modal';

interface InfoModalProps extends Pick<ModalProps, 'isOpen' | 'onClose' | 'onConfirm'> {
  text: string;
}

const InfoModal = ({ isOpen, onClose, onConfirm, text }: InfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm}>
      <Modal.Header position="center">
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <span css={infoModalText}>{text}</span>
      </Modal.Content>
      <Modal.Footer>
        <Modal.TextButton buttonWidth="100%" onClick={onConfirm}>
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
