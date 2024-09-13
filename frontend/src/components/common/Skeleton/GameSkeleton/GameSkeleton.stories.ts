import type { Meta, StoryObj } from '@storybook/react';

import GameSkeleton from './GameSkeleton';

const meta = {
  title: 'GameSkeleton',
  component: GameSkeleton,
} satisfies Meta<typeof GameSkeleton>;

export default meta;

type Story = StoryObj<typeof GameSkeleton>;

export const 게임_화면_스켈레톤: Story = {};
