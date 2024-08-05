import type { Meta, StoryObj } from '@storybook/react';

import TabContentContainer from './TabContentContainer';

const meta = {
  title: 'TabContentContainer',
  component: TabContentContainer,
} satisfies Meta<typeof TabContentContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 그룹_탭: Story = {
  args: {
    isGroupTabActive: true,
  },
};

export const 전체_탭: Story = {
  args: {
    isGroupTabActive: false,
  },
};
