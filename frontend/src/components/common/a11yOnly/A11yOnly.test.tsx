import { render, screen } from '@testing-library/react';

import AllyOnly from './A11yOnly';

describe('A11yOnly 컴포넌트 테스트', () => {
  test('스크린 리더 전용 텍스트가 DOM에 존재하는지 확인한다.', () => {
    render(<AllyOnly>화면에 표시되지 않고 스크린 리더로 읽을 수 있습니다.</AllyOnly>);

    const screenReaderElement = screen.getByText(
      '화면에 표시되지 않고 스크린 리더로 읽을 수 있습니다.',
    );

    expect(screenReaderElement).toBeInTheDocument();
  });

  test('aria-label 속성이 적용된 텍스트가 스크린 리더로 읽히는지 확인한다.', () => {
    render(
      <AllyOnly aria-label="화면에 표시되지 않고 스크린 리더로 읽을 수 있습니다.">
        안녕하세요.
      </AllyOnly>,
    );

    const screenReaderElement = screen.getByLabelText(
      '화면에 표시되지 않고 스크린 리더로 읽을 수 있습니다.',
    );

    expect(screenReaderElement).toBeInTheDocument();
  });

  test('aria-live 속성이 적용된 실시간 업데이트 메시지가 스크린 리더에 의해 읽히는지 확인한다.', () => {
    render(
      <AllyOnly as="div" aria-live="polite">
        실시간 업데이트 메시지
      </AllyOnly>,
    );

    const liveUpdateMessage = screen.getByText('실시간 업데이트 메시지');

    expect(liveUpdateMessage).toHaveAttribute('aria-live', 'polite');
  });
});
