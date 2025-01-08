import React, { useEffect, useRef, useState } from 'react';

import {
  arrowImage,
  dropdownLayout,
  dropdownText,
  dropdownTextContainer,
  emptyWrapper,
  optionButton,
  selectOptionList,
} from './Dropdown.styles';

import ArrowDown from '@/assets/images/arrowDown.svg';
import ArrowUp from '@/assets/images/arrowUp.svg';
import { theme } from '@/styles/theme';

interface Category {
  label: string;
  value: string;
}

interface DropdownProps {
  text: string;
  optionList: Category[];
  handleClickOption: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
}

const Dropdown = ({ text, optionList, handleClickOption, width = '16rem' }: DropdownProps) => {
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

    document.addEventListener('click', handleOutsideClose);

    return () => {
      document.removeEventListener('click', handleOutsideClose);
    };
  }, [isOpen]);

  return (
    <div css={dropdownLayout(width)} ref={dropdownRef}>
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
          <img src={isOpen ? ArrowUp : ArrowDown} alt="" css={arrowImage} />
        </div>
      </button>

      <ul
        id="dropdown-listbox"
        role="listbox"
        aria-labelledby="dropdown-button"
        css={selectOptionList}
        style={{
          height: isOpen ? `${3.6 * optionList.length}rem` : 0,
          border: isOpen ? `1px solid ${theme.color.gray200}` : 'none',
        }}
      >
        {optionList.map((option) => (
          <li key={option.value} role="option" aria-selected={text === option.label}>
            <button
              css={(theme) => optionButton(theme, text === option.label)}
              value={option.value}
              onClick={handleSelectOption}
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
