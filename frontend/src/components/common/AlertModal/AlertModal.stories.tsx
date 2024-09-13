import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import AlertModal from './AlertModal';
import Button from '../Button/Button';

const meta = {
  title: 'modal/AlertModal',
  component: AlertModal,
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const 기본_알림_모달: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <Button text="알림 모달 열기" onClick={() => setIsOpen(true)} />
        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="알림 모달 제목"
          message={'에러 메세지 발생!!!\n다시 시도해주세요!'}
        />
      </>
    );
  },
};
