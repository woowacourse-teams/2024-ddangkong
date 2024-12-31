import type { StoryObj, Meta } from '@storybook/react';

import Header from './Header';

import { RoomSettingHeader, RoundResultHeader, TitleHeader } from '.';

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
