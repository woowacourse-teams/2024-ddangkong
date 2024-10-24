import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';

import FinalButton from './FinalButton';

import { ERROR_MESSAGE } from '@/constants/message';
import { MOCK_API_URL } from '@/constants/url';
import { server } from '@/mocks/server';
import { customRenderWithIsMaster } from '@/utils/test-utils';

describe('FinalButton 테스트', () => {
  it('확인 버튼을 클릭했을 때, 방 초기화 API에서 에러가 발생하면 알림 모달이 뜬다.', async () => {
    const user = userEvent.setup();
    server.use(
      http.patch(MOCK_API_URL.resetRoom, async () => {
        return HttpResponse.json(
          {
            errorCode: 'NOT_FOUND_ROOM',
            message: ERROR_MESSAGE.NOT_FOUND_ROOM,
          },
          { status: 400 },
        );
      }),
    );

    customRenderWithIsMaster(<FinalButton />, true);

    const finalButton = await screen.findByRole('button', { name: '대기실로 이동' });
    await user.click(finalButton);

    await waitFor(() => {
      const closeIcon = screen.getByAltText('닫기 버튼');
      expect(closeIcon).toBeInTheDocument();
    });
  });
});
