import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  RefObject,
  useEffect,
  useRef,
  PropsWithChildren,
} from 'react';
import ReactDOM from 'react-dom';

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
} from './Modal.styles';

import CloseIcon from '@/assets/images/close.svg';
import { theme } from '@/styles/theme';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  position?: 'top' | 'bottom' | 'center';
  style?: React.CSSProperties;
  returnFocusRef?: RefObject<HTMLElement>;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  returnFocusRef,
  position = 'center',
  ...restProps
}: PropsWithChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useModalEscClose(isOpen, onClose);

  const handleOutsideClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const currentRef = returnFocusRef?.current;

    return () => {
      if (currentRef) {
        currentRef.focus();
      }
    };
  }, [returnFocusRef]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      tabIndex={0}
      role="dialog"
      aria-modal={true}
      css={modalBackdropLayout}
      onClick={handleOutsideClick}
      onKeyDown={handleOutsideClick}
    >
      <div css={modalContentWrapper({ position })} ref={modalRef} {...restProps}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

interface ModalHeaderProps extends React.PropsWithChildren<HTMLAttributes<HTMLElement>> {
  position?: 'center' | 'left';
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

const ModalTitle = ({
  fontSize = '2rem',
  fontWeight = 'bold',
  children,
  ...restProps
}: ModalTitleProps) => {
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
  imgSize = '1.6rem',
  ...restProps
}: ModalIconButtonProps) => {
  return (
    <button css={modalIconButton({ imgSize })} type={type} {...restProps}>
      <img src={src} alt="닫기 버튼" />
    </button>
  );
};

interface ModalTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onConfirm?: () => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  color?: string;
}

const ModalTextButton = ({
  type = 'button',
  onConfirm,
  width = '100%',
  height = '100%',
  backgroundColor = theme.color.peanut400,
  fontSize = '1.6rem',
  color = '#000000',
  ...restProps
}: ModalTextButtonProps) => {
  return (
    <button
      css={modalTextButton({ width, height, color, backgroundColor, fontSize })}
      type={type}
      onClick={onConfirm}
      {...restProps}
    />
  );
};

interface ModalContentProps extends React.PropsWithChildren<HTMLAttributes<HTMLElement>> {
  fontSize?: string;
}

const ModalContent = ({ children, fontSize = '1.6rem', ...restProps }: ModalContentProps) => {
  return (
    <section css={modalContentLayout({ fontSize })} {...restProps}>
      {children}
    </section>
  );
};

type ModalInputProps = HTMLAttributes<HTMLElement>;

const ModalInput = ({ ...restProps }: ModalInputProps) => {
  return <input css={modalInputLayout} {...restProps} />;
};

interface ModalFooterProps extends React.PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  position?: 'left' | 'center' | 'right';
  gap?: string;
}

const ModalFooter = ({
  children,
  position = 'center',
  gap = '1.2rem',
  ...restProps
}: ModalFooterProps) => {
  return (
    <div css={modalFooter({ position, gap })} {...restProps}>
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
