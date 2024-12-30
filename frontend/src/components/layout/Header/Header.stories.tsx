import type { StoryObj, Meta } from '@storybook/react';

import Header, { BackHeader, RoomSettingHeader, RoundResultHeader, TitleHeader } from './Header';

const meta = {
  title: 'Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const 가운데_제목_헤더: Story = {
  render: () => <TitleHeader title="가운데 제목 헤더" />,
};

export const 방_설정_헤더: Story = {
  render: () => <RoomSettingHeader title="방 설정 헤더" />,
};

export const 라운드_헤더: Story = {
  render: () => <RoundResultHeader />,
};

export const 투표_현황_헤더: Story = {
  render: () => <BackHeader title="투표 현황" />,
};
