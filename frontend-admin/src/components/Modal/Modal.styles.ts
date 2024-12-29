import { css } from "@emotion/react";

import { ModalProps } from "./Modal";

export const modalBackdropLayout = css`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0 / 50%);
  inset: 0;
`;

export const modalContentWrapper = ({
  position,
}: Pick<ModalProps, "position">) => css`
  display: flex;
  position: fixed;
  left: 50%;
  flex-direction: column;
  gap: 2.4rem;

  height: fit-content;
  max-height: 70vh;
  min-height: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
  padding: 2.4rem;
  border: none;
  border-radius: 0.8rem;

  background-color: white;
  box-sizing: border-box;

  ${(() => {
    switch (position) {
      case "top":
        return `
          top: 0;
          transform: translate(-50%, 0%);
        `;
      case "bottom":
        return `
          bottom: 0;
          transform: translate(-50%, 0%);
        `;
      case "center":
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

export const modalHeaderEmptyBox = (position: "center" | "left") => css`
  display: ${position === "center" ? "block" : "none"};
  width: 1.6rem;
`;

interface ModalTitleProps {
  fontSize?: string;
  fontWeight?: string;
}

export const modalTitle = ({ fontSize, fontWeight }: ModalTitleProps) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`;

export const modalIconButton = ({ imgSize }: { imgSize?: string }) => css`
  width: ${imgSize};
  height: ${imgSize};
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

interface ModalTextButtonProps {
  width?: string;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
}

export const modalTextButton = ({
  width,
  height,
  fontSize,
  backgroundColor,
  color,
}: ModalTextButtonProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width};
  height: ${height};
  padding: 1rem;
  border: none;
  border-radius: 0.8rem;

  background-color: ${backgroundColor};

  font-weight: bold;
  font-size: ${fontSize};

  &:focus {
    outline: none;
  }

  &:enabled {
    color: ${color};
  }
`;

interface ModalContentProps {
  fontSize?: string;
}

export const modalContentLayout = ({ fontSize }: ModalContentProps) => css`
  font-size: ${fontSize};
  text-align: center;
`;

export const modalInputLayout = css`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #000;
`;

interface ModalFooterProps {
  position?: "left" | "center" | "right";
  gap?: string;
}

export const modalFooter = ({ position, gap }: ModalFooterProps) => css`
  display: flex;
  justify-content: ${position};
  gap: ${gap};
`;
