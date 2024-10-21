import { Fragment, RefObject } from 'react';

import { alertModalTitle, alertText, messageContainer } from './AlertModal.styled';
import Modal from '../Modal/Modal';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  message?: string;
  title?: string;
  returnFocusRef?: RefObject<HTMLElement>;
}

const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  title,
  returnFocusRef,
}: AlertModalProps) => {
  const handleClick = () => {
    onConfirm && onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} returnFocusRef={returnFocusRef}>
      <Modal.Header position="center">
        <Modal.Title css={alertModalTitle}>{title || '알림'}</Modal.Title>
        <Modal.IconButton onClick={onClose} />
      </Modal.Header>
      <Modal.Content css={messageContainer}>
        {message &&
          message.split('\n').map((text) => (
            <Fragment key={text}>
              <span css={alertText}>{text}</span>
              <br />
            </Fragment>
          ))}
      </Modal.Content>
      <Modal.Footer buttonPosition="center">
        <Modal.TextButton onClick={handleClick} buttonWidth="60%">
          확인
        </Modal.TextButton>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
