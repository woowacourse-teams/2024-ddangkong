import { act, renderHook } from '@testing-library/react';

import useTimer from './hooks/useTimer';
import { convertMsecToSecond, formatLeftRoundTime } from './Timer.util';

describe('Timer 테스트', () => {
  describe('formatTimer 유틸 함수 테스트', () => {
    it('30초의 제한시간을 입력받으면 00:30 으로 포맷팅한 string값을 반환한다.', () => {
      const formattedTimer = formatLeftRoundTime(30);

      expect(formattedTimer).toBe('00:30');
    });

    it('10000 밀리초의 제한시간을 입력받으면 10초를 number 타입으로 반환한다.', () => {
      const convertedTime = convertMsecToSecond(10000);

      expect(convertedTime).toBe(10);
    });
  });
  describe('Timer 훅 테스트', () => {
    jest.useFakeTimers();
    const voteMock = jest.fn();
    const timeLimit = 10000;

    it('타이머가 종료되었을 때 선택 완료를 누르지 않아도 선택된 옵션이 있으면 투표한다.', () => {
      const isSelectedOption = true;
      const isVoted = false;

      const { result } = renderHook(() =>
        useTimer({ timeLimit, isSelectedOption, isVoted, vote: voteMock }),
      );

      // act : 인자로 받은 함수를 실행시켜서 가상의 DOM(jsdom)에 적용하는 역할
      // 상태 변경과 그로 인한 DOM 업데이트가 모두 완료된 후에 테스트가 실행되도록 보장
      act(() => {
        jest.advanceTimersByTime(timeLimit);
      });

      expect(result.current.leftRoundTime).toBe(0);
      expect(voteMock).toHaveBeenCalled();
    });
    it('타이머가 종료되었을 때 이미 투표를 했다면 또 투표를 하지 않는다.', () => {
      const isSelectedOption = true;
      const isVoted = true;

      const { result } = renderHook(() =>
        useTimer({ timeLimit, isSelectedOption, isVoted, vote: voteMock }),
      );

      act(() => {
        jest.advanceTimersByTime(timeLimit);
      });

      expect(result.current.leftRoundTime).toBe(0);
      expect(voteMock).not.toHaveBeenCalled();
    });
    it('타이머가 종료되었을 때 선택된 옵션이 없다면 투표되지 않고 기권한다.', () => {
      const isSelectedOption = false;
      const isVoted = false;

      const { result } = renderHook(() =>
        useTimer({ timeLimit, isSelectedOption, isVoted, vote: voteMock }),
      );

      act(() => {
        jest.advanceTimersByTime(timeLimit);
      });

      expect(result.current.leftRoundTime).toBe(0);
      expect(voteMock).not.toHaveBeenCalled();
    });
  });
});
