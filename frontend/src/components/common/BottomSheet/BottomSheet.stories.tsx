import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import BottomSheet from './BottomSheet';

const meta = {
  title: 'BottomSheet/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '바텀 시트가 열렸는지 여부를 나타냅니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClose: {
      description: '바텀 시트를 닫기 위한 핸들러 함수입니다.',
    },
    children: {
      control: 'text',
      description: '바텀 시트 내부에 렌더링될 내용입니다.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const 기본: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 바텀 시트',
      },
    },
  },
  args: {
    isOpen: true,
    children: '바텀 시트 내용입니다.',
    onClose: fn(),
  },
};
