import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import AlertModal from './AlertModal';
import Button from '../common/Button/Button';

const meta = {
  title: 'modal/AlertModal',
  component: AlertModal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      default: true,
      description: '모달이 열렸는지 여부를 나타냅니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClose: {
      description: '모달을 닫기 위한 핸들러 함수입니다.',
    },
    onConfirm: {
      description: '확인을 통해 다음 동작을 수행하는 핸들러 함수입니다.',
    },
  },
  args: {
    onClose: fn(),
    onConfirm: fn(),
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const 알림_모달: Story = {
  parameters: {
    docs: {
      description: {
        story: '안내 모달',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button text="알림 모달 열기" onClick={() => setIsOpen(true)} />
        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="알림 모달 제목"
          message={'대화를 충분히 나누셨나요?\n확인을 누르면 다음 라운드로 진행됩니다 :)'}
        />
      </>
    );
  },
};
