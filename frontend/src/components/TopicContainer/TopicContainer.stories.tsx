import type { Meta, StoryObj } from '@storybook/react';

import TopicContainer from './TopicContainer';

const meta = {
  title: 'TopicContainer',
  component: TopicContainer,
} satisfies Meta<typeof TopicContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본_카테고리_및_질문: Story = {};
