import type { Meta, StoryObj } from '@storybook/react';

import RoomSetting from './RoomSetting';

const meta = {
  title: 'RoomSetting',
  component: RoomSetting,
} satisfies Meta<typeof RoomSetting>;

export const 기본값: Story = {
  args: {
    category: '재미',
  },
};

export default meta;
type Story = StoryObj<typeof RoomSetting>;
