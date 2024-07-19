import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SelectOption from './SelectOption';

const meta = {
  title: 'SelectOption',
  parameters: {
    argTypes: {},
    actions: { argTypesRegex: '^on.*' },
  },

  args: { handleSelectOption: fn() },

  component: SelectOption,
} satisfies Meta<typeof SelectOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 선택되지_않은_옵션: Story = {
  args: {
    option: { content: '100억 빚 송강', optionId: 1 },
    selectedId: 0,
  },
  render: ({ ...args }) => <SelectOption {...args} />,
};

export const 선택된_옵션: Story = {
  args: {
    option: { content: '100억 빚 송강', optionId: 1 },
    selectedId: 1,
  },

  render: (args) => <SelectOption {...args} handleSelectOption={args.handleSelectOption} />,
};
