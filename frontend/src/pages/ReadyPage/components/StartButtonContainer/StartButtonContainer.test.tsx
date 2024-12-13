import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import StartButtonContainer from './StartButtonContainer';

import useIsMaster from '@/hooks/useIsMaster';
import { customRender } from '@/utils/test-utils';

jest.mock('@/hooks/useIsMaster');

describe('StartButtonContainer 테스트', () => {
  it('방장이 게임 시작 버튼을 클릭하면 카운트 다운을 시작한다.', async () => {
    // Given
    (useIsMaster as jest.Mock).mockReturnValue(true);
    const user = userEvent.setup();
    customRender(<StartButtonContainer />);
    const COUNTDOWN_LABEL_TEXT = '게임 시작 3초 전';

    // When
    const button = await screen.findByRole('button', { name: '시작' });
    await user.click(button);

    // Then
    await waitFor(() => {
      expect(screen.getByLabelText(COUNTDOWN_LABEL_TEXT)).toBeInTheDocument();
    });
  });
});
