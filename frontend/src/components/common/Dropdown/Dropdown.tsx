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
  handleClickOption: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Dropdown = <T extends { value: string; label: string }>({
  text,
  optionList,
  handleClickOption,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
    triggerRef.current?.focus();
  };

  const handleSelectOption = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleClickOption(e);
    handleToggleDropdown();
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClose);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClose);
    };
  }, [isOpen]);

  return (
    <div css={dropdownLayout} ref={dropdownRef}>
      <button
        ref={triggerRef}
        onClick={handleToggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-listbox"
        aria-label={`카테고리 선택 목록, 현재 선택: ${text || '선택해주세요'}`}
        css={dropdownTextContainer}
      >
        <div css={emptyWrapper}></div>
        <span css={dropdownText}>{text || '선택해주세요'}</span>
        <div>
          <img src={isOpen ? ArrowUp : ArrowDown} alt="" css={arrowImage} aria-hidden="true" />
        </div>
      </button>

      {isOpen && (
        <ul
          id="dropdown-listbox"
          role="listbox"
          aria-labelledby="dropdown-button"
          css={selectOptionList(isOpen, optionList.length)}
        >
          {optionList.map((option) => (
            <li key={option.value} role="option" aria-selected={text === option.label}>
              <button
                css={optionButton(text === option.label)}
                value={option.value}
                onClick={handleSelectOption}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
