import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { MutableSnapshot } from 'recoil';

import RoomSetting from './RoomSetting';

import { memberInfoState } from '@/recoil/atom';
import { customRender } from '@/utils/test-utils';

describe('RoomSetting 컴포넌트 테스트', () => {
  it('방장이 RoomSetting를 누르면 설정 modal이 뜬다', async () => {
    // Given
    const initializeState = (snap: MutableSnapshot) => {
      snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster: true });
    };
    const user = userEvent.setup();
    customRender(<RoomSetting />, { initializeState });
    const settingButton = await screen.findByRole('button', { name: '방 설정' });

    // When
    await user.click(settingButton);

    // Then
    await waitFor(() => {
      const roomSetting = screen.getByText('방 설정');
      expect(roomSetting).toBeInTheDocument();
    });
  });

  it('방장이 아닌 사람이 RoomSetting를 누르면 설정 modal이 뜨지 않는다', async () => {
    // Given
    const initializeState = (snap: MutableSnapshot) => {
      snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster: false });
    };
    const user = userEvent.setup();
    customRender(<RoomSetting />, { initializeState });
    const optionButton = await screen.findByRole('button', { name: '방 설정' });

    // When
    await user.click(optionButton);

    // Then
    await waitFor(() => {
      const roomSetting = screen.queryByText('방 설정');
      expect(roomSetting).not.toBeInTheDocument();
    });
  });
});
