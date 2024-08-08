import React, { ButtonHTMLAttributes, HTMLAttributes, useRef } from 'react';
import ReactDOM from 'react-dom';

import useDisableBackgroundScroll from './hooks/useDisableBackgroundScroll';
import useModalEscClose from './hooks/useModalEscClose';
import {
  modalBackdropLayout,
  modalContentLayout,
  modalContentWrapper,
  modalFooter,
  modalHeaderEmptyBox,
  modalHeaderLayout,
  modalIconButton,
  modalInputLayout,
  modalTextButton,
  modalTitle,
} from './Modal.styled';

import CloseIcon from '@/assets/images/closeIcon.png';

export interface ModalProps
  extends React.PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
    position?: 'top' | 'bottom' | 'center';
    style?: React.CSSProperties;
    onConfirm?: () => void;
  }> {}

const Modal = ({ children, isOpen, onClose, position = 'center', ...restProps }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useModalEscClose(isOpen, onClose);
  useDisableBackgroundScroll(isOpen);

  const handleOutsideClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    /* eslint jsx-a11y/no-static-element-interactions: "off" */
    // 모달을 제외한 영역을 클릭시 모달이 꺼지도록 설정하기 위해 설정함
    <div css={modalBackdropLayout} onClick={handleOutsideClick} onKeyDown={handleOutsideClick}>
      <div css={modalContentWrapper({ position })} ref={modalRef} {...restProps}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

interface ModalHeaderProps extends React.PropsWithChildren<HTMLAttributes<HTMLElement>> {
  position: 'center' | 'left';
}

const ModalHeader = ({ position = 'center', children, ...restProps }: ModalHeaderProps) => {
  return (
    <header css={modalHeaderLayout} {...restProps}>
      <div css={modalHeaderEmptyBox(position)}></div>
      {children}
    </header>
  );
};

interface ModalTitleProps extends React.PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  fontSize?: string;
  fontWeight?: string;
}

const ModalTitle = ({ fontSize, fontWeight, children, ...restProps }: ModalTitleProps) => {
  return (
    <h2 css={modalTitle({ fontSize, fontWeight })} {...restProps}>
      {children}
    </h2>
  );
};

interface ModalIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  imgSize?: string;
}

const ModalIconButton = ({
  type = 'button',
  src = CloseIcon,
  imgSize,
  ...restProps
}: ModalIconButtonProps) => {
  return (
    <button css={modalIconButton({ imgSize })} type={type} {...restProps}>
      <img src={src} alt="닫기 버튼" />
    </button>
  );
};

interface ModalTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonWidth?: string;
  buttonHeight?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
}

const ModalTextButton = ({
  type = 'button',
  buttonWidth,
  buttonHeight,
  fontSize,
  backgroundColor,
  fontColor,
  ...restProps
}: ModalTextButtonProps) => {
  return (
    <button
      css={modalTextButton({
        buttonWidth,
        buttonHeight,
        fontSize,
        backgroundColor,
        fontColor,
      })}
      type={type}
      {...restProps}
    />
  );
};

interface ModalContentProps extends React.PropsWithChildren<HTMLAttributes<HTMLElement>> {
  fontSize?: string;
}

const ModalContent = ({ children, fontSize, ...restProps }: ModalContentProps) => {
  return (
    <section css={modalContentLayout({ fontSize: '1.4rem' })} {...restProps}>
      {children}
    </section>
  );
};

interface ModalInputProps extends HTMLAttributes<HTMLElement> {}

const ModalInput = ({ ...restProps }: ModalInputProps) => {
  return <input css={modalInputLayout} {...restProps} />;
};

interface ModalFooterProps extends React.PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  buttonPosition?: 'left' | 'center' | 'right';
  buttonGap?: string;
}

const ModalFooter = ({ children, buttonPosition, buttonGap, ...restProps }: ModalFooterProps) => {
  return (
    <div css={modalFooter({ buttonPosition, buttonGap })} {...restProps}>
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.IconButton = ModalIconButton;
Modal.TextButton = ModalTextButton;
Modal.Content = ModalContent;
Modal.Input = ModalInput;
Modal.Footer = ModalFooter;

export default Modal;
