import type { Meta, StoryObj } from '@storybook/react';

import TabContentContainer from './TabContentContainer';

const meta = {
  title: 'TabContentContainer',
  component: TabContentContainer,
} satisfies Meta<typeof TabContentContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 투표_통계: Story = {
  args: {
    isVoteStatisticsTabActive: true,
  },
};

export const 투표_현황: Story = {
  args: {
    isVoteStatisticsTabActive: false,
  },
};
