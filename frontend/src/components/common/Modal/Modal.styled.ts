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
  width: 24rem;
  gap: 1.6rem;
  height: fit-content;
  max-height: 70vh;
  min-height: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
  padding: 2.4rem 3.2rem;
  border: none;
  border-radius: 0.8rem;

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
  align-items: center;
  margin: 0;

  font-weight: bold;
`;

interface ModalTitleProps {
  fontSize?: string;
  fontWeight?: string;
}

export const modalTitle = ({ fontSize, fontWeight }: ModalTitleProps) => css`
  font-weight: ${fontWeight || 'bold'};
  font-size: ${fontSize || '2rem'};
`;

export const modalIconButton = ({ imgSize }: { imgSize?: string }) => css`
  margin: 0 0 0 auto;
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  img {
    width: ${imgSize || '1.6rem'};
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
  buttonWidth,
  buttonHeight,
  fontSize,
  backgroundColor,
  fontColor,
}: ModalTextButtonProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${buttonWidth || '100%'};
  height: ${buttonHeight || '100%'};
  padding: 1rem;
  border: none;

  background-color: ${backgroundColor || Theme.color.peanut400};

  color: ${fontColor || '#000000'};
  font-weight: bold;
  font-size: ${fontSize || '1.6rem'};
  border-radius: 0;
  border-radius: 0.8rem;

  &:focus {
    outline: none;
  }
`;

interface ModalContentProps {
  fontSize?: string;
}

export const modalContentLayout = ({ fontSize }: ModalContentProps) => css`
  * {
    box-sizing: border-box;
  }

  font-size: ${fontSize || '1.2rem'};
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

export const modalFooter = ({ buttonPosition, buttonGap }: ModalFooterProps) => css`
  display: flex;
  justify-content: ${buttonPosition || 'center'};
  gap: ${buttonGap || '1.2rem'};
`;
