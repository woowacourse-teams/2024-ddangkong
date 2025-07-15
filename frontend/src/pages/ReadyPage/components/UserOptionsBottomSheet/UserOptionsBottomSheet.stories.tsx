import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';

import UserOptionsBottomSheet from './UserOptionsBottomSheet';

const meta = {
  title: 'BottomSheet/UserOptionsBottomSheet',
  component: UserOptionsBottomSheet,
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
    memberId: {
      description: '유저 아이디',
    },
    nickname: {
      description: '유저 닉네임',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof UserOptionsBottomSheet>;

export default meta;

type Story = StoryObj<typeof UserOptionsBottomSheet>;

export const 기본: Story = {
  parameters: {
    docs: {
      description: {
        story: '사용자 옵션 바텀 시트',
      },
    },
  },
  args: {
    isOpen: true,
    memberId: 1,
    nickname: '썬데이',
    onClose: fn(),
  },
};
