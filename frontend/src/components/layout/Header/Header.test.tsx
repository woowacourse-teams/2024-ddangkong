import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { RoomSettingHeader } from './Header';

import { customRenderWithIsMaster } from '@/utils/test-utils';

describe('Header 테스트', () => {
  it('방 설정 버튼을 클릭했을 때, 방 설정 모달이 뜬다.', async () => {
    const user = userEvent.setup();
    customRenderWithIsMaster(<RoomSettingHeader title="밸런스 게임" />, true);

    const roomSettingButton = await screen.findByAltText('방 설정');
    await user.click(roomSettingButton);

    await waitFor(() => {
      const category = screen.getByText('카테고리');
      expect(category).toBeInTheDocument();
    });
  });
});
