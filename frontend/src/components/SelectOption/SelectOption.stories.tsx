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

export const 클릭되지_않은_옵션: Story = {
  args: {
    option: { name: '100억 빚 송강', optionId: 1 },
    selectedOption: {
      id: 0,
      isCompleted: false,
    },
  },
};

export const 클릭된_옵션: Story = {
  args: {
    option: { name: '100억 부자 송강호', optionId: 2 },
    selectedOption: {
      id: 2,
      isCompleted: false,
    },
  },
};

export const 선택_완료된_옵션: Story = {
  args: {
    option: { name: '100억 부자 송강호', optionId: 2 },
    selectedOption: {
      id: 2,
      isCompleted: true,
    },
  },
};
