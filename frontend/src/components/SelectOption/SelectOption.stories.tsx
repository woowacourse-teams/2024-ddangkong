import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SelectOption from './SelectOption';

const meta = {
  title: 'SelectOption',
  args: { handleSelectOption: fn() },

  component: SelectOption,
} satisfies Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 선택되지_않은_옵션: Story = {
  args: {
    option: { name: '100억 빚 송강', optionId: 1 },
    selectedId: 0,
    isSelected: false,
  },
};

export const 선택된_옵션: Story = {
  args: {
    option: { name: '100억 부자 송강호', optionId: 2 },
    selectedId: 2,
    isSelected: false,
  },
};
