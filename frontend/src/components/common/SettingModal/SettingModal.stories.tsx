import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import SettingModal from './SettingModal';
import Button from '../Button/Button';

const meta = {
  title: 'SettingModal',
  component: SettingModal,
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
} satisfies Meta<typeof SettingModal>;

export default meta;

type Story = StoryObj<typeof SettingModal>;

export const 방_설정_모달: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <Button text="방 설정 모달 열기" onClick={() => setIsOpen(true)} />
        <SettingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
