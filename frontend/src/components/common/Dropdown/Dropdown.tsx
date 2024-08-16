import React, { useEffect, useRef, useState } from 'react';

import {
  dropdownLayout,
  dropdownText,
  dropdownTextContainer,
  emptyWrapper,
  optionButton,
  selectOptionList,
} from './Dropdown.styled';

import ArrowDown from '@/assets/images/arrowDown.svg';
import ArrowUp from '@/assets/images/arrowUp.svg';
import { Category } from '@/types/room';

interface DropdownProps {
  text: string;
  optionList: Category[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dropdown = ({ text, optionList, handleClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      const isOutsideDropdown = isOpen && !dropdownRef.current?.contains(e.target as Element);

      if (isOutsideDropdown) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen]);

  return (
    <div
      css={dropdownLayout}
      ref={dropdownRef}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={() => setIsOpen((prev) => !prev)}
      role="button"
      tabIndex={0}
    >
      <div css={dropdownTextContainer}>
        <div css={emptyWrapper}></div>
        <span css={dropdownText}>{text || '선택해주세요'}</span>
        <img src={isOpen ? ArrowDown : ArrowUp} alt="드랍다운 화살표" />
      </div>
      <div css={selectOptionList(isOpen, optionList.length)}>
        {isOpen &&
          optionList.map((option) => (
            <button
              css={optionButton(text === option)}
              key={option}
              value={option}
              onClick={handleClick}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
