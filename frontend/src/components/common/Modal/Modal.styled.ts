import { css } from '@emotion/react';

import { ModalProps } from './Modal';

import { Theme } from '@/styles/Theme';

export const modalBackdropLayout = css`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0 / 50%);
  inset: 0;
`;

export const modalContentWrapper = ({ position }: Pick<ModalProps, 'position'>) => css`
  display: flex;
  position: fixed;
  left: 50%;
  flex-direction: column;
  gap: 1.6rem;
  width: 24rem;
  height: fit-content;
  max-height: 70vh;
  min-height: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
  padding: 2.4rem;
  border: none;
  border-radius: ${Theme.borderRadius.radius10};

  background-color: white;
  box-sizing: border-box;

  ${(() => {
    switch (position) {
      case 'top':
        return `
          top: 0;
          transform: translate(-50%, 0%);
        `;
      case 'bottom':
        return `
          bottom: 0;
          transform: translate(-50%, 0%);
        `;
      case 'center':
        return `
          top: 50%;
          transform: translate(-50%, -50%);
        `;
      default:
        return `
          top: 50%;
          transform: translate(-50%, -50%);
        `;
    }
  })()}
`;

export const modalHeaderLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  font-weight: bold;
`;

export const modalHeaderEmptyBox = (position: 'center' | 'left') => css`
  display: ${position === 'center' ? 'block' : 'none'};
  width: 1.6rem;
`;

interface ModalTitleProps {
  fontSize?: string;
  fontWeight?: string;
}

export const modalTitle = ({ fontSize = 'bold', fontWeight = '2rem' }: ModalTitleProps) => css`
  font-weight: ${fontWeight};
  font-size: ${fontSize};
`;

export const modalIconButton = ({ imgSize = '1.6rem' }: { imgSize?: string }) => css`
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  img {
    width: ${imgSize};
  }
`;

interface ModalTextButtonProps {
  buttonWidth?: string;
  buttonHeight?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
}

export const modalTextButton = ({
  buttonWidth = '100%',
  buttonHeight = '100%',
  fontSize = '1.6rem',
  backgroundColor = Theme.color.peanut400,
  fontColor = '#000000',
}: ModalTextButtonProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonWidth};
  height: ${buttonHeight};
  padding: 1rem;
  border: none;
  border-radius: 0.8rem;

  background-color: ${backgroundColor};

  color: ${fontColor};
  font-weight: bold;
  font-size: ${fontSize};

  &:focus {
    outline: none;
  }
`;

interface ModalContentProps {
  fontSize?: string;
}

export const modalContentLayout = ({ fontSize = '1.2rem' }: ModalContentProps) => css`
  * {
    box-sizing: border-box;
  }

  font-size: ${fontSize};
`;

export const modalInputLayout = css`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000;
`;

interface ModalFooterProps {
  buttonPosition?: 'left' | 'center' | 'right';
  buttonGap?: string;
}

export const modalFooter = ({
  buttonPosition = 'center',
  buttonGap = '1.2rem',
}: ModalFooterProps) => css`
  display: flex;
  justify-content: ${buttonPosition};
  gap: ${buttonGap};
`;
