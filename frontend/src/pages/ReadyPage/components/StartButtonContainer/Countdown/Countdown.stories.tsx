import type { Meta, StoryObj } from '@storybook/react';

import Countdown from './Countdown';

const meta = {
  title: 'Countdown',
  component: Countdown,
  tags: ['!autodocs'],
  args: {
    goToGame: () => {},
  },
} satisfies Meta<typeof Countdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 게임_시작_카운트_다운: Story = {};
