import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';

import SelectContainer from './SelectContainer';

import { ERROR_MESSAGE } from '@/constants/message';
import { MOCK_API_URL } from '@/constants/url';
import BALANCE_CONTENT from '@/mocks/data/balanceContent.json';
import { server } from '@/mocks/server';
import { customRender } from '@/utils/test-utils';

describe('SelectContainer', () => {
  it('옵션을 선택하고 선택 완료 버튼을 클릭했을 때, 선택 완료 API에서 에러가 발생하면 알림 모달이 뜬다.', async () => {
    const SELECT_OPTION = BALANCE_CONTENT.firstOption.name;
    const user = userEvent.setup();
    server.use(
      http.post(MOCK_API_URL.vote, () => {
        return new HttpResponse(
          JSON.stringify({ errorCode: 'ALREADY_VOTED', message: ERROR_MESSAGE.ALREADY_VOTED }),
          { status: 400 },
        );
      }),
    );

    customRender(<SelectContainer />);

    const optionButton = await screen.findByRole('radio', { name: SELECT_OPTION });
    await user.click(optionButton);

    const selectButton = await screen.findByRole('button', { name: '선택' });
    await user.click(selectButton);

    await waitFor(() => {
      const closeIcon = screen.getByAltText('닫기 버튼');
      expect(closeIcon).toBeInTheDocument();
    });
  });
});
