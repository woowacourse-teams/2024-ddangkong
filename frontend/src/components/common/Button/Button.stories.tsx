import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
  title: 'Button',
  parameters: {
    argTypes: {},
    actions: { argTypesRegex: '^on.*' },
  },

  args: { onClick: fn() },

  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본_버튼: Story = {
  args: {
    text: '선택',
    disabled: false,
  },
  render: ({ ...args }) => <Button {...args} />,
};
