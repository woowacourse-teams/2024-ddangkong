import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import RoomSettingModal from './RoomSettingModal';
import Button from '../Button/Button';

const meta = {
  title: 'modal/RoomSettingModal',
  component: RoomSettingModal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달이 열렸는지 여부를 나타냅니다.',
    },
    onClose: {
      description: '모달을 열고 닫기 위한 핸들러 함수입니다.',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof RoomSettingModal>;

export default meta;

type Story = StoryObj<typeof RoomSettingModal>;

export const 방_설정_모달: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <Button text="방 설정 모달 열기" onClick={() => setIsOpen(true)} />
        <RoomSettingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
