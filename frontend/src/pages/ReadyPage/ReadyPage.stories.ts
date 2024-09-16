import { Meta, StoryObj } from '@storybook/react';

import ReadyPage from './ReadyPage';

const meta = {
  title: 'readyPage',
  component: ReadyPage,
} satisfies Meta<typeof ReadyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 게임_대기_화면: Story = {};
