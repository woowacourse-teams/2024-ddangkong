import type { Meta, StoryObj } from '@storybook/react';

import ReadySkeleton from './ReadySkeleton';

const meta = {
  title: 'skeleton/ReadySkeleton',
  component: ReadySkeleton,
} satisfies Meta<typeof ReadySkeleton>;

export default meta;

type Story = StoryObj<typeof ReadySkeleton>;

export const 게임_대기_화면_스켈레톤: Story = {};
