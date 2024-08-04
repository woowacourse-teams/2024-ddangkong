import type { Meta, StoryObj } from '@storybook/react';

import CategoryContainer from './CategoryContainer';

const meta = {
  component: CategoryContainer,
} satisfies Meta<typeof CategoryContainer>;

export const 기본값: Story = {
  args: {
    category: '연애',
  },
};

export default meta;
type Story = StoryObj<typeof CategoryContainer>;
