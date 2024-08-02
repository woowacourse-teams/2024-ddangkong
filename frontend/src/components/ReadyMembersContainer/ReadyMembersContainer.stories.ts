import type { Meta, StoryObj } from '@storybook/react';

import ReadyMembersContainer from './ReadyMembersContainer';

import roomInfo from '@/mocks/data/roomInfo.json';

const meta: Meta<typeof ReadyMembersContainer> = {
  component: ReadyMembersContainer,
};

export const 기본값: Story = {
  args: {
    members: roomInfo.members,
  },
};

export default meta;
type Story = StoryObj<typeof ReadyMembersContainer>;
