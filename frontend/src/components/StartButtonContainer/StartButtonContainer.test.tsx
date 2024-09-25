import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { MutableSnapshot } from 'recoil';

import StartButtonContainer from './StartButtonContainer';

import { memberInfoState } from '@/recoil/atom';
import { customRender } from '@/utils/test-utils';

describe('StartButtonContainer 테스트', () => {
  it('게임 시작 버튼을 클릭하면 카운트 다운을 시작한다.', async () => {
    const initializeIsMaster = (snap: MutableSnapshot) => {
      snap.set(memberInfoState, { memberId: 1, nickname: 'Test User', isMaster: true });
    };

    const user = userEvent.setup();
    customRender(<StartButtonContainer />, { initializeState: initializeIsMaster });
    const COUNTDOWN_LABEL_TEXT = '게임 시작 3초 전';

    const button = await screen.findByRole('button', { name: '시작' });
    await user.click(button);

    expect(screen.getByLabelText(COUNTDOWN_LABEL_TEXT)).toBeInTheDocument();
  });
});
