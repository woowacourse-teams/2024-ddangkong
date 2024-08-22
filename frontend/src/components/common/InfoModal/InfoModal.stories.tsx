import { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import InfoModal from './InfoModal';

const meta = {
  title: 'InfoModal',
  component: InfoModal,
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
} satisfies Meta<typeof InfoModal>;

export default meta;

type Story = StoryObj<typeof InfoModal>;

export const 안내_모달: Story = {
  parameters: {
    docs: {
      description: {
        story: '안내_모달',
      },
    },
  },
  args: {
    isOpen: true,
    text: '대화를 충분히 나누셨나요?\n확인을 누르면 다음 라운드로 진행됩니다 :)',
  },
};
