import type { Meta, StoryObj } from '@storybook/react';

import GamePage from './GamePage';

const meta = {
  title: 'page/GamePage',
  component: GamePage,
} satisfies Meta<typeof GamePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 게임_화면: Story = {};
