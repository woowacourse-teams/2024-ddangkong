import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { MutableSnapshot } from 'recoil';

import CategoryContainer from './CategoryContainer';

import { memberInfoState } from '@/recoil/atom';
import { customRender } from '@/utils/test-utils';

describe('CategoryContainer 컴포넌트 테스트', () => {
  it('방장이 CategoryContainer를 누르면 설정 modal이 뜬다', async () => {
    // Given
    const initializeState = (snap: MutableSnapshot) => {
      snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster: true });
    };
    const user = userEvent.setup();
    customRender(<CategoryContainer />, { initializeState });
    const optionButton = await screen.findByRole('button', { name: '카테고리 설정 버튼' });

    // When
    await user.click(optionButton);

    // Then
    await waitFor(() => {
      const roomSetting = screen.getByText('방 설정');
      expect(roomSetting).toBeInTheDocument();
    });
  });

  it('방장이 아닌 사람이 CategoryContainer를 누르면 설정 modal이 뜨지 않는다', async () => {
    // Given
    const initializeState = (snap: MutableSnapshot) => {
      snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster: false });
    };
    const user = userEvent.setup();
    customRender(<CategoryContainer />, { initializeState });
    const optionButton = await screen.findByRole('button', { name: '카테고리 설정 버튼' });

    // When
    await user.click(optionButton);

    // Then
    await waitFor(() => {
      // getByText을 사용하면 해당 텍스트를 찾지 못하면 에러가 발생해서
      // queryByText 사용

      const roomSetting = screen.queryByText('방 설정');
      expect(roomSetting).not.toBeInTheDocument();
    });
  });
});
