import React, { useEffect, useRef, useState } from 'react';

import {
  arrowImage,
  dropdownLayout,
  dropdownText,
  dropdownTextContainer,
  emptyWrapper,
  optionButton,
  selectOptionList,
} from './Dropdown.styled';

import ArrowDown from '@/assets/images/arrowDown.svg';
import ArrowUp from '@/assets/images/arrowUp.svg';

interface DropdownProps<T> {
  text: string;
  optionList: T[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dropdown = <T extends { value: string; label: string }>({
  text,
  optionList,
  handleClick,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
      onClick={handleToggleDropdown}
      onKeyDown={handleToggleDropdown}
      role="button"
      tabIndex={0}
    >
      <div css={dropdownTextContainer}>
        <div css={emptyWrapper}></div>
        <span css={dropdownText}>{text || '선택해주세요'}</span>
        <div>
          <img src={isOpen ? ArrowDown : ArrowUp} alt="드랍다운 화살표" css={arrowImage} />
        </div>
      </div>
      <ul css={selectOptionList(isOpen, optionList.length)}>
        {isOpen &&
          optionList.map((option) => (
            <li key={option.value}>
              <button
                css={optionButton(text === option.label)}
                value={option.value}
                onClick={handleClick}
              >
                {option.label}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
