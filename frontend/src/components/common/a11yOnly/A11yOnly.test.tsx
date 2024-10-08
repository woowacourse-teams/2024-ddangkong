import { render, screen } from '@testing-library/react';

import AllyOnly from './A11yOnly';

describe('A11yOnly 컴포넌트 테스트', () => {
  const SCREEN_READER_TEXT = '화면에 표시되지 않고 스크린 리더로 읽을 수 있습니다.';
  test('스크린 리더 전용 텍스트가 DOM에 존재하는지 확인한다.', () => {
    render(<AllyOnly>{SCREEN_READER_TEXT}</AllyOnly>);

    const screenReaderElement = screen.getByText(SCREEN_READER_TEXT);

    expect(screenReaderElement).toBeInTheDocument();
  });

  test('aria-label 속성이 적용된 텍스트가 스크린 리더로 읽히는지 확인한다.', () => {
    render(<AllyOnly aria-label={SCREEN_READER_TEXT}>안녕하세요.</AllyOnly>);

    const screenReaderElement = screen.getByLabelText(SCREEN_READER_TEXT);

    expect(screenReaderElement).toBeInTheDocument();
  });

  test('aria-live 속성이 적용된 실시간 업데이트 메시지가 스크린 리더에 의해 읽히는지 확인한다.', () => {
    render(<AllyOnly aria-live="polite">{SCREEN_READER_TEXT}</AllyOnly>);

    const liveUpdateMessage = screen.getByText(SCREEN_READER_TEXT);

    expect(liveUpdateMessage).toHaveAttribute('aria-live', 'polite');
  });

  test('as 속성을 사용하여 p 태그로 렌더링되는지 확인한다.', () => {
    render(<AllyOnly as="p">{SCREEN_READER_TEXT}</AllyOnly>);

    const screenReaderElement = screen.getByText(SCREEN_READER_TEXT);

    expect(screenReaderElement.tagName.toLowerCase()).toBe('p');
  });
});
