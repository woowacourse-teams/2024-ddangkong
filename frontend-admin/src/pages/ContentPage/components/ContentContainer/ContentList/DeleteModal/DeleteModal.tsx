import { Fragment } from 'react';

import { alertText, closeButton, deleteButton } from './DeleteModal.styles';
import Modal from '@/components/Modal/Modal';
import { theme } from '@/styles/theme';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  message?: string;
  title?: string;
}

const DeleteModal = ({ isOpen, onClose, onConfirm, message, title }: DeleteModalProps) => {
  const handleClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} css={{ padding: '4rem' }}>
      <Modal.Header css={{ gap: '1.6rem' }}>
        <Modal.Title>{title || '해당 질문을 삭제하시겠습니까?'}</Modal.Title>
        <Modal.IconButton onClick={onClose} imgSize="2.4rem" />
      </Modal.Header>
      <Modal.Content>
        {message &&
          message.split('\n').map((text) => (
            <Fragment key={text}>
              <span css={alertText}>{text}</span>
              <br />
            </Fragment>
          ))}
      </Modal.Content>
      <Modal.Footer css={{ height: '3.6rem' }}>
        <Modal.TextButton
          onClick={handleClick}
          width="40%"
          backgroundColor="white"
          color={theme.color.red300}
          css={deleteButton}
        >
          삭제
        </Modal.TextButton>
        <Modal.TextButton onClick={onClose} width="40%" backgroundColor="white" css={closeButton}>
          취소
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
