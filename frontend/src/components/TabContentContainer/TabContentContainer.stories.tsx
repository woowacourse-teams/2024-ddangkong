import type { Meta, StoryObj } from '@storybook/react';

import TabContentContainer from './TabContentContainer';

import ROUND_VOTE_RESULT from '@/mocks/data/roundVoteResult.json';

const meta = {
  title: 'TabContentContainer',
  component: TabContentContainer,
} satisfies Meta<typeof TabContentContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 그룹_탭: Story = {
  args: {
    isGroupTabActive: true,
    roundResult: ROUND_VOTE_RESULT.group,
    animatedFirstPercent: ROUND_VOTE_RESULT.group.firstOption.percent,
    animatedSecondPercent: ROUND_VOTE_RESULT.group.secondOption.percent,
  },
  render: (args) => <TabContentContainer {...args} />,
};

export const 전체_탭: Story = {
  args: {
    isGroupTabActive: false,
    roundResult: ROUND_VOTE_RESULT.total,
    animatedFirstPercent: ROUND_VOTE_RESULT.total.firstOption.percent,
    animatedSecondPercent: ROUND_VOTE_RESULT.total.secondOption.percent,
  },
  render: (args) => <TabContentContainer {...args} />,
};
