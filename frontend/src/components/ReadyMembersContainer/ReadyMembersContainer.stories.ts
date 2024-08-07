import type { Meta, StoryObj } from '@storybook/react';

import ReadyMembersContainer from './ReadyMembersContainer';

import roomInfo from '@/mocks/data/roomInfo.json';

const meta = {
  component: ReadyMembersContainer,
} satisfies Meta<typeof ReadyMembersContainer>;

export const 기본값: Story = {
  args: {
    members: roomInfo.members,
  },
};

export default meta;
type Story = StoryObj<typeof ReadyMembersContainer>;
