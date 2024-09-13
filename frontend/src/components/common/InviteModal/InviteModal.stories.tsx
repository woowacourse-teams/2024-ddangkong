import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import InviteModal from './InviteModal';

const meta = {
  title: 'modal/InviteModal',
  component: InviteModal,
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
      description: '모달을 열고 닫기 위한 핸들러 함수입니다.',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof InviteModal>;

export default meta;

type Story = StoryObj<typeof InviteModal>;

export const 초대_모달: Story = {
  parameters: {
    docs: {
      description: {
        story: '초대 모달',
      },
    },
  },
  args: {
    isOpen: true,
  },
};
