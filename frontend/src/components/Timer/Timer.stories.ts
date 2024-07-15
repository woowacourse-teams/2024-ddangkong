import type { Meta, StoryObj } from '@storybook/react';

import Timer from './Timer';

const meta: Meta<typeof Timer> = {
  title: 'Title',
  component: Timer,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {},
};
