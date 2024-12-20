import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    text: {
      description: '드랍다운이 선택된 옵션을 나타냅니다.',
    },
    optionList: {
      description: '드랍다운 내에 들어갈 옵션 배열을 넘겨줄 수 있습니다.',
    },
    handleClickOption: {
      description: '옵션을 선택했을 때 동작하는 이벤트 핸들러입니다.',
    },
  },
  args: {
    handleClickOption: fn(),
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const 기본_드랍다운: Story = {
  render: () => {
    const [text, setText] = useState('연애');

    return (
      <Dropdown
        text={text}
        optionList={[
          {
            value: 'ROMANCE',
            label: '연애',
          },
          {
            value: 'IF',
            label: '만약에',
          },
          {
            value: 'MBTI',
            label: 'MBTI',
          },
          {
            value: 'FOOD',
            label: '음식',
          },
        ]}
        handleClickOption={(e) => setText(e.currentTarget.value)}
      />
    );
  },
};
