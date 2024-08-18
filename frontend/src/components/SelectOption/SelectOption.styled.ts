import { css } from '@emotion/react';

import { Theme } from '@/styles/Theme';

export const SelectOptionLayout = (selected: boolean, isSelected: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.6rem;
  height: 16.8rem;
  padding: 1.6rem;
  border-radius: 3rem;

  background-color: ${selected ? Theme.color.peanut500 : Theme.color.peanut300};
  cursor: ${isSelected ? 'not-allowed' : 'pointer'};
  opacity: ${isSelected ? Theme.opacity.transparency : Theme.opacity.normal};

  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  word-break: keep-all;

  transition: all 0.5s;
  scale: ${selected ? 1.1 : 1};
`;
