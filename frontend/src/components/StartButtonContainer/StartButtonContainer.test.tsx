import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import StartButtonContainer from './StartButtonContainer';

import { customRenderWithIsMaster } from '@/utils/test-utils';

describe('StartButtonContainer 테스트', () => {
  it('게임 시작 버튼을 클릭하면 카운트 다운을 시작한다.', async () => {
    const user = userEvent.setup();
    customRenderWithIsMaster(<StartButtonContainer />, true);
    const COUNTDOWN_LABEL_TEXT = '게임 시작 3초 전';

    const button = await screen.findByRole('button', { name: '시작' });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByLabelText(COUNTDOWN_LABEL_TEXT)).toBeInTheDocument();
    });
  });
});
