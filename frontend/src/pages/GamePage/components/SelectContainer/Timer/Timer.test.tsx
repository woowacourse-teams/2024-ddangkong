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
});
