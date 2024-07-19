import type { Meta, StoryObj } from '@storybook/react';

import Timer from './Timer';

const meta: Meta<typeof Timer> = {
  title: 'Timer',
  component: Timer,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const 기본_타이머: Story = {
  args: {},
  render: (args) => <Timer {...args} />,
};
