import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './Spinner';

const meta = {
  title: 'Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export const 기본_스피너: Story = {};

export default meta;
type Story = StoryObj<typeof Spinner>;
