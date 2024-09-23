import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CategoryContainer from './CategoryContainer';

import { customRender } from '@/utils/test-utils';

describe('CategoryContainer 컴포넌트 테스트', () => {
  it('방장이 CategoryContainer를 누르면 설정 modal이 뜬다', async () => {
    // Given
    const user = userEvent.setup();
    customRender(<CategoryContainer />);
    const optionButton = await screen.findByRole('button', { name: '카테고리' });

    // When
    await user.click(optionButton);

    // Then
  });

  it('방장이 아닌 사람이 CategoryContainer를 누르면 설정 modal이 뜨지 않는다', () => {});
});
