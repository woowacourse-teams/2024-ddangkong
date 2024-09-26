import { screen } from '@testing-library/react';
import { act } from 'react';

import Countdown from './Countdown';

import { customRender } from '@/utils/test-utils';

describe('Countdown 테스트', () => {
  it('카운트 다운이 시작되고 3초 후 게임 화면으로 넘어간다.', async () => {
    jest.useFakeTimers();

    const goToGameMock = jest.fn();
    customRender(<Countdown goToGame={goToGameMock} />);
    const COUNTDOWN_LABEL_TEXT = '게임 시작 3초 전';
    const COUNTDOWN_LENGTH = 3000;

    expect(screen.getByLabelText(COUNTDOWN_LABEL_TEXT)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(COUNTDOWN_LENGTH);
    });

    expect(goToGameMock).toHaveBeenCalled();
  });
});
