import React, { ButtonHTMLAttributes, HTMLAttributes, useRef } from 'react';

import useDisableBackgroundScroll from './hooks/useDisableBackgroundScroll';
import useModalEscClose from './hooks/useModalEscClose';
import {
  modalBackdropLayout,
  modalContentLayout,
  modalContentWrapper,
  modalFooter,
  modalHeaderLayout,
  modalIconButton,
  modalInputLayout,
  modalTextButton,
  modalTitle,
} from './Modal.styled';

import CloseIcon from '@/assets/images/closeIcon.png';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  style?: React.CSSProperties;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal = ({ children, isOpen, onClose, position, ...restProps }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useModalEscClose(isOpen, onClose);
  useDisableBackgroundScroll(isOpen);

  const handleOutsideClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    /* eslint jsx-a11y/no-static-element-interactions: "off" */
    // 모달을 제외한 영역을 클릭시 모달이 꺼지도록 설정하기 위해 설정함
    <div css={modalBackdropLayout} onClick={handleOutsideClick} onKeyDown={handleOutsideClick}>
      <div css={modalContentWrapper({ position })} ref={modalRef} {...restProps}>
        {children}
      </div>
    </div>
  );
};

interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ModalHeader = ({ children, ...restProps }: ModalHeaderProps) => {
  return (
    <header css={modalHeaderLayout} {...restProps}>
      {children}
    </header>
  );
};

interface ModalTitleProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const ModalTitle = ({ children, ...restProps }: ModalTitleProps) => {
  return (
    <span css={modalTitle({ fontSize: '2rem', fontWeight: 'bold' })} {...restProps}>
      {children}
    </span>
  );
};

interface ModalIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
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
      <img src={src} alt="Close icon" />
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

interface ModalContentProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ModalContent = ({ children, ...restProps }: ModalContentProps) => {
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

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
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
