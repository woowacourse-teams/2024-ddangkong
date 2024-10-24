import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';

import RoomSetting from './RoomSetting';

import { MOCK_API_URL } from '@/constants/url';
import { server } from '@/mocks/server';
import { customRender } from '@/utils/test-utils';

describe('RoomSetting 컴포넌트 테스트', () => {
  it('방장이 RoomSetting를 누르면 설정 modal이 뜬다', async () => {
    // Given
    const user = userEvent.setup();
    customRender(<RoomSetting />);
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
    server.use(
      http.get(MOCK_API_URL.getUserInfo, async () => {
        return HttpResponse.json(
          {
            member: {
              isMaster: false,
            },
          },
          { status: 400 },
        );
      }),
    );
    const user = userEvent.setup();
    customRender(<RoomSetting />);
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
